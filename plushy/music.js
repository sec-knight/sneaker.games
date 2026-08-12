(()=>{
  let ctx=null, master=null, musicBus=null, sfxBus=null, timer=null, nextTime=0, step=0, started=false;
  let walking=false, footTimer=null, footSide=0, lastHp=100, lastForest=0;
  const beat=.34;
  const melody=[72,null,76,null,79,76,null,74,72,null,67,null,69,71,null,null,72,null,76,79,null,81,null,79,76,null,74,71,null,69,null,67,null];
  const bass=[48,null,null,null,48,null,null,null,45,null,null,null,43,null,null,null,48,null,null,null,52,null,null,null,45,null,null,null,43,null,null,null];
  const hz=m=>440*Math.pow(2,(m-69)/12), rnd=(a,b)=>a+Math.random()*(b-a);

  function ensureAudio(){
    if(ctx)return true;
    const AC=window.AudioContext||window.webkitAudioContext;
    if(!AC)return false;
    ctx=new AC();
    master=ctx.createGain(); musicBus=ctx.createGain(); sfxBus=ctx.createGain();
    master.gain.value=.72; musicBus.gain.value=.82; sfxBus.gain.value=.9;
    musicBus.connect(master); sfxBus.connect(master); master.connect(ctx.destination);
    return true;
  }

  function tone(midi,at,dur,type='triangle',volume=.05,cutoff=1800,bus=musicBus,slideTo=null){
    if(midi==null||!ctx)return;
    const osc=ctx.createOscillator(),gain=ctx.createGain(),filter=ctx.createBiquadFilter();
    osc.type=type; osc.frequency.setValueAtTime(hz(midi),at);
    if(slideTo!=null)osc.frequency.exponentialRampToValueAtTime(hz(slideTo),at+dur);
    filter.type='lowpass'; filter.frequency.setValueAtTime(cutoff,at); filter.Q.value=.7;
    gain.gain.setValueAtTime(.0001,at);
    gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),at+.012);
    gain.gain.exponentialRampToValueAtTime(.0001,at+dur);
    osc.connect(filter); filter.connect(gain); gain.connect(bus||master);
    osc.start(at); osc.stop(at+dur+.03);
  }

  function noise(at,dur=.12,volume=.03,cutoff=1800){
    if(!ctx)return;
    const n=Math.max(1,Math.floor(ctx.sampleRate*dur)),buf=ctx.createBuffer(1,n,ctx.sampleRate),d=buf.getChannelData(0);
    for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*(1-i/n);
    const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();
    src.buffer=buf; filter.type='lowpass'; filter.frequency.value=cutoff;
    gain.gain.setValueAtTime(volume,at); gain.gain.exponentialRampToValueAtTime(.0001,at+dur);
    src.connect(filter); filter.connect(gain); gain.connect(sfxBus); src.start(at);
  }

  function scheduleStep(at){
    const i=step%melody.length;
    tone(melody[i],at,beat*.64,'triangle',.045,2100);
    tone(bass[i],at,beat*1.7,'sine',.038,900);
    if(i%8===6&&Math.random()<.65)tone(84+(Math.random()<.5?0:2),at+beat*.48,beat*.34,'square',.012,2600);
    if(i%16===14&&Math.random()<.5)tone(67,at+beat*.72,beat*.5,'triangle',.018,1500);
    step++;
  }

  function scheduler(){if(!ctx)return;while(nextTime<ctx.currentTime+.22){scheduleStep(nextTime);nextTime+=beat;}}

  async function startMusic(){
    if(!ensureAudio())return;
    if(ctx.state==='suspended')await ctx.resume();
    if(started)return;
    started=true; nextTime=ctx.currentTime+.06; scheduler(); timer=setInterval(scheduler,90);
  }

  function wake(){if(!ensureAudio())return false;if(ctx.state==='suspended')ctx.resume();return true;}
  function now(){return ctx?ctx.currentTime+.005:0;}

  function attack(){
    if(!wake())return; const t=now(),v=rnd(.025,.04),p=rnd(-1.2,1.2);
    noise(t,.13,v*.75,2400); tone(69+p,t,.16,'triangle',v,2300,sfxBus,76+p); tone(81+p,t+.045,.09,'sine',v*.45,3000,sfxBus,78+p);
  }
  function dodge(){
    if(!wake())return; const t=now(),p=rnd(-1,1);
    noise(t,.11,rnd(.018,.03),3300); tone(77+p,t,.12,'sine',rnd(.018,.027),2800,sfxBus,84+p);
  }
  function foot(){
    if(!wake())return; const t=now(),base=(footSide++%2?57:55)+rnd(-.8,.8);
    tone(base,t,.075,'sine',rnd(.012,.021),800,sfxBus,base-2); tone(base+12,t+.012,.045,'triangle',rnd(.006,.011),1300,sfxBus);
  }
  function hurt(){
    if(!wake())return; const t=now(),p=rnd(-1.4,.5);
    noise(t,.09,.022,700); tone(48+p,t,.22,'sawtooth',.028,650,sfxBus,42+p); tone(40+p,t+.055,.18,'sine',.03,500,sfxBus,37+p);
  }
  function heal(){
    if(!wake())return; const t=now(),p=rnd(-.6,.8);
    tone(55+p,t,.34,'sine',.025,850,sfxBus,60+p); tone(67+p,t+.08,.28,'triangle',.018,1400,sfxBus,72+p); tone(79+p,t+.26,.11,'sine',.025,2500,sfxBus);
  }
  function pickup(){
    if(!wake())return; const t=now(),p=rnd(-1,1);
    tone(76+p,t,.08,'triangle',.025,2400,sfxBus); tone(83+p,t+.065,.11,'sine',.027,3000,sfxBus); if(Math.random()<.45)tone(88+p,t+.13,.07,'square',.009,3200,sfxBus);
  }
  function poof(){
    if(!wake())return; const t=now(),p=rnd(-1.5,1.5);
    noise(t,.14,.026,1100); tone(55+p,t,.13,'triangle',.021,1000,sfxBus,50+p);
  }

  function setWalking(on){
    if(on===walking)return; walking=on;
    if(footTimer){clearInterval(footTimer);footTimer=null;}
    if(on){foot();footTimer=setInterval(()=>{if(walking)foot();},rnd(245,285));}
  }

  function monitorHud(){
    const hp=document.querySelector('#hp'),forest=document.querySelector('#forest');
    if(hp){
      const obs=new MutationObserver(()=>{const v=parseFloat(hp.style.width)||0;if(v<lastHp-.5)hurt();else if(v>lastHp+.5)heal();lastHp=v;});
      obs.observe(hp,{attributes:true,attributeFilter:['style']});
    }
    if(forest){
      const obs=new MutationObserver(()=>{const v=parseFloat(forest.style.width)||0;if(v>lastForest+.5){pickup();setTimeout(poof,55);}lastForest=v;});
      obs.observe(forest,{attributes:true,attributeFilter:['style']});
    }
  }

  const moveKeys=new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight']);
  const held=new Set();
  addEventListener('keydown',e=>{
    if(moveKeys.has(e.code)){held.add(e.code);setWalking(true);}
    if(e.code==='Space'&&!e.repeat)attack();
    if(e.code.includes('Shift')&&!e.repeat)dodge();
  });
  addEventListener('keyup',e=>{if(moveKeys.has(e.code)){held.delete(e.code);if(!held.size)setWalking(false);}});
  addEventListener('blur',()=>{held.clear();setWalking(false);});

  function hookTouch(){
    const cast=document.querySelector('#cast'),dod=document.querySelector('#dodge'),stick=document.querySelector('#stick');
    cast?.addEventListener('pointerdown',attack); dod?.addEventListener('pointerdown',dodge);
    stick?.addEventListener('pointerdown',()=>setWalking(true));
    stick?.addEventListener('pointerup',()=>setWalking(false));
    stick?.addEventListener('pointercancel',()=>setWalking(false));
  }

  function setMuted(muted){if(master)master.gain.setTargetAtTime(muted?0:.72,ctx.currentTime,.03);}
  window.PlushyMusic={start:startMusic,setMuted,sfx:{attack,dodge,foot,hurt,heal,pickup,poof}};
  for(const id of ['go','again'])document.querySelector('#'+id)?.addEventListener('click',startMusic);
  hookTouch(); monitorHud();
})();
