(()=>{
  let ctx=null, master=null, timer=null, nextTime=0, step=0, started=false;
  const beat=.34;
  const melody=[72,null,76,null,79,76,null,74,72,null,67,null,69,71,null,null,72,null,76,79,null,81,null,79,76,null,74,71,null,69,null,67,null];
  const bass=[48,null,null,null,48,null,null,null,45,null,null,null,43,null,null,null,48,null,null,null,52,null,null,null,45,null,null,null,43,null,null,null];
  const hz=m=>440*Math.pow(2,(m-69)/12);

  function tone(midi,at,dur,type='triangle',volume=.05,cutoff=1800){
    if(midi==null||!ctx)return;
    const osc=ctx.createOscillator(),gain=ctx.createGain(),filter=ctx.createBiquadFilter();
    osc.type=type; osc.frequency.setValueAtTime(hz(midi),at);
    filter.type='lowpass'; filter.frequency.setValueAtTime(cutoff,at); filter.Q.value=.7;
    gain.gain.setValueAtTime(.0001,at);
    gain.gain.exponentialRampToValueAtTime(Math.max(.0002,volume),at+.018);
    gain.gain.exponentialRampToValueAtTime(.0001,at+dur);
    osc.connect(filter); filter.connect(gain); gain.connect(master);
    osc.start(at); osc.stop(at+dur+.03);
  }

  function scheduleStep(at){
    const i=step%melody.length;
    tone(melody[i],at,beat*.64,'triangle',.045,2100);
    tone(bass[i],at,beat*1.7,'sine',.038,900);
    if(i%8===6&&Math.random()<.65) tone(84+(Math.random()<.5?0:2),at+beat*.48,beat*.34,'square',.012,2600);
    if(i%16===14&&Math.random()<.5) tone(67,at+beat*.72,beat*.5,'triangle',.018,1500);
    step++;
  }

  function scheduler(){
    if(!ctx)return;
    while(nextTime<ctx.currentTime+.22){scheduleStep(nextTime);nextTime+=beat;}
  }

  async function startMusic(){
    if(!ctx){
      const AC=window.AudioContext||window.webkitAudioContext;
      if(!AC)return;
      ctx=new AC();
      master=ctx.createGain(); master.gain.value=.72; master.connect(ctx.destination);
    }
    if(ctx.state==='suspended') await ctx.resume();
    if(started)return;
    started=true; nextTime=ctx.currentTime+.06; scheduler(); timer=setInterval(scheduler,90);
  }

  function setMuted(muted){if(master) master.gain.setTargetAtTime(muted?0:.72,ctx.currentTime,.03);}
  window.PlushyMusic={start:startMusic,setMuted};
  for(const id of ['go','again']) document.querySelector('#'+id)?.addEventListener('click',startMusic);
})();
