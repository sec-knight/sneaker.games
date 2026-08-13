(()=>{
  const form=document.querySelector("[data-feedback-form]");
  if(!form)return;
  const status=form.querySelector("[data-feedback-status]");
  const submit=form.querySelector("button[type=submit]");
  const turnstileContainer=form.querySelector("[data-turnstile]");
  let token="",widgetId=null;

  const device=()=>{
    const w=Math.min(screen.width,screen.height);
    if(w<600)return"phone";
    if(w<1000)return"tablet";
    return"desktop";
  };
  const input=()=>matchMedia("(pointer: coarse)").matches?"touch":"keyboard";
  const say=(message,state="")=>{status.textContent=message;status.dataset.state=state;};

  async function connect(){
    try{
      const response=await fetch("/api/feedback",{headers:{"accept":"application/json"}});
      const config=await response.json();
      if(!response.ok||!config.ready||!config.siteKey)throw new Error();
      const script=document.createElement("script");
      script.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async=true;script.defer=true;
      script.onload=()=>{
        widgetId=window.turnstile.render(turnstileContainer,{sitekey:config.siteKey,theme:"light",callback:value=>{token=value;say("");}, "expired-callback":()=>{token="";say("Verification expired. Please try again.","error");}});
        submit.disabled=false;say("");
      };
      script.onerror=()=>say("Human verification could not load.","error");
      document.head.appendChild(script);
    }catch{
      say("Feedback is being connected. Please check back shortly.","error");
    }
  }

  form.addEventListener("submit",async event=>{
    event.preventDefault();
    if(!token){say("Please complete the human verification.","error");return;}
    const data=new FormData(form);
    const message=String(data.get("message")||"").trim();
    if(message.length<3||message.length>1200){say("Please write between 3 and 1,200 characters.","error");return;}
    submit.disabled=true;say("Sending…");
    try{
      const response=await fetch("/api/feedback",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({
        game:form.dataset.game,build:form.dataset.build,category:data.get("category"),message,
        website:data.get("website"),device:device(),input:input(),turnstileToken:token
      })});
      const result=await response.json();
      if(!response.ok)throw new Error(result.error||"Could not send feedback.");
      form.reset();say("Thank you. Your note landed safely in the workshop.","success");
    }catch(error){say(error.message||"Could not send feedback.","error");}
    finally{token="";if(widgetId!==null&&window.turnstile)turnstile.reset(widgetId);submit.disabled=false;}
  });
  connect();
})();
