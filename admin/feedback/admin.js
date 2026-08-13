(()=>{
  const list=document.querySelector("#feedback-list"),filter=document.querySelector("#status-filter"),message=document.querySelector("#admin-status");
  const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  async function load(){
    message.textContent="Loading…";
    try{
      const suffix=filter.value?("?status="+encodeURIComponent(filter.value)):"";
      const response=await fetch("/api/admin/feedback"+suffix,{headers:{"accept":"application/json"}});
      if(!response.ok)throw new Error(response.status===403?"Cloudflare Access is not configured for this inbox yet.":"Could not load feedback.");
      const {items}=await response.json();
      list.innerHTML=items.length?items.map(item=>`<article class="feedback-item">
        <div class="feedback-meta"><strong>${esc(item.category)}</strong><span>${esc(item.game_slug)} · ${esc(item.device_class)} · ${esc(item.input_method)}</span><time>${esc(new Date(item.created_at).toLocaleString())}</time></div>
        <p>${esc(item.message)}</p>
        <label>Status <select data-id="${esc(item.id)}">${["new","useful","planned","fixed","dismissed"].map(s=>`<option value="${s}" ${s===item.status?"selected":""}>${s}</option>`).join("")}</select></label>
      </article>`).join(""):'<p class="empty">No feedback in this view.</p>';
      message.textContent=`${items.length} submission${items.length===1?"":"s"}`;
    }catch(error){list.innerHTML="";message.textContent=error.message;}
  }
  list.addEventListener("change",async event=>{
    const select=event.target.closest("select[data-id]");if(!select)return;
    select.disabled=true;
    const response=await fetch("/api/admin/feedback",{method:"PATCH",headers:{"content-type":"application/json"},body:JSON.stringify({id:select.dataset.id,status:select.value})});
    select.disabled=false;if(!response.ok){message.textContent="Could not update that item.";load();}
  });
  filter.addEventListener("change",load);load();
})();
