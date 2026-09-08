var vl=Object.defineProperty;var Ml=(i,t,e)=>t in i?vl(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var V=(i,t,e)=>Ml(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();function yl(i){switch(i){case"frown":return`<circle cx="29" cy="38" r="6.5" fill="#fff"/>
    <circle cx="51" cy="38" r="6.5" fill="#fff"/>
    <circle class="pupil" cx="30.4" cy="39" r="3.2" fill="#3a2a58"/>
    <circle class="pupil" cx="52.4" cy="39" r="3.2" fill="#3a2a58"/>
    <circle cx="31.6" cy="37.8" r="1.15" fill="#fff"/>
    <circle cx="53.6" cy="37.8" r="1.15" fill="#fff"/>
    <path d="M32 56 Q40 50 48 56" fill="none" stroke="#3a2a58" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M36 54 Q40 57 44 54" fill="#ff4081" opacity=".35"/>`;case"wink":return`<path d="M24 38 Q29 36 34 38" fill="none" stroke="#3a2a58" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="51" cy="38" r="6.5" fill="#fff"/>
    <circle class="pupil" cx="52.4" cy="39" r="3.2" fill="#3a2a58"/>
    <circle cx="53.6" cy="37.8" r="1.15" fill="#fff"/>
    <path d="M34 52 Q40 56 46 52" fill="none" stroke="#3a2a58" stroke-width="2.2" stroke-linecap="round"/>`;case"sleepy":return`<path d="M24 39 Q29 37 34 39" fill="none" stroke="#3a2a58" stroke-width="2" stroke-linecap="round"/>
    <path d="M46 39 Q51 37 56 39" fill="none" stroke="#3a2a58" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="40" cy="54" rx="4" ry="2.5" fill="#3a2a58" opacity=".75"/>`;default:return`<circle cx="29" cy="38" r="6.5" fill="#fff"/>
    <circle cx="51" cy="38" r="6.5" fill="#fff"/>
    <circle class="pupil" cx="30.4" cy="39" r="3.2" fill="#3a2a58"/>
    <circle class="pupil" cx="52.4" cy="39" r="3.2" fill="#3a2a58"/>
    <circle cx="31.6" cy="37.8" r="1.15" fill="#fff"/>
    <circle cx="53.6" cy="37.8" r="1.15" fill="#fff"/>
    <path d="M34 52 Q40 58 46 52" fill="none" stroke="#3a2a58" stroke-width="2.2" stroke-linecap="round"/>`}}function Sl(i){switch(i){case"frown":return`<rect x="26" y="32" width="12" height="14" rx="4" fill="#fff"/>
    <rect x="42" y="32" width="12" height="14" rx="4" fill="#fff"/>
    <rect class="pupil" x="30" y="36" width="6" height="8" rx="2" fill="#3a2a58"/>
    <rect class="pupil" x="46" y="36" width="6" height="8" rx="2" fill="#3a2a58"/>
    <path d="M30 60 Q40 54 50 60" fill="none" stroke="#3a2a58" stroke-width="2.5" stroke-linecap="round"/>`;case"wink":return`<path d="M28 40 Q34 38 40 40" fill="none" stroke="#3a2a58" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="42" y="32" width="12" height="14" rx="4" fill="#fff"/>
    <rect class="pupil" x="46" y="36" width="6" height="8" rx="2" fill="#3a2a58"/>
    <path d="M32 56 Q40 52 48 56" fill="none" stroke="#3a2a58" stroke-width="2.3" stroke-linecap="round"/>`;case"sleepy":return`<path d="M28 40 Q34 38 40 40" fill="none" stroke="#3a2a58" stroke-width="2" stroke-linecap="round"/>
    <path d="M40 40 Q46 38 52 40" fill="none" stroke="#3a2a58" stroke-width="2" stroke-linecap="round"/>
    <rect x="34" y="54" width="12" height="5" rx="2.5" fill="#3a2a58" opacity=".75"/>`;default:return`<rect x="26" y="32" width="12" height="14" rx="4" fill="#fff"/>
    <rect x="42" y="32" width="12" height="14" rx="4" fill="#fff"/>
    <rect class="pupil" x="30" y="36" width="6" height="8" rx="2" fill="#3a2a58"/>
    <rect class="pupil" x="46" y="36" width="6" height="8" rx="2" fill="#3a2a58"/>
    <path d="M32 56 Q40 52 48 56" fill="none" stroke="#3a2a58" stroke-width="2.3" stroke-linecap="round"/>`}}function za(i={}){const t=i.body??"#00b8ff",e=i.accent??"#ff4081",n=i.face??"classic",s=i.extraClass??"",r=n==="wink"?'<ellipse cx="56" cy="48" rx="5" ry="3" fill="#ff4081" opacity=".7"/>':`<ellipse cx="24" cy="48" rx="5" ry="3" fill="#ff4081" opacity=".7"/>
    <ellipse cx="56" cy="48" rx="5" ry="3" fill="#ff4081" opacity=".7"/>`;return`<svg class="buddy pip ${s}" viewBox="0 0 80 80" aria-hidden="true">
    <ellipse class="shadow" cx="40" cy="74" rx="18" ry="4"/>
    <circle cx="40" cy="42" r="28" fill="${t}"/>
    <circle cx="28" cy="30" r="8" fill="#ffe6f6" opacity=".85"/>
    ${yl(n)}
    ${r}
    <circle cx="40" cy="18" r="5.5" fill="${e}"/>
  </svg>`}function Ha(i={}){const t=i.body??"#ff9100",e=i.accent??"#7c3aed",n=i.face??"classic",s=i.extraClass??"",r=n==="wink"?'<rect x="50" y="50" width="10" height="6" rx="3" fill="#ff7a8a" opacity=".65"/>':`<rect x="20" y="50" width="10" height="6" rx="3" fill="#ff7a8a" opacity=".65"/>
    <rect x="50" y="50" width="10" height="6" rx="3" fill="#ff7a8a" opacity=".65"/>`;return`<svg class="buddy cubi ${s}" viewBox="0 0 80 80" aria-hidden="true">
    <ellipse class="shadow" cx="40" cy="74" rx="18" ry="4"/>
    <rect x="14" y="16" width="52" height="52" rx="14" fill="${t}"/>
    <rect x="18" y="20" width="16" height="12" rx="6" fill="#ffe6c2" opacity=".9"/>
    ${Sl(n)}
    ${r}
    <rect x="34" y="10" width="12" height="10" rx="3" fill="${e}"/>
  </svg>`}function Cc(i=""){return`<svg class="buddy tria ${i}" viewBox="0 0 80 80" aria-hidden="true">
    <ellipse class="shadow" cx="40" cy="74" rx="18" ry="4"/>
    <path d="M40 10 L70 66 H10 Z" fill="#00c853"/>
    <path d="M40 18 L52 42 H28 Z" fill="#b8f5c8" opacity=".7"/>
    <circle cx="32" cy="48" r="5.5" fill="#fff"/>
    <circle cx="48" cy="48" r="5.5" fill="#fff"/>
    <circle class="pupil" cx="33.3" cy="49.2" r="2.7" fill="#3a2a58"/>
    <circle class="pupil" cx="49.3" cy="49.2" r="2.7" fill="#3a2a58"/>
    <circle cx="34.3" cy="48" r="1" fill="#fff"/>
    <circle cx="50.3" cy="48" r="1" fill="#fff"/>
    <path d="M28 42 L33 45" stroke="#3a2a58" stroke-width="2" stroke-linecap="round"/>
    <path d="M52 42 L47 45" stroke="#3a2a58" stroke-width="2" stroke-linecap="round"/>
    <path d="M36 58 Q40 61 44 58" fill="none" stroke="#3a2a58" stroke-width="2.1" stroke-linecap="round"/>
  </svg>`}function El(i){const t="#3a2a58";switch(i){case"frown":return`<circle cx="14" cy="18" r="3.4" fill="#fff"/>
    <circle cx="26" cy="18" r="3.4" fill="#fff"/>
    <circle cx="14.8" cy="18.8" r="1.7" fill="${t}"/>
    <circle cx="26.8" cy="18.8" r="1.7" fill="${t}"/>
    <circle cx="15.2" cy="18.2" r="0.55" fill="#fff"/>
    <circle cx="27.2" cy="18.2" r="0.55" fill="#fff"/>
    <path d="M13 30 Q20 24 27 30" fill="none" stroke="${t}" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M14 27 Q20 31 26 27" fill="#ff4081" opacity=".35"/>`;case"wink":return`<path d="M10 18 Q14 16 18 18" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="26" cy="18" r="3.4" fill="#fff"/>
    <circle cx="26.8" cy="18.8" r="1.7" fill="${t}"/>
    <circle cx="27.2" cy="18.2" r="0.55" fill="#fff"/>
    <path d="M13 27 Q20 31 27 27" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round"/>`;case"sleepy":return`<path d="M10 18.5 Q14 16.5 18 18.5" fill="none" stroke="${t}" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M22 18.5 Q26 16.5 30 18.5" fill="none" stroke="${t}" stroke-width="1.8" stroke-linecap="round"/>
    <ellipse cx="20" cy="28" rx="3.2" ry="2" fill="${t}" opacity=".75"/>`;default:return`<circle cx="14" cy="18" r="3.4" fill="#fff"/>
    <circle cx="26" cy="18" r="3.4" fill="#fff"/>
    <circle cx="14.8" cy="18.8" r="1.7" fill="${t}"/>
    <circle cx="26.8" cy="18.8" r="1.7" fill="${t}"/>
    <circle cx="15.2" cy="18.2" r="0.55" fill="#fff"/>
    <circle cx="27.2" cy="18.2" r="0.55" fill="#fff"/>
    <path d="M13 27 Q20 32 27 27" fill="none" stroke="${t}" stroke-width="2" stroke-linecap="round"/>`}}function Tl(i,t,e){return`<svg class="face-chip${e?" selected":""}" viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="22" r="16" fill="${t}"/>
    ${El(i)}
  </svg>`}function zi(i,t){const e={body:t.bodyHex,accent:t.accentHex,face:t.face,extraClass:t.extraClass};return i===0?za(e):Ha(e)}const Xs=300,Qs=100,qr=30,qs=3,fs=640,fo=Qs*2,wl=900,Yr=12,Al=24,bl=2.4,$r=.32,Pc=.22,Zn=1.25,ye=56,an=56,Zr=-35,Kr=-35,de=33,_e={sw:{x:-24.5,z:-24.5},ne:{x:24.5,z:24.5},nw:{x:-24.5,z:24.5},se:{x:24.5,z:-24.5}},Rl={0:_e.sw,1:_e.ne};function di(i,t,e){const n=Math.hypot(i,t)||1;return[i-i/n*e,t-t/n*e]}const Ce=2,ae=0,ri=1,fr=2,po=3,$t=0,Se=1,Ln=2,Ht=3,je=4,In=5,on=6,Ke=0,pn=1,is=2,Dn=3,Kn=4,Ue=[{name:"Worker",hp:28,dmg:3,range:1.15,speed:3.35,radius:.32,cost:40,time:3,capture:.55},{name:"Spark",hp:36,dmg:7,range:1.2,speed:4.35,radius:.38,cost:22,time:1.8,capture:1},{name:"Buddy",hp:74,dmg:13,range:1.45,speed:3.05,radius:.52,cost:48,time:3.2,capture:1.6},{name:"Chunk",hp:150,dmg:24,range:1.75,speed:2.15,radius:.72,cost:88,time:5.2,capture:2.4}],Gn={barracks:110,tower:75,wall:8},Cl=3.2,Pl=5.4,Ll=1.85,Dl=7,Ul=1.15,jr=20,Il=16,pr=6,mo=20,Je={bg:1446442,pip:47359,pipAccent:16728193,tet:16748800,tetAccent:8141549,neutral:13227246,crystal:10154239,rock:7041940},go=["#00b8ff","#ff9100"],Lc=["Spheerz","Coobz"],Fn=[{main:Je.pip,accent:Je.pipAccent,mainHex:go[0]},{main:Je.tet,accent:Je.tetAccent,mainHex:go[1]}],Dc=[{main:47359,accent:16728193,mainHex:"#00b8ff"},{main:16726832,accent:16766464,mainHex:"#ff3b30"},{main:51283,accent:47359,mainHex:"#00c853"},{main:8141549,accent:16748800,mainHex:"#7c3aed"},{main:16748800,accent:8141549,mainHex:"#ff9100"},{main:16766464,accent:16726832,mainHex:"#ffd600"}],Nl=["classic","frown","wink","sleepy"];function tr(i=0){return{faction:i,colorIndex:i===0?0:4,face:i===1?"frown":"classic"}}function Uc(i){const t=Dc[i.colorIndex]??Fn[i.faction],e=Fn[i.faction===0?1:0];return i.faction===0?[t,e]:[e,t]}function or(i){return Uc(i)[i.faction]}function wn(i,t){const e=Math.max(0,Math.min(ye-1,Math.floor((i-Zr)/Zn))),n=Math.max(0,Math.min(an-1,Math.floor((t-Kr)/Zn)));return[e,n]}function dn(i,t){return t*ye+i}function _n(i){return`#${i.toString(16).padStart(6,"0")}`}function Fl(){const i=tr(0);Ic(i)}function Ic(i){const t=or(i),e=_n(t.main),n=_n(t.accent),s=zi(i.faction,{bodyHex:e,accentHex:n,face:i.face}),r=(o,c)=>{const h=document.getElementById(o);h&&(h.innerHTML=c)};r("title-pip",i.faction===0?s:za()),r("title-tria",Cc()),r("title-cubi",i.faction===1?s:Ha()),r("pick-pip-ico",zi(0,{bodyHex:i.faction===0?e:Fn[0].mainHex,accentHex:i.faction===0?n:_n(Fn[0].accent),face:i.faction===0?i.face:"classic"})),r("pick-tet-ico",zi(1,{bodyHex:i.faction===1?e:Fn[1].mainHex,accentHex:i.faction===1?n:_n(Fn[1].accent),face:i.faction===1?i.face:"classic"}));const a=document.getElementById("face-preview");a&&(a.innerHTML=s)}function Ol(i){const t=or(i),e=_n(t.main),n=_n(t.accent),s=zi(i.faction,{bodyHex:e,accentHex:n,face:i.face}),r=(a,o)=>{const c=document.getElementById(a);c&&(c.innerHTML=o)};r("hud-star-buddy",s),r("hud-army-buddy",s),r("pause-pip",i.faction===0?s:za()),r("pause-cubi",i.faction===1?s:Ha())}function Bl(i,t){const e=or(t),n=_n(e.main),s=_n(e.accent),r=zi(t.faction,{bodyHex:n,accentHex:s,face:t.face}),a=Fn[t.faction===0?1:0],o=zi(t.faction===0?1:0,{bodyHex:a.mainHex,accentHex:_n(a.accent),face:"classic"}),c=document.getElementById("end-left"),h=document.getElementById("end-right");i?(c&&(c.innerHTML=r),h&&(h.innerHTML=Cc())):(c&&(c.innerHTML=r),h&&(h.innerHTML=o))}class kl{constructor(){V(this,"toastEl",document.getElementById("toast"));V(this,"hintEl",document.getElementById("hint"));V(this,"selEl",document.getElementById("selection-label"));V(this,"stars",document.getElementById("star-count"));V(this,"rate",document.getElementById("star-rate"));V(this,"army",document.getElementById("army-count"));V(this,"armyCap",document.getElementById("army-cap"));V(this,"buildCap",document.getElementById("build-cap"));V(this,"demolishBtn",document.getElementById("cmd-demolish"));V(this,"panelEl",document.getElementById("mgmt-panel"));V(this,"sheetEl",document.getElementById("mgmt-sheet"));V(this,"buildSheetEl",document.getElementById("build-sheet"));V(this,"trainRow",document.getElementById("train-row"));V(this,"resourceBtn",document.getElementById("cmd-resource"));V(this,"recruitBtn",document.getElementById("cmd-recruit"));V(this,"buildBtn",document.getElementById("cmd-build"));V(this,"toastT",0);V(this,"sheet","none");V(this,"lastSig","");V(this,"onHireWorker",null);V(this,"onPickWar",null);V(this,"onDemolish",null);V(this,"setup",tr(0))}bind(t){this.onHireWorker=t.onHireWorker,this.onPickWar=t.onPickWar,this.onDemolish=t.onDemolish,this.setup=tr(0),this.buildColorPick(),this.buildFacePick(),this.refreshPreBattle(),document.getElementById("pick-pip").onclick=()=>{this.setup.faction=0,this.setup.colorIndex===4&&(this.setup.colorIndex=0),this.setup.face="classic",document.getElementById("pick-pip").classList.add("selected"),document.getElementById("pick-tet").classList.remove("selected"),this.refreshPreBattle()},document.getElementById("pick-tet").onclick=()=>{this.setup.faction=1,this.setup.colorIndex===0&&(this.setup.colorIndex=4),this.setup.face="frown",document.getElementById("pick-tet").classList.add("selected"),document.getElementById("pick-pip").classList.remove("selected"),this.refreshPreBattle()},document.getElementById("btn-play").onclick=()=>t.onPlay({...this.setup}),document.getElementById("btn-pause").onclick=()=>t.onPause(),document.getElementById("btn-resume").onclick=()=>t.onResume(),document.getElementById("btn-quit").onclick=()=>t.onQuit(),document.getElementById("btn-end-menu").onclick=()=>t.onQuit(),document.getElementById("btn-again").onclick=()=>t.onAgain(),document.getElementById("cmd-select-all").onclick=()=>t.onSelectAll(),this.resourceBtn.onclick=()=>this.toggleSheet("resource"),this.recruitBtn.onclick=()=>this.toggleSheet("recruit"),this.buildBtn.onclick=()=>this.toggleSheet("build");for(const e of document.querySelectorAll(".produce"))e.onclick=()=>t.onProduce(Number(e.dataset.kind));for(const e of document.querySelectorAll(".mode"))e.onclick=()=>t.onMode(e.dataset.mode);this.demolishBtn.onclick=()=>{var e;return(e=this.onDemolish)==null?void 0:e.call(this)}}getSetup(){return{...this.setup}}buildColorPick(){const t=document.getElementById("color-pick");t.replaceChildren(),Dc.forEach((e,n)=>{const s=document.createElement("button");s.type="button",s.className="color-swatch",s.style.background=e.mainHex,s.dataset.index=String(n),s.setAttribute("aria-label",`Color ${n+1}`),s.onclick=()=>{this.setup.colorIndex=n,this.refreshPreBattle()},t.append(s)})}buildFacePick(){const t=document.getElementById("face-pick");t.replaceChildren();for(const e of Nl){const n=document.createElement("button");n.type="button",n.className="face-btn",n.dataset.face=e,n.setAttribute("aria-label",`${e} face`),n.onclick=()=>{this.setup.face=e,this.refreshPreBattle()},t.append(n)}}refreshPreBattle(){const t=or(this.setup),e=_n(t.main);for(const n of document.querySelectorAll(".color-swatch"))n.classList.toggle("selected",Number(n.dataset.index)===this.setup.colorIndex);for(const n of document.querySelectorAll(".face-btn")){const s=n.dataset.face,r=s===this.setup.face;n.classList.toggle("selected",r),n.innerHTML=Tl(s,e,r)}Ic(this.setup)}toggleSheet(t){this.sheet=this.sheet===t?"none":t,this.lastSig=""}closeSheet(){this.sheet="none",this.lastSig=""}setScreen(t){for(const e of["title","hud","pause","end"])document.getElementById(e).classList.toggle("hidden",e!==t&&!(t==="hud"&&e==="hud"));document.getElementById("title").classList.toggle("hidden",t!=="title"),document.getElementById("hud").classList.toggle("hidden",t!=="hud"&&t!=="pause"),document.getElementById("pause").classList.toggle("hidden",t!=="pause"),document.getElementById("end").classList.toggle("hidden",t!=="end"),t!=="hud"&&this.closeSheet()}setMode(t){for(const e of document.querySelectorAll(".mode"))e.classList.toggle("active",e.dataset.mode===t&&t!=="command")}flash(t){this.toastEl.textContent=t,this.toastEl.classList.remove("hidden"),this.toastT=1.6}showEnd(t,e,n,s){const r=document.getElementById("end-title"),a=document.getElementById("end-flavor");r.textContent=t?"Victory!":"Oh nooo",a.textContent=t?`${Lc[e]} sparkle all over the map!`:"The other shapes captured the day.";const o=Math.floor(s.duration/60),c=Math.floor(s.duration%60),h=o>0?`${o}m ${c}s`:`${c}s`,l=document.getElementById("end-kills"),u=document.getElementById("end-pocs"),d=document.getElementById("end-time");l.textContent=String(s.kills),u.textContent=String(s.pocCaptures),d.textContent=h,Bl(t,n),this.setScreen("end")}update(t,e){const n=t.player;this.stars.textContent=String(Math.floor(t.gold[n])),this.rate.textContent=`+${t.income[n].toFixed(0)}/s`,this.army.textContent=String(t.units[n]),this.armyCap.textContent=`/${Xs}`,this.buildCap.textContent=`W ${t.walls[n]}/${Qs} · T ${t.towers[n]}/${qr} · R ${t.barracksFor(n)}/${qs}`;const s=t.hintT>0?t.hint:"";this.hintEl.textContent=s;const r=t.selectionSummary();for(this.selEl.textContent=r,this.selEl.classList.toggle("hidden",!r);t.toasts.length;)this.flash(t.toasts.shift());this.toastT>0&&(this.toastT-=e,this.toastT<=0&&this.toastEl.classList.add("hidden")),this.resourceBtn.classList.toggle("active",this.sheet==="resource"),this.recruitBtn.classList.toggle("active",this.sheet==="recruit"),this.buildBtn.classList.toggle("active",this.sheet==="build"),document.getElementById("hud").classList.toggle("sheet-open",this.sheet!=="none"),this.panelEl.classList.toggle("hidden",this.sheet==="none"),this.buildSheetEl.classList.toggle("hidden",this.sheet!=="build"),this.syncSheet(t),this.syncTrain(t),this.syncDemolish(t)}syncDemolish(t){const e=t.selectedBuildingRecord(),n=!!e&&t.canDemolish(e);this.demolishBtn.classList.toggle("hidden",!n)}syncSheet(t){const e=this.sheet==="resource"||this.sheet==="recruit",n=this.sheet==="resource"?t.ownedEcoSites():this.sheet==="recruit"?t.ownedWarSites():[],s=`${this.sheet}:${n.map(a=>`${a.id}:${a.queue.length}`).join(",")}:${t.selectedBuilding}`;if(s===this.lastSig)return;if(this.lastSig=s,this.sheetEl.classList.toggle("hidden",!e),!e){this.sheetEl.replaceChildren();return}if(!n.length){const a=document.createElement("button");a.type="button",a.className="cmd site-btn",a.disabled=!0,a.textContent=this.sheet==="resource"?"No star sites":"Need a barracks",this.sheetEl.replaceChildren(a);return}const r=document.createDocumentFragment();for(const a of n)r.append(this.siteButton(t,a));this.sheetEl.replaceChildren(r)}siteButton(t,e){var a;const n=document.createElement("button");n.type="button",n.className="cmd site-btn",t.selectedBuilding===e.id&&n.classList.add("active");const s=document.createElement("span");s.textContent=t.siteLabel(e);const r=document.createElement("small");if(this.sheet==="resource"){const o=e.kind===$t?(a=t.homeEcoPocFor(e.owner))==null?void 0:a.id:e.id,c=o?t.workersAtEcoSite(o):0,h=o&&t.buildings.find(l=>l.id===o&&t.isEcoPoc(l));r.textContent=h?`Worker ${Ue[ae].cost} · ${c}/${jr}`:`Worker ${Ue[ae].cost}`}else r.textContent=`q ${e.queue.length}`;if(n.append(s,r),e.queue.length){const o=document.createElement("span");o.className="q-badge",o.textContent=String(e.queue.length),n.append(o)}return n.onclick=()=>{var o,c;this.sheet==="resource"?(o=this.onHireWorker)==null||o.call(this,e.id):(c=this.onPickWar)==null||c.call(this,e.id),this.lastSig=""},n}syncTrain(t){const e=t.canTrainWorkers(),n=t.canTrainTroops(),s=this.sheet==="resource"&&e,r=this.sheet==="recruit"&&n,a=s||r;this.trainRow.classList.toggle("hidden",!a),this.trainRow.classList.toggle("worker-only",s&&!r);const o=t.selectedBuildingRecord();for(const c of this.trainRow.querySelectorAll(".produce")){const h=Number(c.dataset.kind),l=h===ae;c.classList.toggle("hidden",l?!s:!r),c.classList.toggle("active",a&&t.gold[t.player]>=Ue[h].cost);const u=c.querySelector(".q-badge");if(!u)continue;const d=o?t.queueCount(o,h):0;u.textContent=String(d),u.classList.toggle("hidden",d<=0)}}}const _o="balanced";function zl(i,t,e){return t<1||i<32&&e<8?"secure":t<3||e<10?"expand":e<15||i<80?"mass":"assault"}function Nc(i,t,e){return i.kind!==Ht&&i.kind!==$t?"far":i.kind===Ht&&Math.hypot(i.x,i.z)<2.8?"center":t&&Math.hypot(i.x-t.x,i.z-t.z)<14?"home":e&&Math.hypot(i.x-e.x,i.z-e.z)<14?"enemyHome":Math.hypot(i.x,i.z)<17?"mid":"far"}function Hl(i,t,e,n,s){const r=i==="secure"?["home"]:i==="expand"?["home","mid"]:i==="mass"?["home","mid","center"]:["home","mid","center","enemyHome","far"];let a=null,o=1e9;const c=(n==null?void 0:n.x)??24,h=(n==null?void 0:n.z)??24;for(const l of t){if(l.owner===e||l.kind!==Ht&&!(i==="assault"&&(l.kind===$t||l.kind===Ht))||l.kind===$t&&l.home!==1-e)continue;const u=Nc(l,n,s);if(!r.includes(u))continue;const d=r.indexOf(u),f=Math.hypot(l.x-c,l.z-h),g=d*40+f;g<o&&(o=g,a=l)}return a}function Gl(i,t,e,n){const s=i.filter(r=>{if(r.owner===t||r.kind!==Ht)return!1;const a=Nc(r,e,n);return a==="mid"||a==="center"});return s.length?s[Math.random()*s.length|0]??null:null}function Vl(i,t){return i==="secure"?Math.min(5,Math.max(3,t-1)):i==="expand"?Math.min(7,Math.max(4,t-2)):i==="mass"?Math.min(8,Math.max(4,t-3)):Math.max(8,t-2)}function Wl(i){return i==="secure"?0:i==="assault"?2:i==="mass"?3:2}const Pt=fs;class Fc{constructor(t=0){V(this,"player",0);V(this,"gold",[90,90]);V(this,"income",[0,0]);V(this,"winner",null);V(this,"mode","command");V(this,"selected",new Uint8Array(Pt));V(this,"selectedBuilding",-1);V(this,"selectCount",0);V(this,"alive",new Uint8Array(Pt));V(this,"faction",new Uint8Array(Pt));V(this,"kind",new Uint8Array(Pt));V(this,"x",new Float32Array(Pt));V(this,"z",new Float32Array(Pt));V(this,"vx",new Float32Array(Pt));V(this,"vz",new Float32Array(Pt));V(this,"hp",new Float32Array(Pt));V(this,"maxHp",new Float32Array(Pt));V(this,"task",new Uint8Array(Pt));V(this,"tx",new Float32Array(Pt));V(this,"tz",new Float32Array(Pt));V(this,"target",new Int16Array(Pt));V(this,"cd",new Float32Array(Pt));V(this,"gatherT",new Float32Array(Pt));V(this,"stuck",new Float32Array(Pt));V(this,"yaw",new Float32Array(Pt));V(this,"atkAnim",new Float32Array(Pt));V(this,"workerSite",new Int16Array(Pt));V(this,"guardian",new Uint8Array(Pt));V(this,"guardPost",new Int16Array(Pt));V(this,"unitCount",0);V(this,"buildings",[]);V(this,"nextId",1);V(this,"occ",new Uint8Array(ye*an));V(this,"flowX",[new Float32Array(ye*an),new Float32Array(ye*an)]);V(this,"flowZ",[new Float32Array(ye*an),new Float32Array(ye*an)]);V(this,"flowGoalX",[0,0]);V(this,"flowGoalZ",[0,0]);V(this,"hits",[]);V(this,"beams",[]);V(this,"corpses",[]);V(this,"toasts",[]);V(this,"hint","");V(this,"hintT",0);V(this,"time",0);V(this,"aiProfile",_o);V(this,"aiT",0);V(this,"aiProbeT",20);V(this,"aiWalls",0);V(this,"aiTowers",0);V(this,"units",[0,0]);V(this,"walls",[0,0]);V(this,"towers",[0,0]);V(this,"kills",[0,0]);V(this,"pocCaptures",[0,0]);V(this,"liveMeshes",0);V(this,"free",[]);V(this,"hash",new Map);V(this,"tmpNear",[]);this.reset(t)}reset(t=0){this.player=t,this.gold=[90,90],this.income=[0,0],this.winner=null,this.mode="command",this.selected.fill(0),this.selectedBuilding=-1,this.selectCount=0,this.alive.fill(0),this.unitCount=0,this.buildings=[],this.nextId=1,this.occ.fill(0),this.hits=[],this.beams=[],this.corpses=[],this.atkAnim.fill(0),this.workerSite.fill(-1),this.guardian.fill(0),this.guardPost.fill(-1),this.toasts=[],this.time=0,this.aiProfile=_o,this.aiT=0,this.aiProbeT=18+Math.random()*6,this.aiWalls=0,this.aiTowers=0,this.units=[0,0],this.walls=[0,0],this.towers=[0,0],this.kills=[0,0],this.pocCaptures=[0,0],this.free=[];for(let e=Pt-1;e>=0;e--)this.free.push(e);this.buildMap(),this.setHint("Troops wait for your orders — tap ground to move, nodes to capture.")}setHint(t){this.hint=t,this.hintT=6}toast(t){this.toasts.push(t)}liveCount(){let t=this.unitCount;for(const e of this.buildings)e.kind!==on&&(t+=1);return t+=this.buildings.filter(e=>e.kind===on).length,this.liveMeshes=t,t}occAt(t,e){const[n,s]=wn(t,e);return this.occ[dn(n,s)]!==0}stamp(t,e,n,s){const[r,a]=wn(t,e);for(let o=-n;o<=n;o++)for(let c=-n;c<=n;c++){const h=r+o,l=a+c;h<0||l<0||h>=ye||l>=an||(this.occ[dn(h,l)]=s?1:0)}}stampFoot(t,e,n,s,r){const[a,o]=wn(t,e),c=Math.floor((n-1)/2),h=Math.floor((s-1)/2);for(let l=-c;l<=c+(n%2===0?1:0);l++)for(let u=-h;u<=h+(s%2===0?1:0);u++){const d=a+l,f=o+u;d<0||f<0||d>=ye||f>=an||(this.occ[dn(d,f)]=r?1:0)}}addBuilding(t,e,n,s,r){const o={[$t]:{hp:640,radius:2.2},[Se]:{hp:280,radius:1.45},[Ln]:{hp:190,radius:.95},[Ht]:{hp:220,radius:1.2},[je]:{hp:95,radius:.55},[In]:{hp:9999,radius:.9},[on]:{hp:9999,radius:1.1}}[t],[c,h]=di(n,s,4.2),l={id:this.nextId++,kind:t,owner:e,x:n,z:s,hp:(r==null?void 0:r.hp)??o.hp,maxHp:(r==null?void 0:r.hp)??o.hp,radius:(r==null?void 0:r.radius)??o.radius,progress:e===Ce?0:100,queue:[],rallyX:c,rallyZ:h,atkCd:0,yaw:0,home:(r==null?void 0:r.home)??null,pocUpgrade:"none",defenderRespawnT:0,pocRole:(r==null?void 0:r.pocRole)??(t===Ht?"battle":"none")};return this.buildings.push(l),t===je?(this.stamp(n,s,0,!0),(e===0||e===1)&&(this.walls[e]+=1)):t===$t?this.stampFoot(n,s,3,3,!0):t===Se?this.stampFoot(n,s,2,2,!0):t===Ln?(this.stamp(n,s,0,!0),(e===0||e===1)&&(this.towers[e]+=1)):t===on&&this.stamp(n,s,0,!0),l}spawn(t,e,n,s,r){if(this.free.length===0||this.unitCount>=fs||!(r!=null&&r.guardian)&&this.units[t]>=Xs||this.liveCount()>=wl)return-1;const a=this.free.pop(),o=Ue[e];return this.alive[a]=1,this.faction[a]=t,this.kind[a]=e,this.x[a]=n,this.z[a]=s,this.tx[a]=n,this.tz[a]=s,this.vx[a]=0,this.vz[a]=0,this.hp[a]=o.hp,this.maxHp[a]=o.hp,this.task[a]=Ke,this.target[a]=-1,this.cd[a]=0,this.gatherT[a]=0,this.stuck[a]=0,this.yaw[a]=t===1?Math.PI:0,this.workerSite[a]=-1,this.guardian[a]=r!=null&&r.guardian?1:0,this.guardPost[a]=(r==null?void 0:r.guardPost)??-1,this.unitCount+=1,r!=null&&r.guardian||(this.units[t]+=1),a}spawnCorpse(t,e,n,s,r){this.corpses.length>=Al&&this.corpses.shift(),this.corpses.push({x:t,z:e,faction:n,kind:s,yaw:r,t:bl})}normalizeYaw(t){let e=t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}setYaw(t,e,n=.12){const s=this.normalizeYaw(this.yaw[t]);let a=this.normalizeYaw(e)-s;a>Math.PI&&(a-=Math.PI*2),a<-Math.PI&&(a+=Math.PI*2),!(Math.abs(a)<n)&&(this.yaw[t]=s+a)}faceToward(t,e,n,s=.2){const r=e-this.x[t],a=n-this.z[t];r*r+a*a<s*s||this.setYaw(t,Math.atan2(r,a))}holdPosition(t){this.tx[t]=this.x[t],this.tz[t]=this.z[t]}updateFacing(t,e,n,s,r,a){if(this.atkAnim[t]>0)return;const o=this.task[t];if(o===Ke)return;const c=e*e+n*n;if(s>.35&&c>.12){this.setYaw(t,Math.atan2(e,n));return}r*r+a*a>.8&&(o===pn||o===is)&&this.setYaw(t,Math.atan2(r,a))}killUnit(t){if(!this.alive[t])return;const e=this.faction[t],n=this.guardian[t];this.spawnCorpse(this.x[t],this.z[t],e,this.kind[t],this.yaw[t]),this.kills[1-e]+=1,this.alive[t]=0,this.selected[t]=0,this.atkAnim[t]=0,this.workerSite[t]=-1,this.guardian[t]=0,this.guardPost[t]=-1,this.unitCount-=1,n||(this.units[e]-=1),this.free.push(t),this.recomputeSelectCount()}recomputeSelectCount(){let t=0;for(let e=0;e<Pt;e++)this.selected[e]&&this.isPlayerMilitary(e)?t++:this.selected[e]&&(this.selected[e]=0);this.selectCount=t}buildMap(){const t=(l,u)=>{this.addBuilding(on,Ce,l,u)},e=(l,u,d)=>this.addBuilding($t,u,l.x,l.z,{home:d}),n=e(_e.sw,0,0),s=e(_e.ne,1,1);e(_e.nw,Ce,null),e(_e.se,Ce,null);const r=(l,u)=>{const d=Math.sign(-l.x)||1,f=Math.sign(-l.z)||1;this.addBuilding(Se,u,l.x+d*4.2+f*1.6,l.z+f*1.2-d*3.4)};r(_e.sw,0),r(_e.ne,1);const a=l=>{const[u,d]=di(l.x,l.z,9.2);this.addBuilding(Ht,Ce,u,d,{pocRole:"battle"})};a(_e.sw),a(_e.ne),a(_e.nw),a(_e.se);const o=l=>{const[u,d]=di(l.x,l.z,-5.2);this.addBuilding(Ht,Ce,u,d,{pocRole:"eco",radius:1.05,hp:180})};o(_e.sw),o(_e.ne),o(_e.nw),o(_e.se),this.addBuilding(Ht,Ce,0,12.5,{pocRole:"battle"}),this.addBuilding(Ht,Ce,0,-12.5,{pocRole:"battle"}),this.addBuilding(Ht,Ce,-12.5,0,{pocRole:"battle"}),this.addBuilding(Ht,Ce,12.5,0,{pocRole:"battle"}),this.addBuilding(Ht,Ce,0,0,{radius:1.45,hp:260,pocRole:"battle"});const c=l=>{const[u,d]=di(l.x,l.z,-4.6);this.addBuilding(In,Ce,u,d)};c(_e.sw),c(_e.ne),c(_e.nw),c(_e.se),t(-6.6,-6.6),t(6.6,-6.6),t(-6.6,6.6),t(6.6,6.6),t(-29,0),t(29,0),t(0,-29),t(0,29),t(-16,.8),t(16,-.8),t(.8,16),t(-.8,-16);const h=(l,u,d)=>{var b;const f=((b=this.homeEcoPocFor(l))==null?void 0:b.id)??-1,[g,x]=di(u,d,5.2),m=-(x-d),p=g-u,T=Math.hypot(m,p)||1,E=m/T,v=p/T,U=A=>{A>=0&&f>=0&&(this.workerSite[A]=f)};U(this.spawn(l,ae,g+E*1.4,x+v*1.4)),U(this.spawn(l,ae,g-E*1.4,x-v*1.4)),U(this.spawn(l,ae,g+E*.2,x+v*.2)),this.spawn(l,ri,g+E*2.6+(g-u)*.15,x+v*2.6),this.spawn(l,ri,g-E*2.6+(g-u)*.15,x-v*2.6)};h(0,n.x,n.z),h(1,s.x,s.z),this.assignWorkersToCrystals(0),this.assignWorkersToCrystals(1)}assignWorkersToCrystals(t){for(let e=0;e<Pt;e++){if(!this.alive[e]||this.faction[e]!==t||this.kind[e]!==ae||this.task[e]!==Ke&&this.task[e]!==pn&&this.task[e]!==Kn)continue;const n=this.buildings.find(r=>r.id===this.workerSite[e]),s=n?this.crystalForEcoPoc(n):null;s&&(this.task[e]===Kn&&this.target[e]===s.id||(this.task[e]=Kn,this.target[e]=s.id,this.tx[e]=s.x,this.tz[e]=s.z))}}isPlayerMilitary(t){return!!(this.alive[t]&&this.faction[t]===this.player&&this.kind[t]!==ae&&!this.guardian[t])}isEcoPoc(t){return t.kind===$t?!0:t.kind===Ht&&t.pocRole==="eco"}isBattlePoc(t){return t.kind===Ht&&t.pocRole==="battle"}crystalForEcoPoc(t){let e=null,n=Il;for(const s of this.buildings){if(s.kind!==In)continue;const r=Math.hypot(s.x-t.x,s.z-t.z);r<n&&(n=r,e=s)}return e}homeEcoPocFor(t){const e=this.buildings.find(r=>r.kind===$t&&r.home===t);if(!e)return null;let n=null,s=99;for(const r of this.buildings){if(!this.isEcoPoc(r))continue;const a=Math.hypot(r.x-e.x,r.z-e.z);a<s&&(s=a,n=r)}return n}workersAtEcoSite(t){let e=0;for(let n=0;n<Pt;n++)!this.alive[n]||this.kind[n]!==ae||this.workerSite[n]===t&&(e+=1);return e}canHireWorkerAt(t){var r;const e=this.buildings.find(a=>a.id===t);if(!e)return!1;const n=e.kind===$t?(r=this.homeEcoPocFor(e.owner))==null?void 0:r.id:e.id;if(!n)return!0;const s=this.buildings.find(a=>a.id===n);return!s||!this.isEcoPoc(s)?!0:this.workersAtEcoSite(n)<jr}canPickPocUpgrade(t){return!!t&&t.owner===this.player&&this.isBattlePoc(t)&&t.pocUpgrade==="none"}pickPocUpgrade(t){const e=this.selectedBuildingRecord();return this.canPickPocUpgrade(e)?(e.pocUpgrade=t,t==="defenders"&&(e.defenderRespawnT=0,this.spawnDefenderSquad(e)),this.toast(t==="star"?"Money star spinning up!":"Defender squad on duty!"),!0):(this.toast("Pick an owned mid-map POC first"),!1)}ecoSiteForWorkerHire(t){var e;return t.kind===Ht&&this.isEcoPoc(t)?t.id:((e=this.homeEcoPocFor(t.owner))==null?void 0:e.id)??t.id}canTrainWorkers(){return this.acceptsWorkers(this.selectedBuildingRecord())}canTrainTroops(){return this.acceptsTroops(this.selectedBuildingRecord())}selectedBuildingRecord(){return this.selectedBuilding<0?null:this.buildings.find(t=>t.id===this.selectedBuilding)??null}acceptsWorkers(t){return!!t&&t.owner===this.player&&(t.kind===$t||t.kind===Ht&&this.isEcoPoc(t))}acceptsTroops(t){return!!t&&t.owner===this.player&&t.kind===Se}ownedEcoSites(){const t=this.buildings.find(r=>r.kind===$t&&r.home===this.player),e=this.buildings.filter(r=>r.owner===this.player&&(r.kind===$t||r.kind===Ht&&this.isEcoPoc(r))),n=(t==null?void 0:t.x)??0,s=(t==null?void 0:t.z)??0;return e.sort((r,a)=>{const o=h=>h.kind===$t&&h.home===this.player?0:h.kind===$t?1:2,c=o(r)-o(a);return c||Math.hypot(r.x-n,r.z-s)-Math.hypot(a.x-n,a.z-s)})}ownedWarSites(){return this.buildings.filter(t=>this.acceptsTroops(t))}buildZoneSites(t=this.player){return this.buildings.filter(e=>e.owner===t&&(e.kind===$t||e.kind===Ht))}inBuildZone(t,e,n=this.player){const s=Yr;return this.buildZoneSites(n).some(r=>Math.hypot(r.x-t,r.z-e)<=s)}canDemolish(t){return!t||t.owner!==this.player?!1:t.kind===je||t.kind===Ln||t.kind===Se}demolishBuilding(t){const e=this.buildings.find(n=>n.id===t);return!e||!this.canDemolish(e)?!1:(this.removeBuilding(e),this.selectedBuilding===t&&(this.selectedBuilding=-1),this.toast("Demolished"),!0)}canPreviewPlace(t,e,n,s=this.player){if(t==="command"||!this.inBuildZone(e,n,s))return!1;if(t==="wall"){if(this.walls[s]>=Qs)return!1;const[r,a]=wn(e,n);if(this.occ[dn(r,a)])return!1;const o=Zr+(r+.5)*Zn,c=Kr+(a+.5)*Zn;return!(Math.abs(o)>de||Math.abs(c)>de)}if(t==="tower")return this.towers[s]>=qr?!1:!this.occAt(e,n);if(t==="barracks"){if(this.buildings.filter(o=>o.owner===s&&o.kind===Se).length>=qs)return!1;const[r,a]=wn(e,n);for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const h=r+o,l=a+c;if(h<0||l<0||h>=ye||l>=an||this.occ[dn(h,l)])return!1}return!0}return!1}removeBuilding(t){t.kind===je?(this.stamp(t.x,t.z,0,!1),(t.owner===0||t.owner===1)&&(this.walls[t.owner]=Math.max(0,this.walls[t.owner]-1))):t.kind===Se?this.stampFoot(t.x,t.z,2,2,!1):t.kind===Ln&&(this.stamp(t.x,t.z,0,!1),(t.owner===0||t.owner===1)&&(this.towers[t.owner]=Math.max(0,this.towers[t.owner]-1))),this.buildings=this.buildings.filter(e=>e.id!==t.id)}barracksFor(t){return this.buildings.filter(e=>e.owner===t&&e.kind===Se).length}matchStats(t){return{kills:this.kills[t],pocCaptures:this.pocCaptures[t],duration:this.time}}siteLabel(t){if(t.kind===$t)return t.home===this.player?"HQ":"CC";if(t.kind===Ht){if(this.isEcoPoc(t)){const s=this.ownedEcoSites().filter(a=>a.kind===Ht);return s.length<=1?"Eco mine":`Eco mine ${s.findIndex(a=>a.id===t.id)+1}`}if(t.pocUpgrade==="star")return"Battle POC ★";if(t.pocUpgrade==="defenders")return"Battle POC 🛡";const e=this.buildings.filter(s=>s.owner===this.player&&this.isBattlePoc(s));return e.length<=1?"Battle POC":`Battle POC ${e.findIndex(s=>s.id===t.id)+1}`}if(t.kind===Se){const e=this.ownedWarSites();return e.length<=1?"Rax":`Rax ${e.findIndex(s=>s.id===t.id)+1}`}return"Yard"}queueCount(t,e){let n=0;for(const s of t.queue)s.kind===e&&(n+=1);return n}pickOwnEco(t,e){let n=null,s=2.8;for(const r of this.buildings){if(r.owner!==this.player||!this.isEcoPoc(r))continue;const a=Math.hypot(r.x-t,r.z-e);a<r.radius+.85&&a<s&&(n=r,s=a)}return n}pickOwnBattlePoc(t,e){let n=null,s=2.8;for(const r of this.buildings){if(r.owner!==this.player||!this.isBattlePoc(r))continue;const a=Math.hypot(r.x-t,r.z-e);a<r.radius+.85&&a<s&&(n=r,s=a)}return n}selectBuilding(t){this.clearSelection(),this.selectedBuilding=t.id}clearSelection(){this.selected.fill(0),this.selectCount=0,this.selectedBuilding=-1}selectAt(t,e,n){let s=-1,r=1.35;for(let c=0;c<Pt;c++){if(!this.isPlayerMilitary(c))continue;const h=Math.hypot(this.x[c]-t,this.z[c]-e),l=Ue[this.kind[c]].radius+.55;h<l&&h<r&&(s=c,r=h)}if(s>=0){n||this.clearSelection(),this.selected[s]=1,this.selectedBuilding=-1,this.recomputeSelectCount();return}let a=null,o=2.4;for(const c of this.buildings){if(c.kind===on||c.kind===In||c.kind===je&&c.owner!==this.player)continue;const h=Math.hypot(c.x-t,c.z-e),l=c.kind===je?.85:c.radius+.6;h<l&&h<o&&(a=c,o=h)}if(a&&a.owner===this.player){n||this.clearSelection(),this.selectedBuilding=a.id;return}n||this.clearSelection()}selectScreenBox(t,e,n,s,r){this.clearSelection();const a=Math.min(t,n),o=Math.max(t,n),c=Math.min(e,s),h=Math.max(e,s);for(let l=0;l<Pt;l++){if(!this.isPlayerMilitary(l))continue;const u=r(this.x[l],this.z[l]);u.hide||u.sx>=a&&u.sx<=o&&u.sy>=c&&u.sy<=h&&(this.selected[l]=1)}this.recomputeSelectCount()}selectAllArmy(){this.clearSelection();for(let t=0;t<Pt;t++)this.isPlayerMilitary(t)&&(this.selected[t]=1);this.recomputeSelectCount()}computeFlow(t,e,n){this.flowX[n].fill(0),this.flowZ[n].fill(0),this.flowGoalX[n]=t,this.flowGoalZ[n]=e;const[s,r]=wn(t,e),a=new Uint8Array(this.occ.length),o=new Int32Array(this.occ.length),c=new Int32Array(this.occ.length);c.fill(-1);let h=0,l=0;const u=dn(s,r);o[l++]=u,a[u]=1;const d=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(;h<l;){const f=o[h++],g=f%ye,x=f/ye|0;for(const[m,p]of d){const T=g+m,E=x+p;if(T<0||E<0||T>=ye||E>=an)continue;const v=dn(T,E);a[v]||this.occ[v]&&v!==u||(a[v]=1,c[v]=f,o[l++]=v)}}for(let f=0;f<this.occ.length;f++){if(!a[f]||f===u)continue;let g=c[f];if(g<0)continue;const x=f%ye,m=f/ye|0,p=g%ye,T=g/ye|0;this.flowX[n][f]=p-x,this.flowZ[n][f]=T-m}}pickOwnUnit(t,e){let n=-1,s=1.35;for(let r=0;r<Pt;r++){if(!this.isPlayerMilitary(r))continue;const a=Math.hypot(this.x[r]-t,this.z[r]-e),o=Ue[this.kind[r]].radius+.55;a<o&&a<s&&(n=r,s=a)}return n}commandAt(t,e){if(this.selectCount===0){this.selectAt(t,e,!1);return}let n=-1,s=1.4;for(let o=0;o<Pt;o++){if(!this.alive[o]||this.faction[o]===this.player)continue;const c=Math.hypot(this.x[o]-t,this.z[o]-e);c<s&&(s=c,n=o)}let r=null,a=2.2;for(const o of this.buildings){if(o.kind===on||o.kind===je)continue;const c=Math.hypot(o.x-t,o.z-e);c<o.radius+.7&&c<a&&(r=o,a=c)}this.computeFlow(t,e,this.player);for(let o=0;o<Pt;o++)!this.selected[o]||!this.isPlayerMilitary(o)||(n>=0?(this.task[o]=is,this.target[o]=n,this.tx[o]=this.x[n],this.tz[o]=this.z[n]):r&&(r.kind===Ht||r.kind===$t||r.kind===Se)&&r.owner!==this.player?(this.task[o]=Dn,this.target[o]=r.id,this.tx[o]=r.x,this.tz[o]=r.z):r&&r.owner===this.player&&(r.kind===$t||r.kind===Se)?(r.rallyX=t,r.rallyZ=e,this.task[o]=pn,this.tx[o]=t,this.tz[o]=e,this.target[o]=-1):(this.task[o]=pn,this.tx[o]=t,this.tz[o]=e,this.target[o]=-1))}spawnAround(t,e){const n=t.owner;for(let s=0;s<10;s++){const r=s/10*Math.PI*2+this.time,a=t.x+Math.cos(r)*(t.radius+1.1),o=t.z+Math.sin(r)*(t.radius+1.1);if(this.occAt(a,o))continue;const c=this.spawn(n,e,a,o);if(c>=0){e===ae?(this.workerSite[c]=this.ecoSiteForWorkerHire(t),this.assignWorkersToCrystals(n)):n===this.player?this.holdPosition(c):(this.task[c]=pn,this.tx[c]=t.rallyX,this.tz[c]=t.rallyZ,this.computeFlow(t.rallyX,t.rallyZ,n));return}}}spawnDefenderSquad(t){if(t.pocUpgrade!=="defenders"||t.owner>1)return;this.clearGuardiansAt(t.id);const e=t.owner;let n=0;for(let s=0;s<pr*3&&n<pr;s++){const r=s/pr*Math.PI*2+this.time,a=t.x+Math.cos(r)*(t.radius+1.6),o=t.z+Math.sin(r)*(t.radius+1.6);if(this.occAt(a,o))continue;const c=this.spawn(e,ri,a,o,{guardian:!0,guardPost:t.id});c>=0&&(this.task[c]=Ke,this.tx[c]=t.x,this.tz[c]=t.z,n+=1)}t.defenderRespawnT=mo}clearGuardiansAt(t){for(let e=0;e<Pt;e++)this.alive[e]&&this.guardian[e]&&this.guardPost[e]===t&&this.killUnit(e)}livingGuardiansAt(t){let e=0;for(let n=0;n<Pt;n++)this.alive[n]&&this.guardian[n]&&this.guardPost[n]===t&&(e+=1);return e}defendersBlockCapture(t){return t.pocUpgrade==="defenders"&&this.livingGuardiansAt(t.id)>0}clearPocUpgrade(t){t.pocUpgrade==="defenders"&&this.clearGuardiansAt(t.id),t.pocUpgrade="none",t.defenderRespawnT=0}tickDefenders(t){for(const e of this.buildings){if(e.kind!==Ht||e.owner>1||e.pocUpgrade!=="defenders")continue;if(this.livingGuardiansAt(e.id)>0){e.defenderRespawnT=mo;continue}e.defenderRespawnT-=t,e.defenderRespawnT<=0&&this.spawnDefenderSquad(e)}}produce(t){if(t===ae&&!this.canTrainWorkers())return this.toast("Select your HQ or a star node"),!1;const e=this.selectedBuildingRecord();if(t===ae&&this.acceptsWorkers(e))return this.produceAt(t,e.id);if(t!==ae&&this.acceptsTroops(e))return this.produceAt(t,e.id);const n=t===ae?this.ownedEcoSites().find(s=>s.queue.length<5&&this.canHireWorkerAt(s.id)):this.ownedWarSites().find(s=>s.queue.length<5);return n?this.produceAt(t,n.id):(this.toast(t===ae?"Need a HQ":"Need a barracks"),!1)}produceAt(t,e){const n=Ue[t],s=this.player,r=this.buildings.find(a=>a.id===e)??null;return t===ae&&!this.acceptsWorkers(r)?(this.toast("Select your HQ or a star node"),!1):t!==ae&&!this.acceptsTroops(r)?(this.toast("Need a barracks"),!1):t===ae&&!this.canHireWorkerAt(e)?(this.toast(`Eco site full (${jr} workers)`),!1):this.gold[s]<n.cost?(this.toast("Need more stars!"),!1):this.units[s]>=Xs?(this.toast("Army cap (300)"),!1):r.queue.length>=5?(this.toast("Queue is full"),!1):(this.gold[s]-=n.cost,r.queue.push({kind:t,t:n.time}),!0)}canAfford(t,e){return this.gold[t]>=e}tryPlaceWall(t,e,n=this.player){if(this.walls[n]>=Qs)return n===this.player&&this.toast("Wall cap (100)"),!1;if(!this.canAfford(n,Gn.wall))return n===this.player&&this.toast("Need more stars!"),!1;const[s,r]=wn(t,e),a=[Zr+(s+.5)*Zn,Kr+(r+.5)*Zn];return this.inBuildZone(a[0],a[1],n)?this.occ[dn(s,r)]||Math.abs(a[0])>de||Math.abs(a[1])>de?!1:(this.gold[n]-=Gn.wall,this.addBuilding(je,n,a[0],a[1]),!0):(n===this.player&&this.toast("Build inside your territory"),!1)}tryPlaceTower(t,e,n=this.player){return this.towers[n]>=qr?(n===this.player&&this.toast("Tower cap (30)"),!1):this.canAfford(n,Gn.tower)?this.occAt(t,e)?(n===this.player&&this.toast("No room"),!1):this.inBuildZone(t,e,n)?(this.gold[n]-=Gn.tower,this.addBuilding(Ln,n,t,e),this.mode="command",!0):(n===this.player&&this.toast("Build inside your territory"),!1):(n===this.player&&this.toast("Need more stars!"),!1)}tryPlaceBarracks(t,e,n=this.player){if(!this.canAfford(n,Gn.barracks))return n===this.player&&this.toast("Need more stars!"),!1;if(this.barracksFor(n)>=qs)return n===this.player&&this.toast(`Barracks cap (${qs})`),!1;const[r,a]=wn(t,e);if(!this.inBuildZone(t,e,n))return n===this.player&&this.toast("Build inside your territory"),!1;for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){const h=r+o,l=a+c;if(h<0||l<0||h>=ye||l>=an)return!1;if(this.occ[dn(h,l)])return n===this.player&&this.toast("No room"),!1}return this.gold[n]-=Gn.barracks,this.addBuilding(Se,n,t,e),this.mode="command",!0}rebuildHash(){this.hash.clear();for(let t=0;t<Pt;t++){if(!this.alive[t])continue;const e=(this.x[t]/2.4|0)+512*(this.z[t]/2.4|0);let n=this.hash.get(e);n||(n=[],this.hash.set(e,n)),n.push(t)}}nearby(t,e,n){n.length=0;const s=this.x[t],r=this.z[t],a=e*e,o=s/2.4|0,c=r/2.4|0;for(let h=-1;h<=1;h++)for(let l=-1;l<=1;l++){const u=this.hash.get(o+h+512*(c+l));if(u)for(const d of u){if(d===t||!this.alive[d])continue;const f=this.x[d]-s,g=this.z[d]-r;f*f+g*g<=a&&n.push(d)}}}damageUnit(t,e){this.alive[t]&&(this.hp[t]-=e,this.hits.push({x:this.x[t],z:this.z[t],k:1}),this.hp[t]<=0&&this.killUnit(t))}damageBuilding(t,e){if(!(t.kind===on||t.kind===In)&&(t.hp-=e,this.hits.push({x:t.x,z:t.z,k:2}),t.hp<=0)){if(t.kind===$t){t.home!==null&&(this.winner=1-t.home);return}this.removeBuilding(t)}}tickCapture(t){for(const s of this.buildings){if(s.kind!==Ht&&s.kind!==$t&&s.kind!==Se)continue;const r=[0,0],a=s.radius+1.55,o=a*a;for(let l=0;l<Pt;l++){if(!this.alive[l]||this.guardian[l])continue;const u=this.x[l]-s.x,d=this.z[l]-s.z;u*u+d*d>o||(r[this.faction[l]]+=Ue[this.kind[l]].capture)}const c=s.kind===$t?1.6:s.kind===Se?8:14,h=this.defendersBlockCapture(s);if(s.owner===Ce){const l=r[0]>=r[1]?0:1,u=r[l]-r[1-l];if(u>.2&&(s.progress+=u*c*t),s.progress>=100){s.owner=l,s.progress=100,s.kind===Ht&&(this.clearPocUpgrade(s),this.pocCaptures[l]+=1);const[d,f]=di(s.x,s.z,3.6);s.rallyX=d,s.rallyZ=f,l===this.player&&this.setHint(s.kind===$t?"Corner command center claimed!":"POC captured! Stars will trickle in.")}}else{const l=r[s.owner]??0,u=r[1-s.owner]??0;let d=l-u;if(h&&u>l&&(d=Math.max(0,d)),s.progress+=d*c*t/(s.kind===$t?9:1),s.progress>100&&(s.progress=100),s.progress<0){if(h){s.progress=0;continue}const f=1-s.owner,g=u>.2?f:Ce;s.kind===Ht&&g!==Ce&&(this.pocCaptures[g]+=1),s.kind===Ht&&this.clearPocUpgrade(s),s.owner=g,s.progress=s.owner===Ce?0:35,s.queue=[]}}}const e=this.buildings.find(s=>s.kind===$t&&s.home===0),n=this.buildings.find(s=>s.kind===$t&&s.home===1);(!e||e.owner===1)&&(this.winner=1),(!n||n.owner===0)&&(this.winner=0)}tickIncome(t){this.income[0]=0,this.income[1]=0;for(const e of this.buildings)if(!(e.owner!==0&&e.owner!==1)&&(e.kind===$t&&(this.income[e.owner]+=Cl),e.kind===Ht)){let n=Pl;e.pocUpgrade==="star"&&(n*=Ll),this.income[e.owner]+=n}this.gold[0]+=this.income[0]*t,this.gold[1]+=this.income[1]*t}tickProduction(t){for(const e of this.buildings)if(!(!e.queue.length||e.owner>1)&&(e.queue[0].t-=t,e.queue[0].t<=0)){const n=e.queue.shift().kind;this.spawnAround(e,n)}}tickTowers(t){for(const e of this.buildings){if(e.kind!==Ln||e.owner>1||(e.atkCd-=t,e.atkCd>0))continue;let n=-1,s=8.4;for(let r=0;r<Pt;r++){if(!this.alive[r]||this.faction[r]===e.owner)continue;const a=Math.hypot(this.x[r]-e.x,this.z[r]-e.z);a<s&&(s=a,n=r)}n>=0&&(e.atkCd=.62,e.yaw=Math.atan2(this.x[n]-e.x,this.z[n]-e.z),this.beams.push({x0:e.x,z0:e.z,x1:this.x[n],z1:this.z[n],y0:2,y1:Ue[this.kind[n]].radius+.35,t:Pc,owner:e.owner}),this.damageUnit(n,15))}}tickUnits(t){this.rebuildHash();const e=this.tmpNear;for(let n=0;n<Pt;n++){if(!this.alive[n])continue;const s=Ue[this.kind[n]];this.cd[n]=Math.max(0,this.cd[n]-t);const r=this.faction[n];if(this.guardian[n]){const y=this.buildings.find(R=>R.id===this.guardPost[n]);if(!y||y.owner!==r||y.pocUpgrade!=="defenders"){this.killUnit(n);continue}this.task[n]=Ke,this.target[n]=-1;const M=y.radius+2.8;Math.hypot(this.x[n]-y.x,this.z[n]-y.z)>M?(this.tx[n]=y.x,this.tz[n]=y.z,this.task[n]=pn):this.holdPosition(n)}if(this.task[n]===is&&this.target[n]>=0){const y=this.target[n];this.alive[y]?(this.tx[n]=this.x[y],this.tz[n]=this.z[y]):(this.task[n]=Ke,this.target[n]=-1)}if(this.task[n]===Dn||this.task[n]===Kn){const y=this.buildings.find(M=>M.id===this.target[n]);y?(this.tx[n]=y.x,this.tz[n]=y.z,this.task[n]===Dn&&y.owner===r&&(this.task[n]=Ke)):this.task[n]=Ke}let a=this.tx[n]-this.x[n],o=this.tz[n]-this.z[n];const c=Math.hypot(a,o),[h,l]=wn(this.x[n],this.z[n]),u=dn(h,l),d=this.flowX[r][u],f=this.flowZ[r][u];Math.hypot(this.tx[n]-this.flowGoalX[r],this.tz[n]-this.flowGoalZ[r])<3.2&&(this.task[n]===pn||this.task[n]===Dn||this.task[n]===Kn)&&(d||f)&&c>2.2&&(a=d,o=f);let x=-1,m=s.range+3.5;this.nearby(n,5.5,e);for(const y of e){if(this.faction[y]===r)continue;const M=Math.hypot(this.x[y]-this.x[n],this.z[y]-this.z[n]);M<m&&(m=M,x=y)}if(this.kind[n]!==ae&&x>=0&&(this.task[n]===Ke||this.task[n]===is))if(m<=s.range+.15){this.vx[n]*=.4,this.vz[n]*=.4,this.cd[n]<=0&&(this.cd[n]=.55,this.atkAnim[n]=$r,this.faceToward(n,this.x[x],this.z[x]),this.damageUnit(x,s.dmg));continue}else this.task[n]===is&&this.target[n]===x&&(a=this.x[x]-this.x[n],o=this.z[x]-this.z[n]);if(this.task[n]===Kn&&c<1.7){this.gatherT[n]+=t,this.gatherT[n]>=Ul&&(this.gatherT[n]=0,this.gold[r]+=Dl),this.vx[n]*=.5,this.vz[n]*=.5,this.holdPosition(n);continue}if(this.task[n]===Dn&&c<1.8){this.vx[n]*=.45,this.vz[n]*=.45,this.holdPosition(n);continue}if(this.task[n]===pn&&c<.55){this.task[n]=Ke,this.holdPosition(n),this.vx[n]*=.3,this.vz[n]*=.3;continue}let p=0,T=0;for(const y of e){const M=this.x[n]-this.x[y],R=this.z[n]-this.z[y],G=Math.hypot(M,R)||.001,k=Ue[this.kind[n]].radius+Ue[this.kind[y]].radius+.08;if(G<k){const Z=(k-G)/k;p+=M/G*Z,T+=R/G*Z}}const E=Math.hypot(a,o)||1;let v=a/E*s.speed+p*6,U=o/E*s.speed+T*6;const b=this.x[n]+v*t,A=this.z[n]+U*t;if(this.occAt(b,A)){this.stuck[n]+=t;const y=!this.occAt(this.x[n]+v*t,this.z[n]),M=!this.occAt(this.x[n],this.z[n]+U*t);y?U=0:M?v=0:(v=-U*.8,U=v*.2),this.stuck[n]>.6&&(this.tx[n]+=(Math.random()-.5)*4,this.tz[n]+=(Math.random()-.5)*4,this.stuck[n]=0)}else this.stuck[n]=0;if(this.x[n]+=v*t,this.z[n]+=U*t,this.x[n]=Math.max(-de,Math.min(de,this.x[n])),this.z[n]=Math.max(-de,Math.min(de,this.z[n])),this.vx[n]=v,this.vz[n]=U,this.updateFacing(n,a,o,c,v,U),this.kind[n]!==ae)for(const y of this.buildings){if(y.owner===r||y.kind!==je&&y.kind!==Ln)continue;if(Math.hypot(y.x-this.x[n],y.z-this.z[n])<s.range+y.radius&&this.cd[n]<=0){this.cd[n]=.7,this.atkAnim[n]=$r,this.faceToward(n,y.x,y.z),this.damageBuilding(y,s.dmg);break}}}}garrisonIds(t,e,n){const s=new Set;if(!e||n<=0)return s;const r=[];for(let a=0;a<Pt;a++)!this.alive[a]||this.faction[a]!==t||this.kind[a]===ae||r.push({i:a,d:Math.hypot(this.x[a]-e.x,this.z[a]-e.z)});r.sort((a,o)=>a.d-o.d);for(let a=0;a<n&&a<r.length;a++)s.add(r[a].i);return s}assignMilitary(t,e,n,s,r,a,o){var d;this.computeFlow(e,n,t);let c=0;const h=[];for(let f=0;f<Pt;f++)if(!(!this.alive[f]||this.faction[f]!==t)&&this.kind[f]!==ae&&!(o!=null&&o.sparksOnly&&this.kind[f]!==ri)&&!((d=o==null?void 0:o.hold)!=null&&d.has(f))){if(this.task[f]===s&&this.target[f]===r){c+=1;continue}this.task[f]===Dn&&this.target[f]!==r||o!=null&&o.idleOnly&&this.task[f]!==Ke&&this.task[f]!==pn||h.push(f)}const l=Math.max(0,a-c);let u=0;for(const f of h){if(u>=l)break;this.task[f]=s,this.tx[f]=e,this.tz[f]=n,this.target[f]=r,u+=1}return c+u}enqueueTrain(t,e,n){if(!n||n.owner!==t||n.queue.length>=4)return!1;const s=Ue[e];return this.gold[t]<s.cost||this.units[t]>=Xs?!1:(this.gold[t]-=s.cost,n.queue.push({kind:e,t:s.time}),!0)}tickAI(t){const e=1-this.player;if(this.aiT-=t,this.aiProbeT-=t,this.aiT>0||(this.aiT=1.8,this.aiProfile!=="balanced"))return;const n={w:0,s:0,m:0,l:0,mil:0};for(let d=0;d<Pt;d++)!this.alive[d]||this.faction[d]!==e||(this.kind[d]===ae?n.w++:(n.mil++,this.kind[d]===ri?n.s++:this.kind[d]===fr?n.m++:n.l++));const s=this.buildings.find(d=>d.kind===$t&&d.home===e),r=this.buildings.find(d=>d.kind===$t&&d.home===this.player),a=this.buildings.find(d=>d.kind===Se&&d.owner===e&&d.queue.length<4),o=this.buildings.filter(d=>d.kind===Ht&&d.owner===e).length,c=zl(this.time,o,n.mil),h=this.buildings.filter(d=>d.kind===Ln&&d.owner===e).length;if(this.assignWorkersToCrystals(e),s&&n.w<(c==="secure"?4:5)&&this.enqueueTrain(e,ae,s),c==="secure"||c==="expand"?(n.s<8&&this.enqueueTrain(e,ri,a),c==="expand"&&n.m<3&&this.enqueueTrain(e,fr,a)):(n.s<6&&this.enqueueTrain(e,ri,a),n.m<5&&this.enqueueTrain(e,fr,a),n.l<3&&this.gold[e]>Ue[po].cost&&this.enqueueTrain(e,po,a)),s&&this.gold[e]>=Gn.tower&&h<(c==="secure"?1:2)){const d=Math.sign(-s.x)||1,f=Math.sign(-s.z)||1,g=h===0?4.6:7.2;this.tryPlaceTower(s.x+d*g,s.z+f*(h===0?2.8:5.4),e)&&(this.aiTowers+=1)}if(s&&this.gold[e]>=Gn.wall*3&&this.aiWalls<(o>=1?2:1)){const d=Math.sign(-s.x)||1,f=Math.sign(-s.z)||1,g=-f,x=d,m=this.aiWalls===0?5.4:8.2,p=s.x+d*m,T=s.z+f*m;let E=0;for(let v=-2;v<=2;v++)this.tryPlaceWall(p+g*v*Zn,T+x*v*Zn,e)&&(E+=1);E&&(this.aiWalls+=1)}const l=this.garrisonIds(e,s,Wl(c));if(this.aiProbeT<=0&&(c==="expand"||c==="mass"||c==="assault")&&n.mil>=6){const d=Gl(this.buildings,e,s,r);d&&this.assignMilitary(e,d.x,d.z,Dn,d.id,3,{idleOnly:!0,sparksOnly:!0,hold:l}),this.aiProbeT=16+Math.random()*10}const u=Hl(c,this.buildings,e,s,r);u&&n.mil>=3&&this.assignMilitary(e,u.x,u.z,Dn,u.id,Vl(c,n.mil),{hold:l})}tick(t){if(this.winner!==null)return;const e=Math.min(.05,t);this.time+=e,this.hintT>0&&(this.hintT-=e),this.hits=[];for(let n=0;n<Pt;n++)this.atkAnim[n]>0&&(this.atkAnim[n]=Math.max(0,this.atkAnim[n]-e));for(let n=this.beams.length-1;n>=0;n--)this.beams[n].t-=e,this.beams[n].t<=0&&this.beams.splice(n,1);for(let n=this.corpses.length-1;n>=0;n--)this.corpses[n].t-=e,this.corpses[n].t<=0&&this.corpses.splice(n,1);this.tickIncome(e),this.tickProduction(e),this.tickTowers(e),this.tickUnits(e),this.tickDefenders(e),this.tickCapture(e),this.tickAI(e),this.assignWorkersToCrystals(0),this.assignWorkersToCrystals(1),this.liveCount()}selectionSummary(){if(this.selectedBuilding>=0){const e=this.buildings.find(n=>n.id===this.selectedBuilding);if(e){const n=e.queue.length?` · q ${e.queue.length}`:"",s=e.kind===$t?"HQ":e.kind===Se?"Barracks":e.kind===Ht?e.pocUpgrade==="star"?"POC ★":e.pocUpgrade==="defenders"?"POC 🛡":"POC":e.kind===je?"Wall":"Tower",r=this.canDemolish(e)?" · Demolish":"";return`${Lc[this.player]} ${s}${n}${r}`}}if(this.selectCount===0)return"";const t=[0,0,0,0];for(let e=0;e<Pt;e++)this.selected[e]&&this.alive[e]&&t[this.kind[e]]++;return t.map((e,n)=>e?`${e} ${Ue[n].name}${e>1?"s":""}`:"").filter(Boolean).join(" · ")}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ga="170",Xl=0,xo=1,ql=2,Oc=1,Yl=2,Un=3,ni=0,He=1,Nn=2,ti=0,Hi=1,vo=2,Mo=3,yo=4,$l=5,pi=100,Zl=101,Kl=102,jl=103,Jl=104,Ql=200,th=201,eh=202,nh=203,Jr=204,Qr=205,ih=206,sh=207,rh=208,ah=209,oh=210,ch=211,lh=212,hh=213,uh=214,ta=0,ea=1,na=2,Xi=3,ia=4,sa=5,ra=6,aa=7,Va=0,dh=1,fh=2,ei=0,ph=1,mh=2,gh=3,_h=4,xh=5,vh=6,Mh=7,Bc=300,qi=301,Yi=302,oa=303,ca=304,cr=306,er=1e3,_i=1001,la=1002,qe=1003,yh=1004,Ss=1005,xn=1006,mr=1007,xi=1008,kn=1009,kc=1010,zc=1011,ps=1012,Wa=1013,vi=1014,vn=1015,ms=1016,Xa=1017,qa=1018,$i=1020,Hc=35902,Gc=1021,Vc=1022,hn=1023,Wc=1024,Xc=1025,Gi=1026,Zi=1027,Ya=1028,$a=1029,qc=1030,Za=1031,Ka=1033,Ys=33776,$s=33777,Zs=33778,Ks=33779,ha=35840,ua=35841,da=35842,fa=35843,pa=36196,ma=37492,ga=37496,_a=37808,xa=37809,va=37810,Ma=37811,ya=37812,Sa=37813,Ea=37814,Ta=37815,wa=37816,Aa=37817,ba=37818,Ra=37819,Ca=37820,Pa=37821,js=36492,La=36494,Da=36495,Yc=36283,Ua=36284,Ia=36285,Na=36286,Sh=3200,Eh=3201,$c=0,Th=1,Jn="",ke="srgb",Ji="srgb-linear",lr="linear",ne="srgb",Ei=7680,So=519,wh=512,Ah=513,bh=514,Zc=515,Rh=516,Ch=517,Ph=518,Lh=519,Eo=35044,Kc=35048,To="300 es",On=2e3,nr=2001;class Qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gr=Math.PI/180,Fa=180/Math.PI;function gs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function Dh(i,t){return(i%t+t)%t}function _r(i,t,e){return(1-e)*i+e*t}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,r,a,o,c,h){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],E=s[4],v=s[7],U=s[2],b=s[5],A=s[8];return r[0]=a*x+o*T+c*U,r[3]=a*m+o*E+c*b,r[6]=a*p+o*v+c*A,r[1]=h*x+l*T+u*U,r[4]=h*m+l*E+u*b,r[7]=h*p+l*v+u*A,r[2]=d*x+f*T+g*U,r[5]=d*m+f*E+g*b,r[8]=d*p+f*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+s*r*h-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=l*a-o*h,d=o*c-l*r,f=h*r-a*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*h-l*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(l*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-h*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(xr.makeScale(t,e)),this}rotate(t){return this.premultiply(xr.makeRotation(-t)),this}translate(t,e){return this.premultiply(xr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xr=new Ft;function jc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uh(){const i=ir("canvas");return i.style.display="block",i}const wo={};function us(i){i in wo||(wo[i]=!0,console.warn(i))}function Ih(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Zt={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(i.r=Bn(i.r),i.g=Bn(i.g),i.b=Bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Jn?lr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Vi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ao=[.64,.33,.3,.6,.15,.06],bo=[.2126,.7152,.0722],Ro=[.3127,.329],Co=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[Ji]:{primaries:Ao,whitePoint:Ro,transfer:lr,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:bo,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Ao,whitePoint:Ro,transfer:ne,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:bo,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let Ti;class Oh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=ir("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bh=0;class Jc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vr(s[a].image)):r.push(vr(s[a]))}else r=vr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function vr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kh=0;class Ie extends Qi{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=_i,s=_i,r=xn,a=xi,o=hn,c=kn,h=Ie.DEFAULT_ANISOTROPY,l=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=gs(),this.name="",this.source=new Jc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case er:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case er:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=Bc;Ie.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],l=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(h+1)/2,v=(f+1)/2,U=(p+1)/2,b=(l+d)/4,A=(u+x)/4,P=(g+m)/4;return E>v&&E>U?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=A/n):v>U?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=A/r,s=P/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-l)*(d-l));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(d-l)/T,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends Qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ie(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends zh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qc extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hh extends Ie{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],l=n[s+2],u=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||h!==f||l!==g){let m=1-o;const p=c*d+h*f+l*g+u*x,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),b=Math.atan2(U,p*T);m=Math.sin(m*b)/U,o=Math.sin(o*b)/U}const v=o*T;if(c=c*m+d*v,h=h*m+f*v,l=l*m+g*v,u=u*m+x*v,m===1-o){const U=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=U,h*=U,l*=U,u*=U}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],l=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+l*u+c*f-h*d,t[e+1]=c*g+l*d+h*u-o*f,t[e+2]=h*g+l*f+o*d-c*u,t[e+3]=l*g-o*u-c*d-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"YXZ":this._x=d*l*u+h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"ZXY":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u-d*f*g;break;case"ZYX":this._x=d*l*u-h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u+d*f*g;break;case"YZX":this._x=d*l*u+h*f*g,this._y=h*f*u+d*l*g,this._z=h*l*g-d*f*u,this._w=h*l*u-d*f*g;break;case"XZY":this._x=d*l*u-h*f*g,this._y=h*f*u-d*l*g,this._z=h*l*g+d*f*u,this._w=h*l*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-h)*f,this._z=(a-s)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(l-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+h)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-h)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+h)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-s*o,this._w=a*l-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),u=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),l=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*h+a*u-o*l,this.y=n+c*l+o*h-r*u,this.z=s+c*u+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mr.copy(this).projectOnVector(t),this.sub(Mr)}reflect(t){return this.sub(Mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mr=new N,Lo=new _s;class yi{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rs),Ts.subVectors(this.max,rs),wi.subVectors(t.a,rs),Ai.subVectors(t.b,rs),bi.subVectors(t.c,rs),Vn.subVectors(Ai,wi),Wn.subVectors(bi,Ai),ai.subVectors(wi,bi);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ai.y,ai.x,0];return!yr(e,wi,Ai,bi,Ts)||(e=[1,0,0,0,1,0,0,0,1],!yr(e,wi,Ai,bi,Ts))?!1:(ws.crossVectors(Vn,Wn),e=[ws.x,ws.y,ws.z],yr(e,wi,Ai,bi,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new N,new N,new N,new N,new N,new N,new N,new N],nn=new N,Es=new yi,wi=new N,Ai=new N,bi=new N,Vn=new N,Wn=new N,ai=new N,rs=new N,Ts=new N,ws=new N,oi=new N;function yr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),h=e.dot(oi),l=n.dot(oi);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Gh=new yi,as=new N,Sr=new N;class xs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);const e=as.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(as,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Sr)),this.expandByPoint(as.copy(t.center).sub(Sr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new N,Er=new N,As=new N,Xn=new N,Tr=new N,bs=new N,wr=new N;class tl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Er.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(Er);const r=t.distanceTo(e)*.5,a=-this.direction.dot(As),o=Xn.dot(this.direction),c=-Xn.dot(As),h=Xn.lengthSq(),l=Math.abs(1-a*a);let u,d,f,g;if(l>0)if(u=a*c-o,d=a*o-c,g=r*l,u>=0)if(d>=-g)if(d<=g){const x=1/l;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+h}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+h):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+h);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Er).addScaledVector(As,d),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,s,r){Tr.subVectors(e,t),bs.subVectors(n,t),wr.crossVectors(Tr,bs);let a=this.direction.dot(wr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const c=o*this.direction.dot(bs.crossVectors(Xn,bs));if(c<0)return null;const h=o*this.direction.dot(Tr.cross(Xn));if(h<0||c+h>a)return null;const l=-o*Xn.dot(wr);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,a,o,c,h,l,u,d,f,g,x,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,l,u,d,f,g,x,m)}set(t,e,n,s,r,a,o,c,h,l,u,d,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ri.setFromMatrixColumn(t,0).length(),r=1/Ri.setFromMatrixColumn(t,1).length(),a=1/Ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*l,f=a*u,g=o*l,x=o*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=f+g*h,e[5]=d-x*h,e[9]=-o*c,e[2]=x-d*h,e[6]=g+f*h,e[10]=a*c}else if(t.order==="YXZ"){const d=c*l,f=c*u,g=h*l,x=h*u;e[0]=d+x*o,e[4]=g*o-f,e[8]=a*h,e[1]=a*u,e[5]=a*l,e[9]=-o,e[2]=f*o-g,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*l,f=c*u,g=h*l,x=h*u;e[0]=d-x*o,e[4]=-a*u,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*l,e[9]=x-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*l,f=a*u,g=o*l,x=o*u;e[0]=c*l,e[4]=g*h-f,e[8]=d*h+x,e[1]=c*u,e[5]=x*h+d,e[9]=f*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*h,g=o*c,x=o*h;e[0]=c*l,e[4]=x-d*u,e[8]=g*u+f,e[1]=u,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=f*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=a*c,f=a*h,g=o*c,x=o*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=d*u+x,e[5]=a*l,e[9]=f*u-g,e[2]=g*u-f,e[6]=o*l,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vh,t,Wh)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),qn.crossVectors(n,We),qn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),qn.crossVectors(n,We)),qn.normalize(),Rs.crossVectors(We,qn),s[0]=qn.x,s[4]=Rs.x,s[8]=We.x,s[1]=qn.y,s[5]=Rs.y,s[9]=We.y,s[2]=qn.z,s[6]=Rs.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],E=n[7],v=n[11],U=n[15],b=s[0],A=s[4],P=s[8],y=s[12],M=s[1],R=s[5],G=s[9],k=s[13],Z=s[2],K=s[6],q=s[10],J=s[14],H=s[3],st=s[7],ht=s[11],St=s[15];return r[0]=a*b+o*M+c*Z+h*H,r[4]=a*A+o*R+c*K+h*st,r[8]=a*P+o*G+c*q+h*ht,r[12]=a*y+o*k+c*J+h*St,r[1]=l*b+u*M+d*Z+f*H,r[5]=l*A+u*R+d*K+f*st,r[9]=l*P+u*G+d*q+f*ht,r[13]=l*y+u*k+d*J+f*St,r[2]=g*b+x*M+m*Z+p*H,r[6]=g*A+x*R+m*K+p*st,r[10]=g*P+x*G+m*q+p*ht,r[14]=g*y+x*k+m*J+p*St,r[3]=T*b+E*M+v*Z+U*H,r[7]=T*A+E*R+v*K+U*st,r[11]=T*P+E*G+v*q+U*ht,r[15]=T*y+E*k+v*J+U*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],u=t[6],d=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*h*u-r*o*d+n*h*d+s*o*f-n*c*f)+x*(+e*c*f-e*h*d+r*a*d-s*a*f+s*h*l-r*c*l)+m*(+e*h*u-e*o*f-r*a*u+n*a*f+r*o*l-n*h*l)+p*(-s*o*l-e*c*u+e*o*d+s*a*u-n*a*d+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],u=t[9],d=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],T=u*m*h-x*d*h+x*c*f-o*m*f-u*c*p+o*d*p,E=g*d*h-l*m*h-g*c*f+a*m*f+l*c*p-a*d*p,v=l*x*h-g*u*h+g*o*f-a*x*f-l*o*p+a*u*p,U=g*u*c-l*x*c-g*o*d+a*x*d+l*o*m-a*u*m,b=e*T+n*E+s*v+r*U;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=T*A,t[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*A,t[2]=(o*m*r-x*c*r+x*s*h-n*m*h-o*s*p+n*c*p)*A,t[3]=(u*c*r-o*d*r-u*s*h+n*d*h+o*s*f-n*c*f)*A,t[4]=E*A,t[5]=(l*m*r-g*d*r+g*s*f-e*m*f-l*s*p+e*d*p)*A,t[6]=(g*c*r-a*m*r-g*s*h+e*m*h+a*s*p-e*c*p)*A,t[7]=(a*d*r-l*c*r+l*s*h-e*d*h-a*s*f+e*c*f)*A,t[8]=v*A,t[9]=(g*u*r-l*x*r-g*n*f+e*x*f+l*n*p-e*u*p)*A,t[10]=(a*x*r-g*o*r+g*n*h-e*x*h-a*n*p+e*o*p)*A,t[11]=(l*o*r-a*u*r-l*n*h+e*u*h+a*n*f-e*o*f)*A,t[12]=U*A,t[13]=(l*x*s-g*u*s+g*n*d-e*x*d-l*n*m+e*u*m)*A,t[14]=(g*o*s-a*x*s-g*n*c+e*x*c+a*n*m-e*o*m)*A,t[15]=(a*u*s-l*o*s+l*n*c-e*u*c-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+n,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,u=o+o,d=r*h,f=r*l,g=r*u,x=a*l,m=a*u,p=o*u,T=c*h,E=c*l,v=c*u,U=n.x,b=n.y,A=n.z;return s[0]=(1-(x+p))*U,s[1]=(f+v)*U,s[2]=(g-E)*U,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(d+p))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(g+E)*A,s[9]=(m-T)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ri.set(s[0],s[1],s[2]).length();const a=Ri.set(s[4],s[5],s[6]).length(),o=Ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);const h=1/r,l=1/a,u=1/o;return sn.elements[0]*=h,sn.elements[1]*=h,sn.elements[2]*=h,sn.elements[4]*=l,sn.elements[5]*=l,sn.elements[6]*=l,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=On){const c=this.elements,h=2*r/(e-t),l=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(o===On)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===nr)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On){const c=this.elements,h=1/(e-t),l=1/(n-s),u=1/(a-r),d=(e+t)*h,f=(n+s)*l;let g,x;if(o===On)g=(a+r)*u,x=-2*u;else if(o===nr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ri=new N,sn=new oe,Vh=new N(0,0,0),Wh=new N(1,1,1),qn=new N,Rs=new N,We=new N,Do=new oe,Uo=new _s;class yn{constructor(t=0,e=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xh=0;const Io=new N,Ci=new _s,Rn=new oe,Cs=new N,os=new N,qh=new N,Yh=new _s,No=new N(1,0,0),Fo=new N(0,1,0),Oo=new N(0,0,1),Bo={type:"added"},$h={type:"removed"},Pi={type:"childadded",child:null},Ar={type:"childremoved",child:null};class Ae extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new N,e=new yn,n=new _s,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ft}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(No,t)}rotateY(t){return this.rotateOnAxis(Fo,t)}rotateZ(t){return this.rotateOnAxis(Oo,t)}translateOnAxis(t,e){return Io.copy(t).applyQuaternion(this.quaternion),this.position.add(Io.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(No,t)}translateY(t){return this.translateOnAxis(Fo,t)}translateZ(t){return this.translateOnAxis(Oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(os,Cs,this.up):Rn.lookAt(Cs,os,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bo),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($h),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bo),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,t,qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Yh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new N,Cn=new N,br=new N,Pn=new N,Li=new N,Di=new N,ko=new N,Rr=new N,Cr=new N,Pr=new N,Lr=new pe,Dr=new pe,Ur=new pe;class ln{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Cn.subVectors(n,e),br.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(Cn),c=rn.dot(br),h=Cn.dot(Cn),l=Cn.dot(br),u=a*h-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(h*c-o*l)*d,g=(a*l-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Lr.setScalar(0),Dr.setScalar(0),Ur.setScalar(0),Lr.fromBufferAttribute(t,e),Dr.fromBufferAttribute(t,n),Ur.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Lr,r.x),a.addScaledVector(Dr,r.y),a.addScaledVector(Ur,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Cn.subVectors(t,e),rn.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),rn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Li.subVectors(s,n),Di.subVectors(r,n),Rr.subVectors(t,n);const c=Li.dot(Rr),h=Di.dot(Rr);if(c<=0&&h<=0)return e.copy(n);Cr.subVectors(t,s);const l=Li.dot(Cr),u=Di.dot(Cr);if(l>=0&&u<=l)return e.copy(s);const d=c*u-l*h;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(Li,a);Pr.subVectors(t,r);const f=Li.dot(Pr),g=Di.dot(Pr);if(g>=0&&f<=g)return e.copy(r);const x=f*h-c*g;if(x<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Di,o);const m=l*g-f*u;if(m<=0&&u-l>=0&&f-g>=0)return ko.subVectors(r,s),o=(u-l)/(u-l+(f-g)),e.copy(s).addScaledVector(ko,o);const p=1/(m+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(Li,a).addScaledVector(Di,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const el={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Ir(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=Dh(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ir(a,r,t+1/3),this.g=Ir(a,r,t),this.b=Ir(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=el[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=Vi(t.r),this.g=Vi(t.g),this.b=Vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Zt.fromWorkingColorSpace(Le.copy(this),t),Math.round(ze(Le.r*255,0,255))*65536+Math.round(ze(Le.g*255,0,255))*256+Math.round(ze(Le.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const u=a-o;switch(h=l<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=ke){Zt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Ps);const n=_r(Yn.h,Ps.h,e),s=_r(Yn.s,Ps.s,e),r=_r(Yn.l,Ps.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Kt;Kt.NAMES=el;let Zh=0;class vs extends Qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=gs(),this.name="",this.blending=Hi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sr extends vs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new N,Ls=new Xt;class Qe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Eo,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eo&&(t.usage=this.usage),t}}class nl extends Qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class il extends Qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ge extends Qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kh=0;const Ze=new oe,Nr=new Ae,Ui=new N,Xe=new yi,cs=new yi,Me=new N;class Sn extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jc(t)?il:nl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Nr.lookAt(t),Nr.updateMatrix(),this.applyMatrix4(Nr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ui).negate(),this.translate(Ui.x,Ui.y,Ui.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Xe.min,cs.min),Xe.expandByPoint(Me),Me.addVectors(Xe.max,cs.max),Xe.expandByPoint(Me)):(Xe.expandByPoint(cs.min),Xe.expandByPoint(cs.max))}Xe.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Me.fromBufferAttribute(o,h),c&&(Ui.fromBufferAttribute(t,h),Me.add(Ui)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new N,c[P]=new N;const h=new N,l=new N,u=new N,d=new Xt,f=new Xt,g=new Xt,x=new N,m=new N;function p(P,y,M){h.fromBufferAttribute(n,P),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),l.sub(h),u.sub(h),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(l).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(l,-g.x).multiplyScalar(R),o[P].add(x),o[y].add(x),o[M].add(x),c[P].add(m),c[y].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let P=0,y=T.length;P<y;++P){const M=T[P],R=M.start,G=M.count;for(let k=R,Z=R+G;k<Z;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new N,v=new N,U=new N,b=new N;function A(P){U.fromBufferAttribute(s,P),b.copy(U);const y=o[P];E.copy(y),E.sub(U.multiplyScalar(U.dot(y))).normalize(),v.crossVectors(b,y);const R=v.dot(c[P])<0?-1:1;a.setXYZW(P,E.x,E.y,E.z,R)}for(let P=0,y=T.length;P<y;++P){const M=T[P],R=M.start,G=M.count;for(let k=R,Z=R+G;k<Z;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new N,r=new N,a=new N,o=new N,c=new N,h=new N,l=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,r),u.subVectors(s,r),l.cross(u),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,c){const h=o.array,l=o.itemSize,u=o.normalized,d=new h.constructor(c.length*l);let f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*l;for(let p=0;p<l;p++)d[g++]=h[f++]}return new Qe(d,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,u=h.length;l<u;l++){const d=h[l],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,d=h.length;u<d;u++){const f=h[u];l.push(f.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],u=r[h];for(let d=0,f=u.length;d<f;d++)l.push(u[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,l=a.length;h<l;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new oe,ci=new tl,Ds=new xs,Ho=new N,Us=new N,Is=new N,Ns=new N,Fr=new N,Fs=new N,Go=new N,Os=new N;class Lt extends Ae{constructor(t=new Sn,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Fs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],u=r[c];l!==0&&(Fr.fromBufferAttribute(u,t),a?Fs.addScaledVector(Fr,l):Fs.addScaledVector(Fr.sub(e),l))}e.add(Fs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(r),ci.copy(t.ray).recast(t.near),!(Ds.containsPoint(ci.origin)===!1&&(ci.intersectSphere(Ds,Ho)===null||ci.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(zo.copy(r).invert(),ci.copy(t.ray).applyMatrix4(zo),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,U=E;v<U;v+=3){const b=o.getX(v),A=o.getX(v+1),P=o.getX(v+2);s=Bs(this,p,t,n,h,l,u,b,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const T=o.getX(m),E=o.getX(m+1),v=o.getX(m+2);s=Bs(this,a,t,n,h,l,u,T,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=T,U=E;v<U;v+=3){const b=v,A=v+1,P=v+2;s=Bs(this,p,t,n,h,l,u,b,A,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const T=m,E=m+1,v=m+2;s=Bs(this,a,t,n,h,l,u,T,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jh(i,t,e,n,s,r,a,o){let c;if(t.side===He?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ni,o),c===null)return null;Os.copy(o),Os.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Os);return h<e.near||h>e.far?null:{distance:h,point:Os.clone(),object:i}}function Bs(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,Us),i.getVertexPosition(c,Is),i.getVertexPosition(h,Ns);const l=jh(i,t,e,n,Us,Is,Ns,Go);if(l){const u=new N;ln.getBarycoord(Go,Us,Is,Ns,u),s&&(l.uv=ln.getInterpolatedAttribute(s,o,c,h,u,new Xt)),r&&(l.uv1=ln.getInterpolatedAttribute(r,o,c,h,u,new Xt)),a&&(l.normal=ln.getInterpolatedAttribute(a,o,c,h,u,new N),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new N,materialIndex:0};ln.getNormal(Us,Is,Ns,d.normal),l.face=d,l.barycoord=u}return l}class wt extends Sn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(u,2));function g(x,m,p,T,E,v,U,b,A,P,y){const M=v/A,R=U/P,G=v/2,k=U/2,Z=b/2,K=A+1,q=P+1;let J=0,H=0;const st=new N;for(let ht=0;ht<q;ht++){const St=ht*R-k;for(let kt=0;kt<K;kt++){const ie=kt*M-G;st[x]=ie*T,st[m]=St*E,st[p]=Z,h.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=b>0?1:-1,l.push(st.x,st.y,st.z),u.push(kt/A),u.push(1-ht/P),J+=1}}for(let ht=0;ht<P;ht++)for(let St=0;St<A;St++){const kt=d+St+K*ht,ie=d+St+K*(ht+1),X=d+(St+1)+K*(ht+1),et=d+(St+1)+K*ht;c.push(kt,ie,et),c.push(ie,X,et),H+=6}o.addGroup(f,H,y),f+=H,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const s in n)t[s]=n[s]}return t}function Jh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function sl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Qh={clone:Ki,merge:Ne};var tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends vs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class rl extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new N,Vo=new Xt,Wo=new Xt;class cn extends rl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Vo,Wo),e.subVectors(Wo,Vo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=-90,Ni=1;class nu extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Ii,Ni,t,e);s.layers=this.layers,this.add(s);const r=new cn(Ii,Ni,t,e);r.layers=this.layers,this.add(r);const a=new cn(Ii,Ni,t,e);a.layers=this.layers,this.add(a);const o=new cn(Ii,Ni,t,e);o.layers=this.layers,this.add(o);const c=new cn(Ii,Ni,t,e);c.layers=this.layers,this.add(c);const h=new cn(Ii,Ni,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class al extends Ie{constructor(t,e,n,s,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:qi,super(t,e,n,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iu extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new al(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wt(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ti});r.uniforms.tEquirect.value=e;const a=new Lt(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=xn),new nu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Or=new N,su=new N,ru=new Ft;class jn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Or.subVectors(n,e).cross(su.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Or),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ru.getNormalMatrix(t),s=this.coplanarPoint(Or).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new xs,ks=new N;class Ja{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,a=new jn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],l=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],T=s[13],E=s[14],v=s[15];if(n[0].setComponents(c-r,d-h,m-f,v-p).normalize(),n[1].setComponents(c+r,d+h,m+f,v+p).normalize(),n[2].setComponents(c+a,d+l,m+g,v+T).normalize(),n[3].setComponents(c-a,d-l,m-g,v-T).normalize(),n[4].setComponents(c-o,d-u,m-x,v-E).normalize(),e===On)n[5].setComponents(c+o,d+u,m+x,v+E).normalize();else if(e===nr)n[5].setComponents(o,u,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ol(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function au(i){const t=new WeakMap;function e(o,c){const h=o.array,l=o.usage,u=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,l),o.onUploadCallback();let f;if(h instanceof Float32Array)f=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=i.SHORT;else if(h instanceof Uint32Array)f=i.UNSIGNED_INT;else if(h instanceof Int32Array)f=i.INT;else if(h instanceof Int8Array)f=i.BYTE;else if(h instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,h){const l=c.array,u=c.updateRanges;if(i.bindBuffer(h,o),u.length===0)i.bufferSubData(h,0,l);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];i.bufferSubData(h,x.start*l.BYTES_PER_ELEMENT,l,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}class ji extends Sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,l=c+1,u=t/o,d=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<l;p++){const T=p*d-a;for(let E=0;E<h;E++){const v=E*u-r;g.push(v,-T,0),x.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){const E=T+h*p,v=T+h*(p+1),U=T+1+h*(p+1),b=T+1+h*p;f.push(E,v,b),f.push(v,U,b)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.widthSegments,t.heightSegments)}}var ou=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_u=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Du=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$u=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ku=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ju=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const of=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Af=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Df=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ff=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Of=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:ou,alphahash_pars_fragment:cu,alphamap_fragment:lu,alphamap_pars_fragment:hu,alphatest_fragment:uu,alphatest_pars_fragment:du,aomap_fragment:fu,aomap_pars_fragment:pu,batching_pars_vertex:mu,batching_vertex:gu,begin_vertex:_u,beginnormal_vertex:xu,bsdfs:vu,iridescence_fragment:Mu,bumpmap_pars_fragment:yu,clipping_planes_fragment:Su,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:wu,color_fragment:Au,color_pars_fragment:bu,color_pars_vertex:Ru,color_vertex:Cu,common:Pu,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Du,displacementmap_pars_vertex:Uu,displacementmap_vertex:Iu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Fu,colorspace_fragment:Ou,colorspace_pars_fragment:Bu,envmap_fragment:ku,envmap_common_pars_fragment:zu,envmap_pars_fragment:Hu,envmap_pars_vertex:Gu,envmap_physical_pars_fragment:Qu,envmap_vertex:Vu,fog_vertex:Wu,fog_pars_vertex:Xu,fog_fragment:qu,fog_pars_fragment:Yu,gradientmap_pars_fragment:$u,lightmap_pars_fragment:Zu,lights_lambert_fragment:Ku,lights_lambert_pars_fragment:ju,lights_pars_begin:Ju,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:sd,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:cd,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:dd,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:xd,morphinstance_vertex:vd,morphcolor_vertex:Md,morphnormal_vertex:yd,morphtarget_pars_vertex:Sd,morphtarget_vertex:Ed,normal_fragment_begin:Td,normal_fragment_maps:wd,normal_pars_fragment:Ad,normal_pars_vertex:bd,normal_vertex:Rd,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Ud,opaque_fragment:Id,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Bd,dithering_pars_fragment:kd,roughnessmap_fragment:zd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:$d,skinnormal_vertex:Zd,specularmap_fragment:Kd,specularmap_pars_fragment:jd,tonemapping_fragment:Jd,tonemapping_pars_fragment:Qd,transmission_fragment:tf,transmission_pars_fragment:ef,uv_pars_fragment:nf,uv_pars_vertex:sf,uv_vertex:rf,worldpos_vertex:af,background_vert:of,background_frag:cf,backgroundCube_vert:lf,backgroundCube_frag:hf,cube_vert:uf,cube_frag:df,depth_vert:ff,depth_frag:pf,distanceRGBA_vert:mf,distanceRGBA_frag:gf,equirect_vert:_f,equirect_frag:xf,linedashed_vert:vf,linedashed_frag:Mf,meshbasic_vert:yf,meshbasic_frag:Sf,meshlambert_vert:Ef,meshlambert_frag:Tf,meshmatcap_vert:wf,meshmatcap_frag:Af,meshnormal_vert:bf,meshnormal_frag:Rf,meshphong_vert:Cf,meshphong_frag:Pf,meshphysical_vert:Lf,meshphysical_frag:Df,meshtoon_vert:Uf,meshtoon_frag:If,points_vert:Nf,points_frag:Ff,shadow_vert:Of,shadow_frag:Bf,sprite_vert:kf,sprite_frag:zf},nt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},mn={basic:{uniforms:Ne([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ne([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ne([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ne([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ne([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ne([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ne([nt.points,nt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ne([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ne([nt.common,nt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ne([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ne([nt.sprite,nt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ne([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ne([nt.lights,nt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};mn.physical={uniforms:Ne([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const zs={r:0,b:0,g:0},hi=new yn,Hf=new oe;function Gf(i,t,e,n,s,r,a){const o=new Kt(0);let c=r===!0?0:1,h,l,u=null,d=0,f=null;function g(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?e:t).get(E)),E}function x(T){let E=!1;const v=g(T);v===null?p(o,c):v&&v.isColor&&(p(v,1),E=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,E){const v=g(E);v&&(v.isCubeTexture||v.mapping===cr)?(l===void 0&&(l=new Lt(new wt(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Ki(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),hi.copy(E.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Hf.makeRotationFromEuler(hi)),l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Lt(new ji(2,2),new ii({name:"BackgroundMaterial",uniforms:Ki(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null))}function p(T,E){T.getRGB(zs,sl(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(o,c)},render:x,addToRenderList:m}}function Vf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(M,R,G,k,Z){let K=!1;const q=u(k,G,R);r!==q&&(r=q,h(r.object)),K=f(M,k,G,Z),K&&g(M,k,G,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(M,R,G,k),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function h(M){return i.bindVertexArray(M)}function l(M){return i.deleteVertexArray(M)}function u(M,R,G){const k=G.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let K=Z[R.id];K===void 0&&(K={},Z[R.id]=K);let q=K[k];return q===void 0&&(q=d(c()),K[k]=q),q}function d(M){const R=[],G=[],k=[];for(let Z=0;Z<e;Z++)R[Z]=0,G[Z]=0,k[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:G,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,R,G,k){const Z=r.attributes,K=R.attributes;let q=0;const J=G.getAttributes();for(const H in J)if(J[H].location>=0){const ht=Z[H];let St=K[H];if(St===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(M,R,G,k){const Z={},K=R.attributes;let q=0;const J=G.getAttributes();for(const H in J)if(J[H].location>=0){let ht=K[H];ht===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),Z[H]=St,q++}r.attributes=Z,r.attributesNum=q,r.index=k}function x(){const M=r.newAttributes;for(let R=0,G=M.length;R<G;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const G=r.newAttributes,k=r.enabledAttributes,Z=r.attributeDivisors;G[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),Z[M]!==R&&(i.vertexAttribDivisor(M,R),Z[M]=R)}function T(){const M=r.newAttributes,R=r.enabledAttributes;for(let G=0,k=R.length;G<k;G++)R[G]!==M[G]&&(i.disableVertexAttribArray(G),R[G]=0)}function E(M,R,G,k,Z,K,q){q===!0?i.vertexAttribIPointer(M,R,G,Z,K):i.vertexAttribPointer(M,R,G,k,Z,K)}function v(M,R,G,k){x();const Z=k.attributes,K=G.getAttributes(),q=R.defaultAttributeValues;for(const J in K){const H=K[J];if(H.location>=0){let st=Z[J];if(st===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ht=st.normalized,St=st.itemSize,kt=t.get(st);if(kt===void 0)continue;const ie=kt.buffer,X=kt.type,et=kt.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===Wa;if(st.isInterleavedBufferAttribute){const rt=st.data,bt=rt.stride,Dt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let zt=0;zt<H.locationSize;zt++)p(H.location+zt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let zt=0;zt<H.locationSize;zt++)m(H.location+zt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let zt=0;zt<H.locationSize;zt++)E(H.location+zt,St/H.locationSize,X,ht,bt*et,(Dt+St/H.locationSize*zt)*et,vt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)p(H.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let rt=0;rt<H.locationSize;rt++)E(H.location+rt,St/H.locationSize,X,ht,St*et,St/H.locationSize*rt*et,vt)}}else if(q!==void 0){const ht=q[J];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}T()}function U(){P();for(const M in n){const R=n[M];for(const G in R){const k=R[G];for(const Z in k)l(k[Z].object),delete k[Z];delete R[G]}delete n[M]}}function b(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const G in R){const k=R[G];for(const Z in k)l(k[Z].object),delete k[Z];delete R[G]}delete n[M.id]}function A(M){for(const R in n){const G=n[R];if(G[M.id]===void 0)continue;const k=G[M.id];for(const Z in k)l(k[Z].object),delete k[Z];delete G[M.id]}}function P(){y(),a=!0,r!==s&&(r=s,h(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Wf(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function o(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let f=0;for(let g=0;g<u;g++)f+=l[g];e.update(f,n,1)}function c(h,l,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<h.length;g++)a(h[g],l[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=l[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===ms&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vn&&!P)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:U,maxSamples:b}}function qf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new jn,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=l(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{const T=r?0:n,E=T*4;let v=p.clippingState||null;c.value=v,v=l(g,d,E,f);for(let U=0;U!==E;++U)v[U]=e[U];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=f+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,v=f;E!==x;++E,v+=4)a.copy(u[E]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Yf(i){let t=new WeakMap;function e(a,o){return o===oa?a.mapping=qi:o===ca&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===oa||o===ca)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new iu(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Qa extends rl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,Xo=[.125,.215,.35,.446,.526,.582],mi=20,Br=new Qa,qo=new Kt;let kr=null,zr=0,Hr=0,Gr=!1;const fi=(1+Math.sqrt(5))/2,Fi=1/fi,Yo=[new N(-fi,Fi,0),new N(fi,Fi,0),new N(-Fi,0,fi),new N(Fi,0,fi),new N(0,fi,-Fi),new N(0,fi,Fi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){kr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kr,zr,Hr),this._renderer.xr.enabled=Gr,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kr=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Hr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:ms,format:hn,colorSpace:Ji,depthBuffer:!1},s=Zo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$f(r)),this._blurMaterial=Zf(r,t,e)}return s}_compileMaterial(t){const e=new Lt(this._lodPlanes[0],t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,n,s){const o=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,d=l.toneMapping;l.getClearColor(qo),l.toneMapping=ei,l.autoClear=!1;const f=new sr({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new Lt(new wt,f);let x=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,x=!0):(f.color.copy(qo),x=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):T===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const E=this._cubeSize;Hs(s,T*E,p>2?E:0,E,E),l.setRenderTarget(s),x&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===qi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yo[(s-r-1)%Yo.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Lt(this._lodPlanes[s],h),d=h.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*mi-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):mi;m>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mi}`);const p=[];let T=0;for(let A=0;A<mi;++A){const P=A/x,y=Math.exp(-P*P/2);p.push(y),A===0?T+=y:A<m&&(T+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const v=this._sizeLods[s],U=3*v*(s>E-Bi?s-E+Bi:0),b=4*(this._cubeSize-v);Hs(e,U,b,3*v,2*v),c.setRenderTarget(e),c.render(u,Br)}}function $f(i){const t=[],e=[],n=[];let s=i;const r=i-Bi+1+Xo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Bi?c=Xo[a-i+Bi-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),l=-h,u=1+h,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*f),E=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let b=0;b<f;b++){const A=b%3*2/3-1,P=b>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];T.set(y,x*g*b),E.set(d,m*g*b);const M=[b,b,b,b,b,b];v.set(M,p*g*b)}const U=new Sn;U.setAttribute("position",new Qe(T,x)),U.setAttribute("uv",new Qe(E,m)),U.setAttribute("faceIndex",new Qe(v,p)),t.push(U),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zo(i,t,e){const n=new Mi(i,t,e);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Zf(i,t,e){const n=new Float32Array(mi),s=new N(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ko(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function jo(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function to(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===oa||c===ca,l=c===qi||c===Yi;if(h||l){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new $o(i)),u=h?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return h&&f&&f.height>0||l&&f&&s(f)?(e===null&&(e=new $o(i)),u=h?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jf(i,t,e,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function h(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const T=f.array;x=f.version;for(let E=0,v=T.length;E<v;E+=3){const U=T[E+0],b=T[E+1],A=T[E+2];d.push(U,b,b,A,A,U)}}else if(g!==void 0){const T=g.array;x=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const U=E+0,b=E+1,A=E+2;d.push(U,b,b,A,A,U)}}else return;const m=new(jc(d)?il:nl)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function l(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&h(u)}else h(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function Qf(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function h(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),e.update(f,n,g))}function l(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*x[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function tp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ep(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let U=o.attributes.position.count*v,b=1;U>t.maxTextureSize&&(b=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*b*4*u),P=new Qc(A,U,b,u);P.type=vn,P.needsUpdate=!0;const y=v*4;for(let R=0;R<u;R++){const G=p[R],k=T[R],Z=E[R],K=U*b*4*R;for(let q=0;q<G.count;q++){const J=q*y;g===!0&&(s.fromBufferAttribute(G,q),A[K+J+0]=s.x,A[K+J+1]=s.y,A[K+J+2]=s.z,A[K+J+3]=0),x===!0&&(s.fromBufferAttribute(k,q),A[K+J+4]=s.x,A[K+J+5]=s.y,A[K+J+6]=s.z,A[K+J+7]=0),m===!0&&(s.fromBufferAttribute(Z,q),A[K+J+8]=s.x,A[K+J+9]=s.y,A[K+J+10]=s.z,A[K+J+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Xt(U,b)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function np(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class cl extends Ie{constructor(t,e,n,s,r,a,o,c,h,l=Gi){if(l!==Gi&&l!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Gi&&(n=vi),n===void 0&&l===Zi&&(n=$i),super(null,s,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ll=new Ie,Jo=new cl(1,1),hl=new Qc,ul=new Hh,dl=new al,Qo=[],tc=[],ec=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qo[s];if(r===void 0&&(r=new Float32Array(s),Qo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hr(i,t){let e=tc[t];e===void 0&&(e=new Int32Array(t),tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ip(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function op(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;ic.set(n),i.uniformMatrix2fv(this.addr,!1,ic),ve(e,n)}}function cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;nc.set(n),i.uniformMatrix3fv(this.addr,!1,nc),ve(e,n)}}function lp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;ec.set(n),i.uniformMatrix4fv(this.addr,!1,ec),ve(e,n)}}function hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function pp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function gp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function xp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Jo.compareFunction=Zc,r=Jo):r=ll,e.setTexture2D(t||r,s)}function vp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ul,s)}function Mp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dl,s)}function yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hl,s)}function Sp(i){switch(i){case 5126:return ip;case 35664:return sp;case 35665:return rp;case 35666:return ap;case 35674:return op;case 35675:return cp;case 35676:return lp;case 5124:case 35670:return hp;case 35667:case 35671:return up;case 35668:case 35672:return dp;case 35669:case 35673:return fp;case 5125:return pp;case 36294:return mp;case 36295:return gp;case 36296:return _p;case 35678:case 36198:case 36298:case 36306:case 35682:return xp;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return Mp;case 36289:case 36303:case 36311:case 36292:return yp}}function Ep(i,t){i.uniform1fv(this.addr,t)}function Tp(i,t){const e=ts(t,this.size,2);i.uniform2fv(this.addr,e)}function wp(i,t){const e=ts(t,this.size,3);i.uniform3fv(this.addr,e)}function Ap(i,t){const e=ts(t,this.size,4);i.uniform4fv(this.addr,e)}function bp(i,t){const e=ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rp(i,t){const e=ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Cp(i,t){const e=ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Pp(i,t){i.uniform1iv(this.addr,t)}function Lp(i,t){i.uniform2iv(this.addr,t)}function Dp(i,t){i.uniform3iv(this.addr,t)}function Up(i,t){i.uniform4iv(this.addr,t)}function Ip(i,t){i.uniform1uiv(this.addr,t)}function Np(i,t){i.uniform2uiv(this.addr,t)}function Fp(i,t){i.uniform3uiv(this.addr,t)}function Op(i,t){i.uniform4uiv(this.addr,t)}function Bp(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ll,r[a])}function kp(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ul,r[a])}function zp(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||dl,r[a])}function Hp(i,t,e){const n=this.cache,s=t.length,r=hr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||hl,r[a])}function Gp(i){switch(i){case 5126:return Ep;case 35664:return Tp;case 35665:return wp;case 35666:return Ap;case 35674:return bp;case 35675:return Rp;case 35676:return Cp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Dp;case 35669:case 35673:return Up;case 5125:return Ip;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sp(e.type)}}class Wp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gp(e.type)}}class Xp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function sc(i,t){i.seq.push(t),i.map[t.id]=t}function qp(i,t,e){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),a=Vr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){sc(e,h===void 0?new Vp(o,i,t):new Wp(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Xp(o),sc(e,u)),e=u}}}class Js{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);qp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function rc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Yp=37297;let $p=0;function Zp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ac=new Ft;function Kp(i){Zt._getMatrix(ac,Zt.workingColorSpace,i);const t=`mat3( ${ac.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case lr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zp(i.getShaderSource(t),a)}else return s}function jp(i,t){const e=Kp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Jp(i,t){let e;switch(t){case ph:e="Linear";break;case mh:e="Reinhard";break;case gh:e="Cineon";break;case _h:e="ACESFilmic";break;case vh:e="AgX";break;case Mh:e="Neutral";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new N;function Qp(){Zt.getLuminanceCoefficients(Gs);const i=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function em(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ds(i){return i!==""}function cc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(im,rm)}const sm=new Map;function rm(i,t){let e=Bt[t];if(e===void 0){const n=sm.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oa(e)}const am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(am,om)}function om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function lm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case cr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function um(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Va:t="ENVMAP_BLENDING_MULTIPLY";break;case dh:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function dm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function fm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=cm(e),h=lm(e),l=hm(e),u=um(e),d=dm(e),f=tm(e),g=em(r),x=s.createProgram();let m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(m=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Bt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Jp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,jp("linearToOutputTexel",e.outputColorSpace),Qp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),a=Oa(a),a=cc(a,e),a=lc(a,e),o=Oa(o),o=cc(o,e),o=lc(o,e),a=hc(a),o=hc(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===To?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===To?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+a,v=T+p+o,U=rc(s,s.VERTEX_SHADER,E),b=rc(s,s.FRAGMENT_SHADER,v);s.attachShader(x,U),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(R){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(U).trim(),Z=s.getShaderInfoLog(b).trim();let K=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,U,b);else{const J=oc(s,U,"vertex"),H=oc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+J+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||Z==="")&&(q=!1);q&&(R.diagnostics={runnable:K,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(U),s.deleteShader(b),P=new Js(s,x),y=nm(s,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Yp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$p++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=U,this.fragmentShader=b,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gm(t),e.set(t,n)),n}}class gm{constructor(t){this.id=pm++,this.code=t,this.usedTimes=0}}function _m(i,t,e,n,s,r,a){const o=new ja,c=new mm,h=new Set,l=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,G,k){const Z=G.fog,K=k.geometry,q=y.isMeshStandardMaterial?G.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||q),H=J&&J.mapping===cr?J.image.height:null,st=g[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=ht!==void 0?ht.length:0;let kt=0;K.morphAttributes.position!==void 0&&(kt=1),K.morphAttributes.normal!==void 0&&(kt=2),K.morphAttributes.color!==void 0&&(kt=3);let ie,X,et,vt;if(st){const ee=mn[st];ie=ee.vertexShader,X=ee.fragmentShader}else ie=y.vertexShader,X=y.fragmentShader,c.update(y),et=c.getVertexShaderID(y),vt=c.getFragmentShaderID(y);const rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Dt=k.isInstancedMesh===!0,zt=k.isBatchedMesh===!0,ue=!!y.map,qt=!!y.matcap,me=!!J,I=!!y.aoMap,Ye=!!y.lightMap,Gt=!!y.bumpMap,Vt=!!y.normalMap,Tt=!!y.displacementMap,ce=!!y.emissiveMap,Et=!!y.metalnessMap,w=!!y.roughnessMap,_=y.anisotropy>0,F=y.clearcoat>0,Y=y.dispersion>0,j=y.iridescence>0,W=y.sheen>0,Mt=y.transmission>0,at=_&&!!y.anisotropyMap,ut=F&&!!y.clearcoatMap,Yt=F&&!!y.clearcoatNormalMap,Q=F&&!!y.clearcoatRoughnessMap,dt=j&&!!y.iridescenceMap,At=j&&!!y.iridescenceThicknessMap,Rt=W&&!!y.sheenColorMap,ft=W&&!!y.sheenRoughnessMap,Wt=!!y.specularMap,Ot=!!y.specularColorMap,se=!!y.specularIntensityMap,C=Mt&&!!y.transmissionMap,it=Mt&&!!y.thicknessMap,z=!!y.gradientMap,$=!!y.alphaMap,lt=y.alphaTest>0,ot=!!y.alphaHash,It=!!y.extensions;let fe=ei;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(fe=i.toneMapping);const Re={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:X,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:zt,batchingColor:zt&&k._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,instancingMorph:Dt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ji,alphaToCoverage:!!y.alphaToCoverage,map:ue,matcap:qt,envMap:me,envMapMode:me&&J.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:Ye,bumpMap:Gt,normalMap:Vt,displacementMap:d&&Tt,emissiveMap:ce,normalMapObjectSpace:Vt&&y.normalMapType===Th,normalMapTangentSpace:Vt&&y.normalMapType===$c,metalnessMap:Et,roughnessMap:w,anisotropy:_,anisotropyMap:at,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:Yt,clearcoatRoughnessMap:Q,dispersion:Y,iridescence:j,iridescenceMap:dt,iridescenceThicknessMap:At,sheen:W,sheenColorMap:Rt,sheenRoughnessMap:ft,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:se,transmission:Mt,transmissionMap:C,thicknessMap:it,gradientMap:z,opaque:y.transparent===!1&&y.blending===Hi&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ot,combine:y.combine,mapUv:ue&&x(y.map.channel),aoMapUv:I&&x(y.aoMap.channel),lightMapUv:Ye&&x(y.lightMap.channel),bumpMapUv:Gt&&x(y.bumpMap.channel),normalMapUv:Vt&&x(y.normalMap.channel),displacementMapUv:Tt&&x(y.displacementMap.channel),emissiveMapUv:ce&&x(y.emissiveMap.channel),metalnessMapUv:Et&&x(y.metalnessMap.channel),roughnessMapUv:w&&x(y.roughnessMap.channel),anisotropyMapUv:at&&x(y.anisotropyMap.channel),clearcoatMapUv:ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:At&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:ft&&x(y.sheenRoughnessMap.channel),specularMapUv:Wt&&x(y.specularMap.channel),specularColorMapUv:Ot&&x(y.specularColorMap.channel),specularIntensityMapUv:se&&x(y.specularIntensityMap.channel),transmissionMapUv:C&&x(y.transmissionMap.channel),thicknessMapUv:it&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Vt||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(ue||$),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:fe,decodeVideoTexture:ue&&y.map.isVideoTexture===!0&&Zt.getTransfer(y.map.colorSpace)===ne,decodeVideoTextureEmissive:ce&&y.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(y.emissiveMap.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nn,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(T(M,y),E(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function T(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function E(y,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const M=g[y.type];let R;if(M){const G=mn[M];R=Qh.clone(G.uniforms)}else R=y.uniforms;return R}function U(y,M){let R;for(let G=0,k=l.length;G<k;G++){const Z=l[G];if(Z.cacheKey===M){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new fm(i,M,y,r),l.push(R)),R}function b(y){if(--y.usedTimes===0){const M=l.indexOf(y);l[M]=l[l.length-1],l.pop(),y.destroy()}}function A(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:U,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:P}}function xm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function o(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,x,m){const p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function h(u,d){e.length>1&&e.sort(u||vm),n.length>1&&n.sort(d||dc),s.length>1&&s.sort(d||dc)}function l(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:l,sort:h}}function Mm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new fc,i.set(n,[a])):s>=r.length?(a=new fc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Kt};break;case"SpotLight":e={position:new N,direction:new N,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Sm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Em=0;function Tm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wm(i){const t=new ym,e=Sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new N);const s=new N,r=new oe,a=new oe;function o(h){let l=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,E=0,v=0,U=0,b=0,A=0;h.sort(Tm);for(let y=0,M=h.length;y<M;y++){const R=h[y],G=R.color,k=R.intensity,Z=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)l+=G.r*k,u+=G.g*k,d+=G.b*k;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],k);A++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,H=e.get(R);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=R.shadow.matrix,T++}n.directional[f]=q,f++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(G).multiplyScalar(k),q.distance=Z,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[x]=q;const J=R.shadow;if(R.map&&(n.spotLightMap[U]=R.map,U++,J.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[x]=J.matrix,R.castShadow){const H=e.get(R);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=K,v++}x++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(G).multiplyScalar(k),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const J=R.shadow,H=e.get(R);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(k),q.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==E||P.numSpotShadows!==v||P.numSpotMaps!==U||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=v+U-b,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=E,P.numSpotShadows=v,P.numSpotMaps=U,P.numLightProbes=A,n.version=Em++)}function c(h,l){let u=0,d=0,f=0,g=0,x=0;const m=l.matrixWorldInverse;for(let p=0,T=h.length;p<T;p++){const E=h[p];if(E.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(E.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function pc(i){const t=new wm(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Am(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new pc(i),t.set(s,[o])):r>=a.length?(o=new pc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class bm extends vs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rm extends vs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lm(i,t,e){let n=new Ja;const s=new Xt,r=new Xt,a=new pe,o=new bm({depthPacking:Eh}),c=new Rm,h={},l=e.maxTextureSize,u={[ni]:He,[He]:ni,[Nn]:Nn},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Cm,fragmentShader:Pm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Sn;g.setAttribute("position",new Qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Lt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(b,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),G=i.state;G.setBlending(ti),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=p!==Un&&this.type===Un,Z=p===Un&&this.type!==Un;for(let K=0,q=b.length;K<q;K++){const J=b[K],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||k===!0||Z===!0){const St=this.type!==Un?{minFilter:qe,magFilter:qe}:{};H.map!==null&&H.map.dispose(),H.map=new Mi(s.x,s.y,St),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let St=0;St<ht;St++){const kt=H.getViewport(St);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),G.viewport(a),H.updateMatrices(J,St),n=H.getFrustum(),v(A,P,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&T(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,R)};function T(b,A){const P=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mi(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,P,f,x,null)}function E(b,A,P,y){let M=null;const R=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=P.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=M.uuid,k=A.uuid;let Z=h[G];Z===void 0&&(Z={},h[G]=Z);let K=Z[k];K===void 0&&(K=M.clone(),Z[k]=K,A.addEventListener("dispose",U)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,y===Un?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=P}return M}function v(b,A,P,y,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Un)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const k=t.update(b),Z=b.material;if(Array.isArray(Z)){const K=k.groups;for(let q=0,J=K.length;q<J;q++){const H=K[q],st=Z[H.materialIndex];if(st&&st.visible){const ht=E(b,st,y,M);b.onBeforeShadow(i,b,A,P,k,ht,H),i.renderBufferDirect(P,null,k,ht,b,H),b.onAfterShadow(i,b,A,P,k,ht,H)}}}else if(Z.visible){const K=E(b,Z,y,M);b.onBeforeShadow(i,b,A,P,k,K,null),i.renderBufferDirect(P,null,k,K,b,null),b.onAfterShadow(i,b,A,P,k,K,null)}}const G=b.children;for(let k=0,Z=G.length;k<Z;k++)v(G[k],A,P,y,M)}function U(b){b.target.removeEventListener("dispose",U);for(const P in h){const y=h[P],M=b.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Dm={[ta]:ea,[na]:ra,[ia]:aa,[Xi]:sa,[ea]:ta,[ra]:na,[aa]:ia,[sa]:Xi};function Um(i,t){function e(){let C=!1;const it=new pe;let z=null;const $=new pe(0,0,0,0);return{setMask:function(lt){z!==lt&&!C&&(i.colorMask(lt,lt,lt,lt),z=lt)},setLocked:function(lt){C=lt},setClear:function(lt,ot,It,fe,Re){Re===!0&&(lt*=fe,ot*=fe,It*=fe),it.set(lt,ot,It,fe),$.equals(it)===!1&&(i.clearColor(lt,ot,It,fe),$.copy(it))},reset:function(){C=!1,z=null,$.set(-1,0,0,0)}}}function n(){let C=!1,it=!1,z=null,$=null,lt=null;return{setReversed:function(ot){if(it!==ot){const It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const fe=lt;lt=null,this.setClear(fe)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ot){z!==ot&&!C&&(i.depthMask(ot),z=ot)},setFunc:function(ot){if(it&&(ot=Dm[ot]),$!==ot){switch(ot){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ot}},setLocked:function(ot){C=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){C=!1,z=null,$=null,lt=null,it=!1}}}function s(){let C=!1,it=null,z=null,$=null,lt=null,ot=null,It=null,fe=null,Re=null;return{setTest:function(ee){C||(ee?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ee){it!==ee&&!C&&(i.stencilMask(ee),it=ee)},setFunc:function(ee,tn,En){(z!==ee||$!==tn||lt!==En)&&(i.stencilFunc(ee,tn,En),z=ee,$=tn,lt=En)},setOp:function(ee,tn,En){(ot!==ee||It!==tn||fe!==En)&&(i.stencilOp(ee,tn,En),ot=ee,It=tn,fe=En)},setLocked:function(ee){C=ee},setClear:function(ee){Re!==ee&&(i.clearStencil(ee),Re=ee)},reset:function(){C=!1,it=null,z=null,$=null,lt=null,ot=null,It=null,fe=null,Re=null}}}const r=new e,a=new n,o=new s,c=new WeakMap,h=new WeakMap;let l={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,E=null,v=null,U=null,b=null,A=new Kt(0,0,0),P=0,y=!1,M=null,R=null,G=null,k=null,Z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=J>=2);let st=null,ht={};const St=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),ie=new pe().fromArray(St),X=new pe().fromArray(kt);function et(C,it,z,$){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(C,ot),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<z;It++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Xi),Gt(!1),Vt(xo),rt(i.CULL_FACE),I(ti);function rt(C){l[C]!==!0&&(i.enable(C),l[C]=!0)}function bt(C){l[C]!==!1&&(i.disable(C),l[C]=!1)}function Dt(C,it){return u[C]!==it?(i.bindFramebuffer(C,it),u[C]=it,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function zt(C,it){let z=f,$=!1;if(C){z=d.get(it),z===void 0&&(z=[],d.set(it,z));const lt=C.textures;if(z.length!==lt.length||z[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,It=lt.length;ot<It;ot++)z[ot]=i.COLOR_ATTACHMENT0+ot;z.length=lt.length,$=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,$=!0);$&&i.drawBuffers(z)}function ue(C){return g!==C?(i.useProgram(C),g=C,!0):!1}const qt={[pi]:i.FUNC_ADD,[Zl]:i.FUNC_SUBTRACT,[Kl]:i.FUNC_REVERSE_SUBTRACT};qt[jl]=i.MIN,qt[Jl]=i.MAX;const me={[Ql]:i.ZERO,[th]:i.ONE,[eh]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[lh]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function I(C,it,z,$,lt,ot,It,fe,Re,ee){if(C===ti){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),C!==$l){if(C!==m||ee!==y){if((p!==pi||v!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,v=pi),ee)switch(C){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,E=null,U=null,b=null,A.set(0,0,0),P=0,m=C,y=ee}return}lt=lt||it,ot=ot||z,It=It||$,(it!==p||lt!==v)&&(i.blendEquationSeparate(qt[it],qt[lt]),p=it,v=lt),(z!==T||$!==E||ot!==U||It!==b)&&(i.blendFuncSeparate(me[z],me[$],me[ot],me[It]),T=z,E=$,U=ot,b=It),(fe.equals(A)===!1||Re!==P)&&(i.blendColor(fe.r,fe.g,fe.b,Re),A.copy(fe),P=Re),m=C,y=!1}function Ye(C,it){C.side===Nn?bt(i.CULL_FACE):rt(i.CULL_FACE);let z=C.side===He;it&&(z=!z),Gt(z),C.blending===Hi&&C.transparent===!1?I(ti):I(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);const $=C.stencilWrite;o.setTest($),$&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ce(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(C){M!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),M=C)}function Vt(C){C!==Xl?(rt(i.CULL_FACE),C!==R&&(C===xo?i.cullFace(i.BACK):C===ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),R=C}function Tt(C){C!==G&&(q&&i.lineWidth(C),G=C)}function ce(C,it,z){C?(rt(i.POLYGON_OFFSET_FILL),(k!==it||Z!==z)&&(i.polygonOffset(it,z),k=it,Z=z)):bt(i.POLYGON_OFFSET_FILL)}function Et(C){C?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function w(C){C===void 0&&(C=i.TEXTURE0+K-1),st!==C&&(i.activeTexture(C),st=C)}function _(C,it,z){z===void 0&&(st===null?z=i.TEXTURE0+K-1:z=st);let $=ht[z];$===void 0&&($={type:void 0,texture:void 0},ht[z]=$),($.type!==C||$.texture!==it)&&(st!==z&&(i.activeTexture(z),st=z),i.bindTexture(C,it||vt[C]),$.type=C,$.texture=it)}function F(){const C=ht[st];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Rt(C){ie.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),ie.copy(C))}function ft(C){X.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),X.copy(C))}function Wt(C,it){let z=h.get(it);z===void 0&&(z=new WeakMap,h.set(it,z));let $=z.get(C);$===void 0&&($=i.getUniformBlockIndex(it,C.name),z.set(C,$))}function Ot(C,it){const $=h.get(it).get(C);c.get(it)!==$&&(i.uniformBlockBinding(it,$,C.__bindingPointIndex),c.set(it,$))}function se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},st=null,ht={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,E=null,v=null,U=null,b=null,A=new Kt(0,0,0),P=0,y=!1,M=null,R=null,G=null,k=null,Z=null,ie.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:Dt,drawBuffers:zt,useProgram:ue,setBlending:I,setMaterial:Ye,setFlipSided:Gt,setCullFace:Vt,setLineWidth:Tt,setPolygonOffset:ce,setScissorTest:Et,activeTexture:w,bindTexture:_,unbindTexture:F,compressedTexImage2D:Y,compressedTexImage3D:j,texImage2D:dt,texImage3D:At,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:Yt,texStorage3D:Q,texSubImage2D:W,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:ut,scissor:Rt,viewport:ft,reset:se}}function mc(i,t,e,n){const s=Im(n);switch(e){case Gc:return i*t;case Wc:return i*t;case Xc:return i*t*2;case Ya:return i*t/s.components*s.byteLength;case $a:return i*t/s.components*s.byteLength;case qc:return i*t*2/s.components*s.byteLength;case Za:return i*t*2/s.components*s.byteLength;case Vc:return i*t*3/s.components*s.byteLength;case hn:return i*t*4/s.components*s.byteLength;case Ka:return i*t*4/s.components*s.byteLength;case Ys:case $s:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:case fa:return Math.max(i,16)*Math.max(t,8)/4;case ha:case da:return Math.max(i,8)*Math.max(t,8)/2;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case js:case La:case Da:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yc:case Ua:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ia:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Im(i){switch(i){case kn:case kc:return{byteLength:1,components:1};case ps:case zc:case ms:return{byteLength:2,components:1};case Xa:case qa:return{byteLength:2,components:4};case vi:case Wa:case vn:return{byteLength:4,components:1};case Hc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Nm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Xt,l=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return f?new OffscreenCanvas(w,_):ir("canvas")}function x(w,_,F){let Y=1;const j=Et(w);if((j.width>F||j.height>F)&&(Y=F/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const W=Math.floor(Y*j.width),Mt=Math.floor(Y*j.height);u===void 0&&(u=g(W,Mt));const at=_?g(W,Mt):u;return at.width=W,at.height=Mt,at.getContext("2d").drawImage(w,0,0,W,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+W+"x"+Mt+")."),at}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,_,F,Y,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let W=_;if(_===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),_===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),_===i.RGBA){const Mt=j?lr:Zt.getTransfer(Y);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=Mt===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function v(w,_){let F;return w?_===null||_===vi||_===$i?F=i.DEPTH24_STENCIL8:_===vn?F=i.DEPTH32F_STENCIL8:_===ps&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vi||_===$i?F=i.DEPTH_COMPONENT24:_===vn?F=i.DEPTH_COMPONENT32F:_===ps&&(F=i.DEPTH_COMPONENT16),F}function U(w,_){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==qe&&w.minFilter!==xn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function b(w){const _=w.target;_.removeEventListener("dispose",b),P(_),_.isVideoTexture&&l.delete(_)}function A(w){const _=w.target;_.removeEventListener("dispose",A),M(_)}function P(w){const _=n.get(w);if(_.__webglInit===void 0)return;const F=w.source,Y=d.get(F);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(w),Object.keys(Y).length===0&&d.delete(F)}n.remove(w)}function y(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const F=w.source,Y=d.get(F);delete Y[_.__cacheKey],a.memory.textures--}function M(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=w.textures;for(let Y=0,j=F.length;Y<j;Y++){const W=n.get(F[Y]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(w)}let R=0;function G(){R=0}function k(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function Z(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function K(w,_){const F=n.get(w);if(w.isVideoTexture&&Tt(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const Y=w.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,w,_);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function q(w,_){const F=n.get(w);if(w.version>0&&F.__version!==w.version){X(F,w,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function J(w,_){const F=n.get(w);if(w.version>0&&F.__version!==w.version){X(F,w,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function H(w,_){const F=n.get(w);if(w.version>0&&F.__version!==w.version){et(F,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const st={[er]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},ht={[qe]:i.NEAREST,[yh]:i.NEAREST_MIPMAP_NEAREST,[Ss]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},St={[wh]:i.NEVER,[Lh]:i.ALWAYS,[Ah]:i.LESS,[Zc]:i.LEQUAL,[bh]:i.EQUAL,[Ph]:i.GEQUAL,[Rh]:i.GREATER,[Ch]:i.NOTEQUAL};function kt(w,_){if(_.type===vn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===xn||_.magFilter===mr||_.magFilter===Ss||_.magFilter===xi||_.minFilter===xn||_.minFilter===mr||_.minFilter===Ss||_.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,st[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qe||_.minFilter!==Ss&&_.minFilter!==xi||_.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ie(w,_){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",b));const Y=_.source;let j=d.get(Y);j===void 0&&(j={},d.set(Y,j));const W=Z(_);if(W!==w.__cacheKey){j[W]===void 0&&(j[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[W].usedTimes++;const Mt=j[w.__cacheKey];Mt!==void 0&&(j[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&y(_)),w.__cacheKey=W,w.__webglTexture=j[W].texture}return F}function X(w,_,F){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ie(w,_),W=_.source;e.bindTexture(Y,w.__webglTexture,i.TEXTURE0+F);const Mt=n.get(W);if(W.version!==Mt.__version||j===!0){e.activeTexture(i.TEXTURE0+F);const at=Zt.getPrimaries(Zt.workingColorSpace),ut=_.colorSpace===Jn?null:Zt.getPrimaries(_.colorSpace),Yt=_.colorSpace===Jn||at===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Q=x(_.image,!1,s.maxTextureSize);Q=ce(_,Q);const dt=r.convert(_.format,_.colorSpace),At=r.convert(_.type);let Rt=E(_.internalFormat,dt,At,_.colorSpace,_.isVideoTexture);kt(Y,_);let ft;const Wt=_.mipmaps,Ot=_.isVideoTexture!==!0,se=Mt.__version===void 0||j===!0,C=W.dataReady,it=U(_,Q);if(_.isDepthTexture)Rt=v(_.format===Zi,_.type),se&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Rt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,dt,At,null));else if(_.isDataTexture)if(Wt.length>0){Ot&&se&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Wt[0].width,Wt[0].height);for(let z=0,$=Wt.length;z<$;z++)ft=Wt[z],Ot?C&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,dt,At,ft.data):e.texImage2D(i.TEXTURE_2D,z,Rt,ft.width,ft.height,0,dt,At,ft.data);_.generateMipmaps=!1}else Ot?(se&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Q.width,Q.height),C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,At,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Rt,Q.width,Q.height,0,dt,At,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Rt,Wt[0].width,Wt[0].height,Q.depth);for(let z=0,$=Wt.length;z<$;z++)if(ft=Wt[z],_.format!==hn)if(dt!==null)if(Ot){if(C)if(_.layerUpdates.size>0){const lt=mc(ft.width,ft.height,_.format,_.type);for(const ot of _.layerUpdates){const It=ft.data.subarray(ot*lt/ft.data.BYTES_PER_ELEMENT,(ot+1)*lt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,ot,ft.width,ft.height,1,dt,It)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ft.width,ft.height,Q.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,Rt,ft.width,ft.height,Q.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?C&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,ft.width,ft.height,Q.depth,dt,At,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,Rt,ft.width,ft.height,Q.depth,0,dt,At,ft.data)}else{Ot&&se&&e.texStorage2D(i.TEXTURE_2D,it,Rt,Wt[0].width,Wt[0].height);for(let z=0,$=Wt.length;z<$;z++)ft=Wt[z],_.format!==hn?dt!==null?Ot?C&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,z,Rt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?C&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft.width,ft.height,dt,At,ft.data):e.texImage2D(i.TEXTURE_2D,z,Rt,ft.width,ft.height,0,dt,At,ft.data)}else if(_.isDataArrayTexture)if(Ot){if(se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Rt,Q.width,Q.height,Q.depth),C)if(_.layerUpdates.size>0){const z=mc(Q.width,Q.height,_.format,_.type);for(const $ of _.layerUpdates){const lt=Q.data.subarray($*z/Q.data.BYTES_PER_ELEMENT,($+1)*z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,dt,At,lt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,At,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,Q.width,Q.height,Q.depth,0,dt,At,Q.data);else if(_.isData3DTexture)Ot?(se&&e.texStorage3D(i.TEXTURE_3D,it,Rt,Q.width,Q.height,Q.depth),C&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,At,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,Q.width,Q.height,Q.depth,0,dt,At,Q.data);else if(_.isFramebufferTexture){if(se)if(Ot)e.texStorage2D(i.TEXTURE_2D,it,Rt,Q.width,Q.height);else{let z=Q.width,$=Q.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,Rt,z,$,0,dt,At,null),z>>=1,$>>=1}}else if(Wt.length>0){if(Ot&&se){const z=Et(Wt[0]);e.texStorage2D(i.TEXTURE_2D,it,Rt,z.width,z.height)}for(let z=0,$=Wt.length;z<$;z++)ft=Wt[z],Ot?C&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,dt,At,ft):e.texImage2D(i.TEXTURE_2D,z,Rt,dt,At,ft);_.generateMipmaps=!1}else if(Ot){if(se){const z=Et(Q);e.texStorage2D(i.TEXTURE_2D,it,Rt,z.width,z.height)}C&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,At,Q)}else e.texImage2D(i.TEXTURE_2D,0,Rt,dt,At,Q);m(_)&&p(Y),Mt.__version=W.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function et(w,_,F){if(_.image.length!==6)return;const Y=ie(w,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const W=n.get(j);if(j.version!==W.__version||Y===!0){e.activeTexture(i.TEXTURE0+F);const Mt=Zt.getPrimaries(Zt.workingColorSpace),at=_.colorSpace===Jn?null:Zt.getPrimaries(_.colorSpace),ut=_.colorSpace===Jn||Mt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Yt=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let $=0;$<6;$++)!Yt&&!Q?dt[$]=x(_.image[$],!0,s.maxCubemapSize):dt[$]=Q?_.image[$].image:_.image[$],dt[$]=ce(_,dt[$]);const At=dt[0],Rt=r.convert(_.format,_.colorSpace),ft=r.convert(_.type),Wt=E(_.internalFormat,Rt,ft,_.colorSpace),Ot=_.isVideoTexture!==!0,se=W.__version===void 0||Y===!0,C=j.dataReady;let it=U(_,At);kt(i.TEXTURE_CUBE_MAP,_);let z;if(Yt){Ot&&se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,At.width,At.height);for(let $=0;$<6;$++){z=dt[$].mipmaps;for(let lt=0;lt<z.length;lt++){const ot=z[lt];_.format!==hn?Rt!==null?Ot?C&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ot.width,ot.height,Rt,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Wt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,0,0,ot.width,ot.height,Rt,ft,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt,Wt,ot.width,ot.height,0,Rt,ft,ot.data)}}}else{if(z=_.mipmaps,Ot&&se){z.length>0&&it++;const $=Et(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Wt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Ot?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,dt[$].width,dt[$].height,Rt,ft,dt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,dt[$].width,dt[$].height,0,Rt,ft,dt[$].data);for(let lt=0;lt<z.length;lt++){const It=z[lt].image[$].image;Ot?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,It.width,It.height,Rt,ft,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Wt,It.width,It.height,0,Rt,ft,It.data)}}else{Ot?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Rt,ft,dt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,Rt,ft,dt[$]);for(let lt=0;lt<z.length;lt++){const ot=z[lt];Ot?C&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,0,0,Rt,ft,ot.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,lt+1,Wt,Rt,ft,ot.image[$])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),W.__version=j.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function vt(w,_,F,Y,j,W){const Mt=r.convert(F.format,F.colorSpace),at=r.convert(F.type),ut=E(F.internalFormat,Mt,at,F.colorSpace),Yt=n.get(_),Q=n.get(F);if(Q.__renderTarget=_,!Yt.__hasExternalTextures){const dt=Math.max(1,_.width>>W),At=Math.max(1,_.height>>W);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,W,ut,dt,At,_.depth,0,Mt,at,null):e.texImage2D(j,W,ut,dt,At,0,Mt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,Q.__webglTexture,0,Gt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,Q.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const Y=_.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,W=v(_.stencilBuffer,j),Mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=Gt(_);Vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,W,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,W,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,W,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,w)}else{const Y=_.textures;for(let j=0;j<Y.length;j++){const W=Y[j],Mt=r.convert(W.format,W.colorSpace),at=r.convert(W.type),ut=E(W.internalFormat,Mt,at,W.colorSpace),Yt=Gt(_);F&&Vt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,ut,_.width,_.height):Vt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const j=Y.__webglTexture,W=Gt(_);if(_.depthTexture.format===Gi)Vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===Zi)Vt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Dt(w){const _=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const Y=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Y}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");bt(_.__webglFramebuffer,w)}else if(F){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(_.__webglDepthbuffer[Y],w,!1);else{const j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),rt(_.__webglDepthbuffer,w,!1);else{const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(w,_,F){const Y=n.get(w);_!==void 0&&vt(Y.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Dt(w)}function ue(w){const _=w.texture,F=n.get(w),Y=n.get(_);w.addEventListener("dispose",A);const j=w.textures,W=w.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),W){F.__webglFramebuffer=[];for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[at]=[];for(let ut=0;ut<_.mipmaps.length;ut++)F.__webglFramebuffer[at][ut]=i.createFramebuffer()}else F.__webglFramebuffer[at]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)F.__webglFramebuffer[at]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let at=0,ut=j.length;at<ut;at++){const Yt=n.get(j[at]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Vt(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const ut=j[at];F.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[at]);const Yt=r.convert(ut.format,ut.colorSpace),Q=r.convert(ut.type),dt=E(ut.internalFormat,Yt,Q,ut.colorSpace,w.isXRRenderTarget===!0),At=Gt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,dt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,F.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),kt(i.TEXTURE_CUBE_MAP,_);for(let at=0;at<6;at++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)vt(F.__webglFramebuffer[at][ut],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ut);else vt(F.__webglFramebuffer[at],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,ut=j.length;at<ut;at++){const Yt=j[at],Q=n.get(Yt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),kt(i.TEXTURE_2D,Yt),vt(F.__webglFramebuffer,w,Yt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(at=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,Y.__webglTexture),kt(at,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)vt(F.__webglFramebuffer[ut],w,_,i.COLOR_ATTACHMENT0,at,ut);else vt(F.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,at,0);m(_)&&p(at),e.unbindTexture()}w.depthBuffer&&Dt(w)}function qt(w){const _=w.textures;for(let F=0,Y=_.length;F<Y;F++){const j=_[F];if(m(j)){const W=T(w),Mt=n.get(j).__webglTexture;e.bindTexture(W,Mt),p(W),e.unbindTexture()}}}const me=[],I=[];function Ye(w){if(w.samples>0){if(Vt(w)===!1){const _=w.textures,F=w.width,Y=w.height;let j=i.COLOR_BUFFER_BIT;const W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(w),at=_.length>1;if(at)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Yt=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,F,Y,0,0,F,Y,j,i.NEAREST),c===!0&&(me.length=0,I.length=0,me.push(i.COLOR_ATTACHMENT0+ut),w.depthBuffer&&w.resolveDepthBuffer===!1&&(me.push(W),I.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[ut]);const Yt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Gt(w){return Math.min(s.maxSamples,w.samples)}function Vt(w){const _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Tt(w){const _=a.render.frame;l.get(w)!==_&&(l.set(w,_),w.update())}function ce(w,_){const F=w.colorSpace,Y=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Ji&&F!==Jn&&(Zt.getTransfer(F)===ne?(Y!==hn||j!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function Et(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(h.width=w.naturalWidth||w.width,h.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(h.width=w.displayWidth,h.height=w.displayHeight):(h.width=w.width,h.height=w.height),h}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=zt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Vt}function Fm(i,t){function e(n,s=Jn){let r;const a=Zt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===Xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.BYTE;if(n===zc)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===Wa)return i.INT;if(n===vi)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===ms)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===hn)return i.RGBA;if(n===Wc)return i.LUMINANCE;if(n===Xc)return i.LUMINANCE_ALPHA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Ya)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===qc)return i.RG;if(n===Za)return i.RG_INTEGER;if(n===Ka)return i.RGBA_INTEGER;if(n===Ys||n===$s||n===Zs||n===Ks)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pa||n===ma||n===ga)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===pa||n===ma)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ga)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_a||n===xa||n===va||n===Ma||n===ya||n===Sa||n===Ea||n===Ta||n===wa||n===Aa||n===ba||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_a)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ta)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ba)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ca)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===js||n===La||n===Da)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===js)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yc||n===Ua||n===Ia||n===Na)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Om extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ki extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bm={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],d=l.position.distanceTo(u.position),f=.02,g=.005;h.inputState.pinching&&d>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ki;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const km=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ie,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ii({vertexShader:km,fragmentShader:zm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Lt(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gm extends Qi{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,u=null,d=null,f=null,g=null;const x=new Hm,m=e.getContextAttributes();let p=null,T=null;const E=[],v=[],U=new Xt;let b=null;const A=new cn;A.viewport=new pe;const P=new cn;P.viewport=new pe;const y=[A,P],M=new Om;let R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=E[X];return et===void 0&&(et=new Wr,E[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=E[X];return et===void 0&&(et=new Wr,E[X]=et),et.getGripSpace()},this.getHand=function(X){let et=E[X];return et===void 0&&(et=new Wr,E[X]=et),et.getHandSpace()};function k(X){const et=v.indexOf(X.inputSource);if(et===-1)return;const vt=E[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,h||a),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",K);for(let X=0;X<E.length;X++){const et=v[X];et!==null&&(v[X]=null,E[X].disconnect(et))}R=null,G=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,T=null,ie.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Mi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Zi:Gi,vt=m.stencil?$i:vi);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(bt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Mi(d.textureWidth,d.textureHeight,{format:hn,type:kn,depthTexture:new cl(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(X){for(let et=0;et<X.removed.length;et++){const vt=X.removed[et],rt=v.indexOf(vt);rt>=0&&(v[rt]=null,E[rt].disconnect(vt))}for(let et=0;et<X.added.length;et++){const vt=X.added[et];let rt=v.indexOf(vt);if(rt===-1){for(let Dt=0;Dt<E.length;Dt++)if(Dt>=v.length){v.push(vt),rt=Dt;break}else if(v[Dt]===null){v[Dt]=vt,rt=Dt;break}if(rt===-1)break}const bt=E[rt];bt&&bt.connect(vt)}}const q=new N,J=new N;function H(X,et,vt){q.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(vt.matrixWorld);const rt=q.distanceTo(J),bt=et.projectionMatrix.elements,Dt=vt.projectionMatrix.elements,zt=bt[14]/(bt[10]-1),ue=bt[14]/(bt[10]+1),qt=(bt[9]+1)/bt[5],me=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],Ye=(Dt[8]+1)/Dt[0],Gt=zt*I,Vt=zt*Ye,Tt=rt/(-I+Ye),ce=Tt*-I;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ce),X.translateZ(Tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const Et=zt+Tt,w=ue+Tt,_=Gt-ce,F=Vt+(rt-ce),Y=qt*ue/w*Et,j=me*ue/w*Et;X.projectionMatrix.makePerspective(_,F,Y,j,Et,w),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,vt=X.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),M.near=P.near=A.near=et,M.far=P.far=A.far=vt,(R!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,G=M.far),A.layers.mask=X.layers.mask|2,P.layers.mask=X.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const rt=X.parent,bt=M.cameras;st(M,rt);for(let Dt=0;Dt<bt.length;Dt++)st(bt[Dt],rt);bt.length===2?H(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),ht(X,M,rt)};function ht(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Fa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let St=null;function kt(X,et){if(l=et.getViewerPose(h||a),g=et,l!==null){const vt=l.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let rt=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Dt=0;Dt<vt.length;Dt++){const zt=vt[Dt];let ue=null;if(f!==null)ue=f.getViewport(zt);else{const me=u.getViewSubImage(d,zt);ue=me.viewport,Dt===0&&(t.setRenderTargetTextures(T,me.colorTexture,d.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(T))}let qt=y[Dt];qt===void 0&&(qt=new cn,qt.layers.enable(Dt),qt.viewport=new pe,y[Dt]=qt),qt.matrix.fromArray(zt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(zt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(ue.x,ue.y,ue.width,ue.height),Dt===0&&(M.matrix.copy(qt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(qt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Dt=u.getDepthInformation(vt[0]);Dt&&Dt.isValid&&Dt.texture&&x.init(t,Dt,s.renderState)}}for(let vt=0;vt<E.length;vt++){const rt=v[vt],bt=E[vt];rt!==null&&bt!==void 0&&bt.update(rt,et,h||a)}St&&St(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ie=new ol;ie.setAnimationLoop(kt),this.setAnimationLoop=function(X){St=X},this.dispose=function(){}}}const ui=new yn,Vm=new oe;function Wm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,E,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),l(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,E):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),E=T.envMap,v=T.envMapRotation;E&&(m.envMap.value=E,ui.copy(v),ui.x*=-1,ui.y*=-1,ui.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(ui)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xm(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const v=E.program;n.uniformBlockBinding(T,v)}function h(T,E){let v=s[T.id];v===void 0&&(g(T),v=l(T),s[T.id]=v,T.addEventListener("dispose",m));const U=E.program;n.updateUBOMapping(T,U);const b=t.render.frame;r[T.id]!==b&&(d(T),r[T.id]=b)}function l(T){const E=u();T.__bindingPointIndex=E;const v=i.createBuffer(),U=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=s[T.id],v=T.uniforms,U=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let b=0,A=v.length;b<A;b++){const P=Array.isArray(v[b])?v[b]:[v[b]];for(let y=0,M=P.length;y<M;y++){const R=P[y];if(f(R,b,y,U)===!0){const G=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let Z=0;for(let K=0;K<k.length;K++){const q=k[K],J=x(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+Z,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,Z),Z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,E,v,U){const b=T.value,A=E+"_"+v;if(U[A]===void 0)return typeof b=="number"||typeof b=="boolean"?U[A]=b:U[A]=b.clone(),!0;{const P=U[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return U[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(T){const E=T.uniforms;let v=0;const U=16;for(let A=0,P=E.length;A<P;A++){const y=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,R=y.length;M<R;M++){const G=y[M],k=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,K=k.length;Z<K;Z++){const q=k[Z],J=x(q),H=v%U,st=H%J.boundary,ht=H+st;v+=st,ht!==0&&U-ht<J.storage&&(v+=U-ht),G.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=J.storage}}}const b=v%U;return b>0&&(v+=U-b),T.__size=v,T.__cache={},this}function x(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}class qm{constructor(t={}){const{canvas:e=Uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=ei,this.toneMappingExposure=1;const v=this;let U=!1,b=0,A=0,P=null,y=-1,M=null;const R=new pe,G=new pe;let k=null;const Z=new Kt(0);let K=0,q=e.width,J=e.height,H=1,st=null,ht=null;const St=new pe(0,0,q,J),kt=new pe(0,0,q,J);let ie=!1;const X=new Ja;let et=!1,vt=!1;const rt=new oe,bt=new oe,Dt=new N,zt=new pe,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function me(){return P===null?H:1}let I=n;function Ye(S,L){return e.getContext(S,L)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ga}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),I===null){const L="webgl2";if(I=Ye(L,S),I===null)throw Ye(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,Vt,Tt,ce,Et,w,_,F,Y,j,W,Mt,at,ut,Yt,Q,dt,At,Rt,ft,Wt,Ot,se,C;function it(){Gt=new jf(I),Gt.init(),Ot=new Fm(I,Gt),Vt=new Xf(I,Gt,t,Ot),Tt=new Um(I,Gt),Vt.reverseDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),ce=new tp(I),Et=new xm,w=new Nm(I,Gt,Tt,Et,Vt,Ot,ce),_=new Yf(v),F=new Kf(v),Y=new au(I),se=new Vf(I,Y),j=new Jf(I,Y,ce,se),W=new np(I,j,Y,ce),Rt=new ep(I,Vt,w),Q=new qf(Et),Mt=new _m(v,_,F,Gt,Vt,se,Q),at=new Wm(v,Et),ut=new Mm,Yt=new Am(Gt),At=new Gf(v,_,F,Tt,W,f,c),dt=new Lm(v,W,Vt),C=new Xm(I,ce,Vt,Tt),ft=new Wf(I,Gt,ce),Wt=new Qf(I,Gt,ce),ce.programs=Mt.programs,v.capabilities=Vt,v.extensions=Gt,v.properties=Et,v.renderLists=ut,v.shadowMap=dt,v.state=Tt,v.info=ce}it();const z=new Gm(v,I);this.xr=z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(S){S!==void 0&&(H=S,this.setSize(q,J,!1))},this.getSize=function(S){return S.set(q,J)},this.setSize=function(S,L,O=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,J=L,e.width=Math.floor(S*H),e.height=Math.floor(L*H),O===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(q*H,J*H).floor()},this.setDrawingBufferSize=function(S,L,O){q=S,J=L,H=O,e.width=Math.floor(S*O),e.height=Math.floor(L*O),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,L,O,B){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,L,O,B),Tt.viewport(R.copy(St).multiplyScalar(H).round())},this.getScissor=function(S){return S.copy(kt)},this.setScissor=function(S,L,O,B){S.isVector4?kt.set(S.x,S.y,S.z,S.w):kt.set(S,L,O,B),Tt.scissor(G.copy(kt).multiplyScalar(H).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(S){Tt.setScissorTest(ie=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){ht=S},this.getClearColor=function(S){return S.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(S=!0,L=!0,O=!0){let B=0;if(S){let D=!1;if(P!==null){const tt=P.texture.format;D=tt===Ka||tt===Za||tt===$a}if(D){const tt=P.texture.type,ct=tt===kn||tt===vi||tt===ps||tt===$i||tt===Xa||tt===qa,mt=At.getClearColor(),gt=At.getClearAlpha(),Ct=mt.r,Nt=mt.g,_t=mt.b;ct?(g[0]=Ct,g[1]=Nt,g[2]=_t,g[3]=gt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=Ct,x[1]=Nt,x[2]=_t,x[3]=gt,I.clearBufferiv(I.COLOR,0,x))}else B|=I.COLOR_BUFFER_BIT}L&&(B|=I.DEPTH_BUFFER_BIT),O&&(B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Yt.dispose(),Et.dispose(),_.dispose(),F.dispose(),W.dispose(),se.dispose(),C.dispose(),Mt.dispose(),z.dispose(),z.removeEventListener("sessionstart",so),z.removeEventListener("sessionend",ro),si.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=ce.autoReset,L=dt.enabled,O=dt.autoUpdate,B=dt.needsUpdate,D=dt.type;it(),ce.autoReset=S,dt.enabled=L,dt.autoUpdate=O,dt.needsUpdate=B,dt.type=D}function ot(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function It(S){const L=S.target;L.removeEventListener("dispose",It),fe(L)}function fe(S){Re(S),Et.remove(S)}function Re(S){const L=Et.get(S).programs;L!==void 0&&(L.forEach(function(O){Mt.releaseProgram(O)}),S.isShaderMaterial&&Mt.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,O,B,D,tt){L===null&&(L=ue);const ct=D.isMesh&&D.matrixWorld.determinant()<0,mt=gl(S,L,O,B,D);Tt.setMaterial(B,ct);let gt=O.index,Ct=1;if(B.wireframe===!0){if(gt=j.getWireframeAttribute(O),gt===void 0)return;Ct=2}const Nt=O.drawRange,_t=O.attributes.position;let jt=Nt.start*Ct,re=(Nt.start+Nt.count)*Ct;tt!==null&&(jt=Math.max(jt,tt.start*Ct),re=Math.min(re,(tt.start+tt.count)*Ct)),gt!==null?(jt=Math.max(jt,0),re=Math.min(re,gt.count)):_t!=null&&(jt=Math.max(jt,0),re=Math.min(re,_t.count));const le=re-jt;if(le<0||le===1/0)return;se.setup(D,B,mt,O,gt);let Oe,Qt=ft;if(gt!==null&&(Oe=Y.get(gt),Qt=Wt,Qt.setIndex(Oe)),D.isMesh)B.wireframe===!0?(Tt.setLineWidth(B.wireframeLinewidth*me()),Qt.setMode(I.LINES)):Qt.setMode(I.TRIANGLES);else if(D.isLine){let yt=B.linewidth;yt===void 0&&(yt=1),Tt.setLineWidth(yt*me()),D.isLineSegments?Qt.setMode(I.LINES):D.isLineLoop?Qt.setMode(I.LINE_LOOP):Qt.setMode(I.LINE_STRIP)}else D.isPoints?Qt.setMode(I.POINTS):D.isSprite&&Qt.setMode(I.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Qt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const yt=D._multiDrawStarts,Tn=D._multiDrawCounts,te=D._multiDrawCount,en=gt?Y.get(gt).bytesPerElement:1,Si=Et.get(B).currentProgram.getUniforms();for(let Ve=0;Ve<te;Ve++)Si.setValue(I,"_gl_DrawID",Ve),Qt.render(yt[Ve]/en,Tn[Ve])}else if(D.isInstancedMesh)Qt.renderInstances(jt,le,D.count);else if(O.isInstancedBufferGeometry){const yt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Tn=Math.min(O.instanceCount,yt);Qt.renderInstances(jt,le,Tn)}else Qt.render(jt,le)};function ee(S,L,O){S.transparent===!0&&S.side===Nn&&S.forceSinglePass===!1?(S.side=He,S.needsUpdate=!0,ys(S,L,O),S.side=ni,S.needsUpdate=!0,ys(S,L,O),S.side=Nn):ys(S,L,O)}this.compile=function(S,L,O=null){O===null&&(O=S),p=Yt.get(O),p.init(L),E.push(p),O.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),S!==O&&S.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const B=new Set;return S.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const tt=D.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];ee(mt,O,D),B.add(mt)}else ee(tt,O,D),B.add(tt)}),E.pop(),p=null,B},this.compileAsync=function(S,L,O=null){const B=this.compile(S,L,O);return new Promise(D=>{function tt(){if(B.forEach(function(ct){Et.get(ct).currentProgram.isReady()&&B.delete(ct)}),B.size===0){D(S);return}setTimeout(tt,10)}Gt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let tn=null;function En(S){tn&&tn(S)}function so(){si.stop()}function ro(){si.start()}const si=new ol;si.setAnimationLoop(En),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(S){tn=S,z.setAnimationLoop(S),S===null?si.stop():si.start()},z.addEventListener("sessionstart",so),z.addEventListener("sessionend",ro),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(L),L=z.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,L,P),p=Yt.get(S,E.length),p.init(L),E.push(p),bt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),X.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,vt),m=ut.get(S,T.length),m.init(),T.push(m),z.enabled===!0&&z.isPresenting===!0){const tt=v.xr.getDepthSensingMesh();tt!==null&&dr(tt,L,-1/0,v.sortObjects)}dr(S,L,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,ht),qt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,qt&&At.addToRenderList(m,S),this.info.render.frame++,et===!0&&Q.beginShadows();const O=p.state.shadowsArray;dt.render(O,S,L),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,D=m.transmissive;if(p.setupLights(),L.isArrayCamera){const tt=L.cameras;if(D.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){const gt=tt[ct];oo(B,D,S,gt)}qt&&At.render(S);for(let ct=0,mt=tt.length;ct<mt;ct++){const gt=tt[ct];ao(m,S,gt,gt.viewport)}}else D.length>0&&oo(B,D,S,L),qt&&At.render(S),ao(m,S,L);P!==null&&(w.updateMultisampleRenderTarget(P),w.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(v,S,L),se.resetDefaultState(),y=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&Q.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function dr(S,L,O,B){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){B&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(bt);const ct=W.update(S),mt=S.material;mt.visible&&m.push(S,ct,mt,O,zt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const ct=W.update(S),mt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),zt.copy(ct.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const gt=ct.groups;for(let Ct=0,Nt=gt.length;Ct<Nt;Ct++){const _t=gt[Ct],jt=mt[_t.materialIndex];jt&&jt.visible&&m.push(S,ct,jt,O,zt.z,_t)}}else mt.visible&&m.push(S,ct,mt,O,zt.z,null)}}const tt=S.children;for(let ct=0,mt=tt.length;ct<mt;ct++)dr(tt[ct],L,O,B)}function ao(S,L,O,B){const D=S.opaque,tt=S.transmissive,ct=S.transparent;p.setupLightsView(O),et===!0&&Q.setGlobalState(v.clippingPlanes,O),B&&Tt.viewport(R.copy(B)),D.length>0&&Ms(D,L,O),tt.length>0&&Ms(tt,L,O),ct.length>0&&Ms(ct,L,O),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function oo(S,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Mi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?ms:kn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[B.id],ct=B.viewport||R;tt.setSize(ct.z,ct.w);const mt=v.getRenderTarget();v.setRenderTarget(tt),v.getClearColor(Z),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),qt&&At.render(O);const gt=v.toneMapping;v.toneMapping=ei;const Ct=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),et===!0&&Q.setGlobalState(v.clippingPlanes,B),Ms(S,O,B),w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let _t=0,jt=L.length;_t<jt;_t++){const re=L[_t],le=re.object,Oe=re.geometry,Qt=re.material,yt=re.group;if(Qt.side===Nn&&le.layers.test(B.layers)){const Tn=Qt.side;Qt.side=He,Qt.needsUpdate=!0,co(le,O,B,Oe,Qt,yt),Qt.side=Tn,Qt.needsUpdate=!0,Nt=!0}}Nt===!0&&(w.updateMultisampleRenderTarget(tt),w.updateRenderTargetMipmap(tt))}v.setRenderTarget(mt),v.setClearColor(Z,K),Ct!==void 0&&(B.viewport=Ct),v.toneMapping=gt}function Ms(S,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let D=0,tt=S.length;D<tt;D++){const ct=S[D],mt=ct.object,gt=ct.geometry,Ct=B===null?ct.material:B,Nt=ct.group;mt.layers.test(O.layers)&&co(mt,L,O,gt,Ct,Nt)}}function co(S,L,O,B,D,tt){S.onBeforeRender(v,L,O,B,D,tt),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),D.onBeforeRender(v,L,O,B,S,tt),D.transparent===!0&&D.side===Nn&&D.forceSinglePass===!1?(D.side=He,D.needsUpdate=!0,v.renderBufferDirect(O,L,B,D,S,tt),D.side=ni,D.needsUpdate=!0,v.renderBufferDirect(O,L,B,D,S,tt),D.side=Nn):v.renderBufferDirect(O,L,B,D,S,tt),S.onAfterRender(v,L,O,B,D,tt)}function ys(S,L,O){L.isScene!==!0&&(L=ue);const B=Et.get(S),D=p.state.lights,tt=p.state.shadowsArray,ct=D.state.version,mt=Mt.getParameters(S,D.state,tt,L,O),gt=Mt.getProgramCacheKey(mt);let Ct=B.programs;B.environment=S.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(S.isMeshStandardMaterial?F:_).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,Ct===void 0&&(S.addEventListener("dispose",It),Ct=new Map,B.programs=Ct);let Nt=Ct.get(gt);if(Nt!==void 0){if(B.currentProgram===Nt&&B.lightsStateVersion===ct)return ho(S,mt),Nt}else mt.uniforms=Mt.getUniforms(S),S.onBeforeCompile(mt,v),Nt=Mt.acquireProgram(mt,gt),Ct.set(gt,Nt),B.uniforms=mt.uniforms;const _t=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(_t.clippingPlanes=Q.uniform),ho(S,mt),B.needsLights=xl(S),B.lightsStateVersion=ct,B.needsLights&&(_t.ambientLightColor.value=D.state.ambient,_t.lightProbe.value=D.state.probe,_t.directionalLights.value=D.state.directional,_t.directionalLightShadows.value=D.state.directionalShadow,_t.spotLights.value=D.state.spot,_t.spotLightShadows.value=D.state.spotShadow,_t.rectAreaLights.value=D.state.rectArea,_t.ltc_1.value=D.state.rectAreaLTC1,_t.ltc_2.value=D.state.rectAreaLTC2,_t.pointLights.value=D.state.point,_t.pointLightShadows.value=D.state.pointShadow,_t.hemisphereLights.value=D.state.hemi,_t.directionalShadowMap.value=D.state.directionalShadowMap,_t.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_t.spotShadowMap.value=D.state.spotShadowMap,_t.spotLightMatrix.value=D.state.spotLightMatrix,_t.spotLightMap.value=D.state.spotLightMap,_t.pointShadowMap.value=D.state.pointShadowMap,_t.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Nt,B.uniformsList=null,Nt}function lo(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=Js.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function ho(S,L){const O=Et.get(S);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function gl(S,L,O,B,D){L.isScene!==!0&&(L=ue),w.resetTextureUnits();const tt=L.fog,ct=B.isMeshStandardMaterial?L.environment:null,mt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ji,gt=(B.isMeshStandardMaterial?F:_).get(B.envMap||ct),Ct=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Nt=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),_t=!!O.morphAttributes.position,jt=!!O.morphAttributes.normal,re=!!O.morphAttributes.color;let le=ei;B.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=v.toneMapping);const Oe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qt=Oe!==void 0?Oe.length:0,yt=Et.get(B),Tn=p.state.lights;if(et===!0&&(vt===!0||S!==M)){const $e=S===M&&B.id===y;Q.setState(B,S,$e)}let te=!1;B.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Tn.state.version||yt.outputColorSpace!==mt||D.isBatchedMesh&&yt.batching===!1||!D.isBatchedMesh&&yt.batching===!0||D.isBatchedMesh&&yt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&yt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&yt.instancing===!1||!D.isInstancedMesh&&yt.instancing===!0||D.isSkinnedMesh&&yt.skinning===!1||!D.isSkinnedMesh&&yt.skinning===!0||D.isInstancedMesh&&yt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&yt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&yt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&yt.instancingMorph===!1&&D.morphTexture!==null||yt.envMap!==gt||B.fog===!0&&yt.fog!==tt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Q.numPlanes||yt.numIntersection!==Q.numIntersection)||yt.vertexAlphas!==Ct||yt.vertexTangents!==Nt||yt.morphTargets!==_t||yt.morphNormals!==jt||yt.morphColors!==re||yt.toneMapping!==le||yt.morphTargetsCount!==Qt)&&(te=!0):(te=!0,yt.__version=B.version);let en=yt.currentProgram;te===!0&&(en=ys(B,L,D));let Si=!1,Ve=!1,es=!1;const he=en.getUniforms(),un=yt.uniforms;if(Tt.useProgram(en.program)&&(Si=!0,Ve=!0,es=!0),B.id!==y&&(y=B.id,Ve=!0),Si||M!==S){Tt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),Nh(rt),Fh(rt),he.setValue(I,"projectionMatrix",rt)):he.setValue(I,"projectionMatrix",S.projectionMatrix),he.setValue(I,"viewMatrix",S.matrixWorldInverse);const zn=he.map.cameraPosition;zn!==void 0&&zn.setValue(I,Dt.setFromMatrixPosition(S.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&he.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ve=!0,es=!0)}if(D.isSkinnedMesh){he.setOptional(I,D,"bindMatrix"),he.setOptional(I,D,"bindMatrixInverse");const $e=D.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),he.setValue(I,"boneTexture",$e.boneTexture,w))}D.isBatchedMesh&&(he.setOptional(I,D,"batchingTexture"),he.setValue(I,"batchingTexture",D._matricesTexture,w),he.setOptional(I,D,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",D._indirectTexture,w),he.setOptional(I,D,"batchingColorTexture"),D._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",D._colorsTexture,w));const ns=O.morphAttributes;if((ns.position!==void 0||ns.normal!==void 0||ns.color!==void 0)&&Rt.update(D,O,en),(Ve||yt.receiveShadow!==D.receiveShadow)&&(yt.receiveShadow=D.receiveShadow,he.setValue(I,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(un.envMap.value=gt,un.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(un.envMapIntensity.value=L.environmentIntensity),Ve&&(he.setValue(I,"toneMappingExposure",v.toneMappingExposure),yt.needsLights&&_l(un,es),tt&&B.fog===!0&&at.refreshFogUniforms(un,tt),at.refreshMaterialUniforms(un,B,H,J,p.state.transmissionRenderTarget[S.id]),Js.upload(I,lo(yt),un,w)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Js.upload(I,lo(yt),un,w),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&he.setValue(I,"center",D.center),he.setValue(I,"modelViewMatrix",D.modelViewMatrix),he.setValue(I,"normalMatrix",D.normalMatrix),he.setValue(I,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const $e=B.uniformsGroups;for(let zn=0,Hn=$e.length;zn<Hn;zn++){const uo=$e[zn];C.update(uo,en),C.bind(uo,en)}}return en}function _l(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function xl(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,L,O){Et.get(S.texture).__webglTexture=L,Et.get(S.depthTexture).__webglTexture=O;const B=Et.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const O=Et.get(S);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,O=0){P=S,b=L,A=O;let B=!0,D=null,tt=!1,ct=!1;if(S){const gt=Et.get(S);if(gt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(I.FRAMEBUFFER,null),B=!1;else if(gt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(gt.__hasExternalTextures)w.rebindTextures(S,Et.get(S.texture).__webglTexture,Et.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const _t=S.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&Et.has(_t)&&(S.width!==_t.image.width||S.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Ct=S.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ct=!0);const Nt=Et.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[L])?D=Nt[L][O]:D=Nt[L],tt=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?D=Et.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?D=Nt[O]:D=Nt,R.copy(S.viewport),G.copy(S.scissor),k=S.scissorTest}else R.copy(St).multiplyScalar(H).floor(),G.copy(kt).multiplyScalar(H).floor(),k=ie;if(Tt.bindFramebuffer(I.FRAMEBUFFER,D)&&B&&Tt.drawBuffers(S,D),Tt.viewport(R),Tt.scissor(G),Tt.setScissorTest(k),tt){const gt=Et.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,gt.__webglTexture,O)}else if(ct){const gt=Et.get(S.texture),Ct=L||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.__webglTexture,O||0,Ct)}y=-1},this.readRenderTargetPixels=function(S,L,O,B,D,tt,ct){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){Tt.bindFramebuffer(I.FRAMEBUFFER,mt);try{const gt=S.texture,Ct=gt.format,Nt=gt.type;if(!Vt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-B&&O>=0&&O<=S.height-D&&I.readPixels(L,O,B,D,Ot.convert(Ct),Ot.convert(Nt),tt)}finally{const gt=P!==null?Et.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(S,L,O,B,D,tt,ct){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=Et.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ct!==void 0&&(mt=mt[ct]),mt){const gt=S.texture,Ct=gt.format,Nt=gt.type;if(!Vt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=S.width-B&&O>=0&&O<=S.height-D){Tt.bindFramebuffer(I.FRAMEBUFFER,mt);const _t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),I.readPixels(L,O,B,D,Ot.convert(Ct),Ot.convert(Nt),0);const jt=P!==null?Et.get(P).__webglFramebuffer:null;Tt.bindFramebuffer(I.FRAMEBUFFER,jt);const re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ih(I,re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt),I.deleteBuffer(_t),I.deleteSync(re),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,L=null,O=0){S.isTexture!==!0&&(us("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(S.image.width*B),tt=Math.floor(S.image.height*B),ct=L!==null?L.x:0,mt=L!==null?L.y:0;w.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,ct,mt,D,tt),Tt.unbindTexture()},this.copyTextureToTexture=function(S,L,O=null,B=null,D=0){S.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],L=arguments[2],D=arguments[3]||0,O=null);let tt,ct,mt,gt,Ct,Nt,_t,jt,re;const le=S.isCompressedTexture?S.mipmaps[D]:S.image;O!==null?(tt=O.max.x-O.min.x,ct=O.max.y-O.min.y,mt=O.isBox3?O.max.z-O.min.z:1,gt=O.min.x,Ct=O.min.y,Nt=O.isBox3?O.min.z:0):(tt=le.width,ct=le.height,mt=le.depth||1,gt=0,Ct=0,Nt=0),B!==null?(_t=B.x,jt=B.y,re=B.z):(_t=0,jt=0,re=0);const Oe=Ot.convert(L.format),Qt=Ot.convert(L.type);let yt;L.isData3DTexture?(w.setTexture3D(L,0),yt=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(w.setTexture2DArray(L,0),yt=I.TEXTURE_2D_ARRAY):(w.setTexture2D(L,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);const Tn=I.getParameter(I.UNPACK_ROW_LENGTH),te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),Si=I.getParameter(I.UNPACK_SKIP_ROWS),Ve=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ct),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt);const es=S.isDataArrayTexture||S.isData3DTexture,he=L.isDataArrayTexture||L.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const un=Et.get(S),ns=Et.get(L),$e=Et.get(un.__renderTarget),zn=Et.get(ns.__renderTarget);Tt.bindFramebuffer(I.READ_FRAMEBUFFER,$e.__webglFramebuffer),Tt.bindFramebuffer(I.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Hn=0;Hn<mt;Hn++)es&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.get(S).__webglTexture,D,Nt+Hn),S.isDepthTexture?(he&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Et.get(L).__webglTexture,D,re+Hn),I.blitFramebuffer(gt,Ct,tt,ct,_t,jt,tt,ct,I.DEPTH_BUFFER_BIT,I.NEAREST)):he?I.copyTexSubImage3D(yt,D,_t,jt,re+Hn,gt,Ct,tt,ct):I.copyTexSubImage2D(yt,D,_t,jt,re+Hn,gt,Ct,tt,ct);Tt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else he?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(yt,D,_t,jt,re,tt,ct,mt,Oe,Qt,le.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,D,_t,jt,re,tt,ct,mt,Oe,le.data):I.texSubImage3D(yt,D,_t,jt,re,tt,ct,mt,Oe,Qt,le):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,D,_t,jt,tt,ct,Oe,Qt,le.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,D,_t,jt,le.width,le.height,Oe,le.data):I.texSubImage2D(I.TEXTURE_2D,D,_t,jt,tt,ct,Oe,Qt,le);I.pixelStorei(I.UNPACK_ROW_LENGTH,Tn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,Si),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),D===0&&L.generateMipmaps&&I.generateMipmap(yt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(S,L,O=null,B=null,D=0){return S.isTexture!==!0&&(us("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,S=arguments[2],L=arguments[3],D=arguments[4]||0),us('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,L,O,B,D)},this.initRenderTarget=function(S){Et.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),Tt.unbindTexture()},this.resetState=function(){b=0,A=0,P=null,Tt.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}class eo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new eo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ym extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $m extends Ie{constructor(t=null,e=1,n=1,s,r,a,o,c,h=qe,l=qe,u,d){super(null,a,o,c,h,l,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gc extends Qe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Oi=new oe,_c=new oe,Vs=[],xc=new yi,Zm=new oe,ls=new Lt,hs=new xs;class Ba extends Lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Zm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),xc.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union(xc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),hs.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ls.geometry=this.geometry,ls.material=this.material,ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(n),t.ray.intersectsSphere(hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),_c.multiplyMatrices(n,Oi),ls.matrixWorld=_c,ls.raycast(t,Vs);for(let a=0,o=Vs.length;a<o;a++){const c=Vs[a];c.instanceId=r,c.object=this,e.push(c)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new $m(new Float32Array(s*this.count),s,this.count,Ya,vn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Km extends Ie{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Sn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),h(n),l(),this.setAttribute("position",new Ge(r,3)),this.setAttribute("normal",new Ge(r.slice(),3)),this.setAttribute("uv",new Ge(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const E=new N,v=new N,U=new N;for(let b=0;b<e.length;b+=3)f(e[b+0],E),f(e[b+1],v),f(e[b+2],U),c(E,v,U,T)}function c(T,E,v,U){const b=U+1,A=[];for(let P=0;P<=b;P++){A[P]=[];const y=T.clone().lerp(v,P/b),M=E.clone().lerp(v,P/b),R=b-P;for(let G=0;G<=R;G++)G===0&&P===b?A[P][G]=y:A[P][G]=y.clone().lerp(M,G/R)}for(let P=0;P<b;P++)for(let y=0;y<2*(b-P)-1;y++){const M=Math.floor(y/2);y%2===0?(d(A[P][M+1]),d(A[P+1][M]),d(A[P][M])):(d(A[P][M+1]),d(A[P+1][M+1]),d(A[P+1][M]))}}function h(T){const E=new N;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(T),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function l(){const T=new N;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];const v=m(T)/2/Math.PI+.5,U=p(T)/Math.PI+.5;a.push(v,1-U)}g(),u()}function u(){for(let T=0;T<a.length;T+=6){const E=a[T+0],v=a[T+2],U=a[T+4],b=Math.max(E,v,U),A=Math.min(E,v,U);b>.9&&A<.1&&(E<.2&&(a[T+0]+=1),v<.2&&(a[T+2]+=1),U<.2&&(a[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,E){const v=T*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function g(){const T=new N,E=new N,v=new N,U=new N,b=new Xt,A=new Xt,P=new Xt;for(let y=0,M=0;y<r.length;y+=9,M+=6){T.set(r[y+0],r[y+1],r[y+2]),E.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),b.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),P.set(a[M+4],a[M+5]),U.copy(T).add(E).add(v).divideScalar(3);const R=m(U);x(b,M+0,T,R),x(A,M+2,E,R),x(P,M+4,v,R)}}function x(T,E,v,U){U<0&&T.x===1&&(a[E]=T.x-1),v.x===0&&v.z===0&&(a[E]=U/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.vertices,t.indices,t.radius,t.details)}}class no extends ur{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new no(t.radius,t.detail)}}class gi extends ur{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gi(t.radius,t.detail)}}class Ut extends Sn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],u=new N,d=new N,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const T=[],E=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const b=U/e;u.x=-t*Math.cos(s+b*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+b*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+v,1-E),T.push(h++)}l.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){const E=l[p][T+1],v=l[p][T],U=l[p+1][T],b=l[p+1][T+1];(p!==0||a>0)&&f.push(E,v,b),(p!==n-1||c<Math.PI)&&f.push(v,U,b)}this.setIndex(f),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ut(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jt extends vs{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$c,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fl extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class jm extends fl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xr=new oe,vc=new N,Mc=new N;class Jm{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ja,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),Mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mc),e.updateMatrixWorld(),Xr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qm extends Jm{constructor(){super(new Qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends fl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Qm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const yc=new oe;class eg{constructor(t,e,n=0,s=1/0){this.ray=new tl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yc),this}intersectObject(t,e=!0,n=[]){return ka(t,this,n,e),n.sort(Sc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ka(t[s],this,n,e);return n.sort(Sc),n}}function Sc(i,t){return i.distance-t.distance}function ka(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ka(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ga}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ga);function Qn(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Sn;let h=0;for(let l=0;l<i.length;++l){const u=i[l];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,f,l),h+=f}}if(e){let l=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+l);l+=i[d].attributes.position.count}c.setIndex(u)}for(const l in r){const u=Ec(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(const l in a){const u=a[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let d=0;d<u;++d){const f=[];for(let x=0;x<a[l].length;++x)f.push(a[l][x][d]);const g=Ec(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Ec(i){let t,e,n,s=-1,r=0;for(let h=0;h<i.length;++h){const l=i[h];if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=l.normalized),n!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.count*e}const a=new t(r),o=new Qe(a,e,n);let c=0;for(let h=0;h<i.length;++h){const l=i[h];if(l.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=l.count;d<f;d++)for(let g=0;g<e;g++){const x=l.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(l.array,c);c+=l.count*e}return s!==void 0&&(o.gpuType=s),o}const De=new Ae,Tc=new N,fn=new N,gn=16250111,Ee=1775155,Mn=4006994,pl=16739229;function rr(i,t,e,n){const s=new wt(n*1.45,n*.2,n*.38),r=s.clone();r.rotateZ(Math.PI/4),r.translate(i,t,e);const a=s.clone();return a.rotateZ(-Math.PI/4),a.translate(i,t,e),[pt(r,Ee),pt(a,Ee)]}function ng(i,t,e){const n=e*.085,s=new Ut(n*.65,5,4);s.scale(1.5,.45,.7),s.translate(0,i-e*.11,t);const r=new Ut(n*.38,5,4);return r.scale(.9,1.2,.6),r.translate(0,i-e*.18,t+n*.35),[...rr(-e*.12,i,t,n),...rr(e*.12,i,t,n),pt(s,Mn),pt(r,pl)]}function ig(i,t,e){const n=e*.14,s=new wt(n*1.4,n*.32,n*.35);s.translate(0,i-e*.14,t);const r=new wt(n*.55,n*.75,n*.28);return r.translate(0,i-e*.22,t+n*.22),[...rr(-e*.13,i,t,n*.72),...rr(e*.13,i,t,n*.72),pt(s,Mn),pt(r,pl)]}function pt(i,t){const e=i.getAttribute("position").count,n=new Float32Array(e*3),s=(t>>16&255)/255,r=(t>>8&255)/255,a=(t&255)/255;for(let o=0;o<e;o++)n[o*3]=s,n[o*3+1]=r,n[o*3+2]=a;return i.setAttribute("color",new Ge(n,3)),i}function sg(i,t,e,n="classic"){const s=e*.085;if(n==="sleepy"){const l=new wt(s*1.6,s*.35,s*.5);l.translate(-e*.12,i,t);const u=new wt(s*1.6,s*.35,s*.5);u.translate(e*.12,i,t);const d=new Ut(s*.45,5,4);return d.scale(1.2,.5,.7),d.translate(0,i-e*.1,t),[pt(l,Ee),pt(u,Ee),pt(d,Mn)]}if(n==="wink"){const l=new wt(s*1.5,s*.35,s*.5);l.translate(-e*.12,i,t);const u=new Ut(s,6,5);u.translate(e*.12,i,t);const d=new Ut(s*.45,5,4);d.translate(e*.12,i,t+s*.7);const f=new Ut(s*.55,5,4);return f.scale(1.4,.55,.7),f.translate(0,i-e*.1,t),[pt(l,Ee),pt(u,gn),pt(d,Ee),pt(f,Mn)]}if(n==="frown"){const l=new Ut(s,6,5);l.translate(-e*.12,i,t);const u=new Ut(s,6,5);u.translate(e*.12,i,t);const d=new Ut(s*.45,5,4);d.translate(-e*.12,i,t+s*.7);const f=new Ut(s*.45,5,4);f.translate(e*.12,i,t+s*.7);const g=new Ut(s*.55,5,4);return g.scale(1.4,-.55,.7),g.translate(0,i-e*.12,t),[pt(l,gn),pt(u,gn),pt(d,Ee),pt(f,Ee),pt(g,Mn)]}const r=new Ut(s,6,5);r.translate(-e*.12,i,t);const a=new Ut(s,6,5);a.translate(e*.12,i,t);const o=new Ut(s*.45,5,4);o.translate(-e*.12,i,t+s*.7);const c=new Ut(s*.45,5,4);c.translate(e*.12,i,t+s*.7);const h=new Ut(s*.55,5,4);return h.scale(1.4,.55,.7),h.translate(0,i-e*.1,t),[pt(r,gn),pt(a,gn),pt(o,Ee),pt(c,Ee),pt(h,Mn)]}function rg(i,t,e,n="classic"){const s=e*.14;if(n==="sleepy"){const l=new wt(s*1.4,s*.3,s*.35);l.translate(-e*.13,i,t);const u=new wt(s*1.4,s*.3,s*.35);u.translate(e*.13,i,t);const d=new wt(s*.9,s*.35,s*.35);return d.translate(0,i-e*.12,t),[pt(l,Ee),pt(u,Ee),pt(d,Mn)]}if(n==="wink"){const l=new wt(s*1.3,s*.3,s*.35);l.translate(-e*.13,i,t);const u=new wt(s,s,s*.45);u.translate(e*.13,i,t);const d=new wt(s*.45,s*.45,s*.3);d.translate(e*.13,i,t+s*.28);const f=new wt(s*1.3,s*.35,s*.35);return f.translate(0,i-e*.12,t),[pt(l,Ee),pt(u,gn),pt(d,Ee),pt(f,Mn)]}if(n==="frown"){const l=new wt(s,s,s*.45);l.translate(-e*.13,i,t);const u=new wt(s,s,s*.45);u.translate(e*.13,i,t);const d=new wt(s*.45,s*.45,s*.3);d.translate(-e*.13,i,t+s*.28);const f=new wt(s*.45,s*.45,s*.3);f.translate(e*.13,i,t+s*.28);const g=new wt(s*1.3,s*.35,s*.35);return g.translate(0,i-e*.14,t),[pt(l,gn),pt(u,gn),pt(d,Ee),pt(f,Ee),pt(g,Mn)]}const r=new wt(s,s,s*.45);r.translate(-e*.13,i,t);const a=new wt(s,s,s*.45);a.translate(e*.13,i,t);const o=new wt(s*.45,s*.45,s*.3);o.translate(-e*.13,i,t+s*.28);const c=new wt(s*.45,s*.45,s*.3);c.translate(e*.13,i,t+s*.28);const h=new wt(s*1.3,s*.35,s*.35);return h.translate(0,i-e*.12,t),[pt(r,gn),pt(a,gn),pt(o,Ee),pt(c,Ee),pt(h,Mn)]}function Wi(i,t,e,n){const s=.4*n,r=.5*n,a=pt(new wt(.032*n,r,.032*n),i);a.translate(s,.06*n+r*.5,.02*n);const o=.06*n+r,c=pt(e?new Ut(.06*n,6,5):new wt(.085*n,.085*n,.085*n),t);return c.translate(s,o,.02*n),[a,c]}function ag(i,t,e,n=!1){const s=n?ng:(c,h,l)=>sg(c,h,l,e);if(i===0){const c=pt(new Ut(.24,10,8),t),h=pt(new Ut(.1,8,6),t);return h.translate(0,.28,0),Qn([c,h,...s(.04,.2,.7)],!1)}if(i===1){const c=pt(new Ut(.28,10,8),t),h=pt(new Ut(.2,8,6),t);h.translate(0,.32,0);const l=Wi(t,16774307,!0,.85);return Qn([c,h,...s(.05,.24,.85),...l],!1)}if(i===2){const c=pt(new Ut(.42,10,8),t),h=pt(new Ut(.16,8,6),t);h.scale(1.6,.7,1),h.translate(0,.05,0);const l=Wi(t,16774307,!0,1.15);return Qn([c,h,...s(.08,.36,1.15),...l],!1)}const r=pt(new Ut(.58,10,8),t),a=pt(new Ut(.38,8,6),t);a.translate(0,.55,0);const o=Wi(t,16774307,!0,1.45);return Qn([r,a,...s(.1,.48,1.45),...o],!1)}function og(i,t,e,n=!1){const s=n?ig:(h,l,u)=>rg(h,l,u,e);if(i===0){const h=pt(new wt(.4,.32,.4),t);return h.translate(0,.16,0),Qn([h,...s(.2,.22,.7)],!1)}if(i===1){const h=pt(new wt(.42,.42,.42),t);h.translate(0,.21,0);const l=pt(new wt(.26,.22,.26),t);l.translate(0,.52,0);const u=Wi(t,16774307,!1,.85);return Qn([h,l,...s(.52,.22,.85),...u],!1)}if(i===2){const h=pt(new wt(.7,.4,.7),t);h.translate(0,.2,0);const l=pt(new wt(.5,.38,.5),t);l.translate(0,.58,0);const u=Wi(t,16774307,!1,1.15);return Qn([h,l,...s(.62,.27,1.15),...u],!1)}const r=pt(new wt(.95,.42,.95),t);r.translate(0,.21,0);const a=pt(new wt(.72,.4,.72),t);a.translate(0,.6,0);const o=pt(new wt(.48,.32,.48),t);o.translate(0,.96,0);const c=Wi(t,16774307,!1,1.4);return Qn([r,a,o,...s(.72,.38,1.4),...c],!1)}function Ws(i,t,e,n,s=!1){const r=[],a=new Jt({color:16777215,vertexColors:!0}),o=new Jt({color:16777215,vertexColors:!0}),c=s?24:fs;for(let h=0;h<2;h++){const l=t[h].main,u=s?"classic":h===e?n:"classic";for(let d=0;d<4;d++){const f=h===0?ag(d,l,u,s):og(d,l,u,s),g=(h===0?a:o).clone(),x=new Ba(f,g,c);x.instanceMatrix.setUsage(Kc),x.count=0,x.frustumCulled=!1,i.add(x),r.push(x)}}return r}function cg(){const i=document.createElement("canvas");i.width=512,i.height=512;const t=i.getContext("2d");t.fillStyle="#3c4a72",t.fillRect(0,0,512,512);for(let n=0;n<40;n++)t.fillStyle=n%2?"#465682":"#354268",t.beginPath(),t.ellipse(Math.random()*512,Math.random()*512,20+Math.random()*50,16+Math.random()*40,0,0,Math.PI*2),t.fill();t.strokeStyle="rgba(255,255,255,0.06)",t.lineWidth=1;for(let n=0;n<=32;n++)t.beginPath(),t.moveTo(n/32*512,0),t.lineTo(n/32*512,512),t.stroke(),t.beginPath(),t.moveTo(0,n/32*512),t.lineTo(512,n/32*512),t.stroke();const e=new Km(i);return e.wrapS=e.wrapT=er,e.repeat.set(5,5),e.anisotropy=4,e.colorSpace=ke,e}class lg{constructor(t,e){V(this,"renderer");V(this,"scene",new Ym);V(this,"camera");V(this,"overlay");V(this,"octx");V(this,"target",new N(-18,0,-18));V(this,"zoom",22);V(this,"panKeys",{x:0,z:0});V(this,"box",null);V(this,"ghost");V(this,"onTap",null);V(this,"onBox",null);V(this,"onWallDrag",null);V(this,"onPlace",null);V(this,"onPocUpgrade",null);V(this,"getMode",()=>"command");V(this,"canPreviewPlace",null);V(this,"unitMesh",[]);V(this,"corpseMesh",[]);V(this,"wallPip");V(this,"wallTet");V(this,"bldGroup",new ki);V(this,"bldVisuals",new Map);V(this,"matchColors",[Fn[0],Fn[1]]);V(this,"playerFace","classic");V(this,"playerFaction",0);V(this,"ray",new eg);V(this,"plane",new jn(new N(0,1,0),0));V(this,"pointers",new Map);V(this,"lastPinch",0);V(this,"lastMid",{x:0,y:0});V(this,"canvas");V(this,"pocUpgradeUi",null);this.canvas=t,this.overlay=e,this.octx=e.getContext("2d"),this.renderer=new qm({canvas:t,antialias:!0,alpha:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setClearColor(Je.bg,1),this.renderer.outputColorSpace=ke,this.scene.fog=new eo(Je.bg,52,110),this.camera=new Qa(-20,20,15,-15,.1,200),this.scene.add(new jm(16769268,2765656,1.05));const n=new tg(16774365,.85);n.position.set(18,28,10),this.scene.add(n);const s=new Lt(new ji(78,78),new Jt({map:cg()}));s.rotation.x=-Math.PI/2,this.scene.add(s);const r=new Lt(new ji(86,86),new sr({color:2366528}));r.rotation.x=-Math.PI/2,r.position.y=-.08,this.scene.add(r),this.scene.add(this.bldGroup),this.unitMesh=Ws(this.scene,this.matchColors,this.playerFaction,this.playerFace),this.corpseMesh=Ws(this.scene,this.matchColors,this.playerFaction,this.playerFace,!0),this.wallPip=new Ba(new Ut(.62,10,8),new Jt({color:this.matchColors[0].main}),fo),this.wallTet=new Ba(new wt(1.15,.9,1.15),new Jt({color:this.matchColors[1].main}),fo);for(const a of[this.wallPip,this.wallTet])a.instanceMatrix.setUsage(Kc),a.count=0,a.frustumCulled=!1,this.scene.add(a);this.ghost=new Lt(new wt(1.2,.4,1.2),new sr({color:51283,transparent:!0,opacity:.45})),this.ghost.visible=!1,this.scene.add(this.ghost),this.bindInput(),this.resize()}lookAtFaction(t){const e=Rl[t],[n,s]=di(e.x,e.z,7);this.target.set(n,0,s)}applyMatchSetup(t){this.matchColors=Uc(t),this.playerFace=t.face,this.playerFaction=t.faction;for(const e of this.unitMesh)this.scene.remove(e),e.geometry.dispose(),e.material.dispose();for(const e of this.corpseMesh)this.scene.remove(e),e.geometry.dispose(),e.material.dispose();this.unitMesh=Ws(this.scene,this.matchColors,this.playerFaction,this.playerFace),this.corpseMesh=Ws(this.scene,this.matchColors,this.playerFaction,this.playerFace,!0),this.wallPip.material.color.set(this.matchColors[0].main),this.wallTet.material.color.set(this.matchColors[1].main);for(const[e,n]of this.bldVisuals)this.bldGroup.remove(n),this.bldVisuals.delete(e)}lookAtPoint(t,e){this.target.set(t,0,e),this.target.x=Math.max(-de,Math.min(de,this.target.x)),this.target.z=Math.max(-de,Math.min(de,this.target.z))}resize(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e,!1),this.overlay.width=t*devicePixelRatio,this.overlay.height=e*devicePixelRatio,this.overlay.style.width=`${t}px`,this.overlay.style.height=`${e}px`,this.updateCamera()}updateCamera(){const t=innerWidth,e=innerHeight,n=t/Math.max(1,e),s=this.zoom;this.camera.left=-s*n,this.camera.right=s*n,this.camera.top=s,this.camera.bottom=-s,this.camera.position.set(this.target.x+16,20,this.target.z+16),this.camera.lookAt(this.target),this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld()}projectClient(t,e,n){return fn.set(t,e,n).project(this.camera),{sx:(fn.x*.5+.5)*innerWidth,sy:(-fn.y*.5+.5)*innerHeight,hide:fn.z>1||fn.z<-1}}worldFromClient(t,e){const n=this.canvas.getBoundingClientRect(),s=new Xt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);return this.ray.setFromCamera(s,this.camera),this.ray.ray.intersectPlane(this.plane,Tc)?Tc.clone():null}bindInput(){const t=this.canvas;t.addEventListener("contextmenu",e=>e.preventDefault()),t.addEventListener("pointerdown",e=>{if(t.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,button:e.button}),this.pointers.size===2){const n=[...this.pointers.values()];this.lastPinch=Math.hypot(n[0].x-n[1].x,n[0].y-n[1].y),this.lastMid={x:(n[0].x+n[1].x)/2,y:(n[0].y+n[1].y)/2}}}),t.addEventListener("pointermove",e=>{const n=this.pointers.get(e.pointerId);if(!n){this.updateGhost(e.clientX,e.clientY);return}const s=e.clientX-n.x,r=e.clientY-n.y;if(n.x=e.clientX,n.y=e.clientY,this.pointers.size===2){const l=[...this.pointers.values()],u=Math.hypot(l[0].x-l[1].x,l[0].y-l[1].y),d={x:(l[0].x+l[1].x)/2,y:(l[0].y+l[1].y)/2};if(this.lastPinch>0){const f=u/this.lastPinch;this.zoom=Math.max(8,Math.min(34,this.zoom/f))}this.panPixels(d.x-this.lastMid.x,d.y-this.lastMid.y),this.lastPinch=u,this.lastMid=d;return}const a=this.getMode(),o=e.pointerType==="touch",c=n.button===1||n.button===2||o&&a==="command",h=Math.hypot(n.x-n.sx,n.y-n.sy);if(c&&h>4){this.panPixels(s,r);return}!o&&n.button===0&&a==="command"&&h>10&&(this.box={x0:n.sx,y0:n.sy,x1:n.x,y1:n.y}),a==="wall"&&h>6&&this.updateGhost(e.clientX,e.clientY)}),t.addEventListener("pointerup",e=>{var o,c,h,l,u,d;const n=this.pointers.get(e.pointerId);if(this.pointers.delete(e.pointerId),!n)return;const s=this.getMode(),r=Math.hypot(n.x-n.sx,n.y-n.sy),a=e.pointerType==="touch";if(this.box&&!a){const f=this.box;this.box=null,(o=this.onBox)==null||o.call(this,f.x0,f.y0,f.x1,f.y1);return}if(s==="wall"&&r>12){const f=this.sampleDrag(n.sx,n.sy,n.x,n.y);(c=this.onWallDrag)==null||c.call(this,f),this.ghost.visible=!1;return}if(r<14){const f=this.hitPocUpgrade(n.x,n.y);if(f){(h=this.onPocUpgrade)==null||h.call(this,f);return}const g=this.worldFromClient(n.sx,n.sy);if(!g)return;s==="tower"||s==="barracks"?(l=this.onPlace)==null||l.call(this,g.x,g.z):s==="wall"?(u=this.onWallDrag)==null||u.call(this,[{x:g.x,z:g.z}]):(d=this.onTap)==null||d.call(this,g.x,g.z,e.shiftKey)}}),t.addEventListener("pointercancel",e=>this.pointers.delete(e.pointerId)),t.addEventListener("wheel",e=>{e.preventDefault();const n=Math.exp(e.deltaY*.0012);this.zoom=Math.max(8,Math.min(34,this.zoom*n))},{passive:!1}),window.addEventListener("keydown",e=>{(e.key==="a"||e.key==="ArrowLeft")&&(this.panKeys.x=-1),(e.key==="d"||e.key==="ArrowRight")&&(this.panKeys.x=1),(e.key==="w"||e.key==="ArrowUp")&&(this.panKeys.z=-1),(e.key==="s"||e.key==="ArrowDown")&&(this.panKeys.z=1)}),window.addEventListener("keyup",e=>{(e.key==="a"||e.key==="ArrowLeft"||e.key==="d"||e.key==="ArrowRight")&&(this.panKeys.x=0),(e.key==="w"||e.key==="ArrowUp"||e.key==="s"||e.key==="ArrowDown")&&(this.panKeys.z=0)})}panPixels(t,e){const n=this.zoom*.0048;this.target.x+=(t+e)*n,this.target.z+=(-t+e)*n,this.target.x=Math.max(-de,Math.min(de,this.target.x)),this.target.z=Math.max(-de,Math.min(de,this.target.z))}sampleDrag(t,e,n,s){const r=Math.max(2,Math.ceil(Math.hypot(n-t,s-e)/18)),a=[];for(let o=0;o<=r;o++){const c=o/r,h=this.worldFromClient(t+(n-t)*c,e+(s-e)*c);h&&a.push({x:h.x,z:h.z})}return a}updateGhost(t,e){var o;const n=this.getMode(),s=this.worldFromClient(t,e);if(!s||n!=="wall"&&n!=="tower"&&n!=="barracks"){this.ghost.visible=!1;return}this.ghost.visible=!0;const r=n==="barracks"?2.2:n==="tower"?1.4:1.15;this.ghost.scale.set(r,1,r),this.ghost.position.set(s.x,.5,s.z);const a=((o=this.canPreviewPlace)==null?void 0:o.call(this,s.x,s.z,n))??!0;this.ghost.material.color.set(a?n==="wall"?10154239:51283:16730730)}syncBuilding(t){let e=this.bldVisuals.get(t.id);e&&(e.userData.owner!==t.owner||t.kind===Ht&&(e.userData.pocUpgrade!==t.pocUpgrade||e.userData.pocRole!==t.pocRole))&&(this.bldGroup.remove(e),this.bldVisuals.delete(t.id),e=void 0),e||(e=this.makeBuildingMesh(t),e.userData.owner=t.owner,this.bldVisuals.set(t.id,e),this.bldGroup.add(e)),e.position.set(t.x,0,t.z),e.rotation.y=t.yaw;const n=t.owner===0?this.matchColors[0].main:t.owner===1?this.matchColors[1].main:t.kind===In?Je.crystal:Je.neutral;e.traverse(s=>{const r=s;if(!r.isMesh)return;const a=r.material;if(!a||Array.isArray(a)||!("color"in a))return;const o=t.owner===0?this.matchColors[0]:t.owner===1?this.matchColors[1]:null,c=r.name==="crown"?(o==null?void 0:o.accent)??10134468:n;a.color.set(c)})}makeBuildingMesh(t){const e=new ki,n=this.matchColors[0],s=this.matchColors[1],r=t.owner===0?n.main:t.owner===1?s.main:Je.neutral;if(t.kind===$t)if(t.owner===1){const a=new Lt(new wt(3.2,1.1,3.2),new Jt({color:r}));a.position.y=.55;const o=new Lt(new wt(2.2,1,2.2),new Jt({color:s.accent}));o.position.y=1.55;const c=new Lt(new wt(1.3,1.3,1.3),new Jt({color:s.main}));c.name="crown",c.position.y=2.45,e.add(a,o,c)}else if(t.owner===0){const a=new Lt(new Ut(1.7,12,10),new Jt({color:r}));a.position.y=1.1;const o=new Lt(new Ut(1.15,10,8),new Jt({color:n.accent}));o.position.y=2.15;const c=new Lt(new Ut(.7,10,8),new Jt({color:n.main}));c.name="crown",c.position.y=3.05,e.add(a,o,c)}else{const a=new Lt(new Ut(1.7,10,8),new Jt({color:7041940}));a.scale.set(1,.28,1),a.position.y=.28;const o=new Lt(new Ut(.45,8,6),new Jt({color:10134468}));o.name="crown",o.position.y=.9,e.add(a,o)}else if(t.kind===Se)if(t.owner===1){const a=new Lt(new wt(2.4,.9,2),new Jt({color:r}));a.position.y=.45;const o=new Lt(new wt(1.4,.7,1.2),new Jt({color:s.accent}));o.position.y=1.15,e.add(a,o)}else{const a=new Jt({color:r}),o=.78,c=.62,h=new Lt(new Ut(o,10,8),a);h.position.set(-.52,c,.28);const l=new Lt(new Ut(o,10,8),a);l.position.set(.52,c,.28);const u=new Lt(new Ut(o,10,8),a);u.position.set(0,c,-.46);const d=new Lt(new Ut(.64,10,8),new Jt({color:n.accent}));d.position.y=1.44,e.add(h,l,u,d)}else if(t.kind===Ln)if(t.owner===1){const a=new Lt(new wt(.7,2,.7),new Jt({color:r}));a.position.y=1;const o=new Lt(new wt(1.05,.7,1.05),new Jt({color:16774307}));o.position.y=2.2,e.add(a,o)}else{const a=new Lt(new Ut(.42,8,6),new Jt({color:r}));a.position.y=.4;const o=new Lt(new Ut(.38,8,6),new Jt({color:r}));o.position.y=1.05;const c=new Lt(new Ut(.48,8,6),new Jt({color:16774307}));c.position.y=1.7,e.add(a,o,c)}else if(t.kind===Ht){const a=t.pocRole==="eco",o=new Jt({color:a?2371656:2765656});let c;if(t.owner===1?(c=new Lt(new wt(a?2:2.4,a?.22:.28,a?2:2.4),o),c.position.y=a?.11:.14):(c=new Lt(new Ut(a?1.15:1.35,10,8),o),c.scale.set(1,a?.12:.16,1),c.position.y=a?.11:.14),a){const h=new Lt(new gi(.42,0),new Jt({color:Je.crystal,emissive:1721429,emissiveIntensity:.35}));h.name="gem",h.position.y=.72;const l=new Lt(new gi(.22,0),new Jt({color:15269887}));l.position.set(.28,.48,.12),e.add(c,h,l)}else{const h=t.owner===1?new Lt(new wt(1.1,1.1,1.1),new Jt({color:r})):new Lt(new Ut(t.owner===0?.75:.55,10,8),new Jt({color:t.owner===0?r:10134468}));if(h.position.y=1.05,h.name="gem",e.add(c,h),t.pocUpgrade==="star"){const l=new Lt(new gi(.38,0),new Jt({color:16774307,emissive:16766464,emissiveIntensity:.4}));l.name="moneyStar",l.position.y=2.2,e.add(l)}}e.userData.pocUpgrade=t.pocUpgrade,e.userData.pocRole=t.pocRole}else if(t.kind===In){const a=new Lt(new gi(.7),new Jt({color:Je.crystal,emissive:1721429,emissiveIntensity:.4}));a.position.y=.7;const o=new Lt(new gi(.4),new Jt({color:15269887}));o.position.set(.45,.45,.2),e.add(a,o)}else if(t.kind===on){const a=new Lt(new no(.95,0),new Jt({color:Je.rock}));a.position.y=.5,a.scale.set(1.1,.8,.95),e.add(a)}return e.userData.id=t.id,e}render(t,e){const n=e*18;this.target.x+=(this.panKeys.x+this.panKeys.z)*n,this.target.z+=(-this.panKeys.x+this.panKeys.z)*n,this.target.x=Math.max(-de,Math.min(de,this.target.x)),this.target.z=Math.max(-de,Math.min(de,this.target.z)),this.updateCamera();const s=new Array(8).fill(0),r=t.time;for(let l=0;l<fs;l++){if(!t.alive[l])continue;const u=t.faction[l]*4+t.kind[l],d=this.unitMesh[u],f=s[u]++,g=hg(t,l,r),x=ug(t.atkAnim[l],t.yaw[l]);De.position.set(t.x[l]+x.xOff,wc[t.kind[l]]+g.yOff+x.yOff,t.z[l]+x.zOff),De.rotation.set(g.tiltX+x.tiltX,t.yaw[l],g.tiltZ+x.tiltZ);const m=t.selected[l]?1.08+Math.sin(t.time*8)*.04:1;De.scale.set(m*g.sx*x.sx,m*g.sy*x.sy,m*g.sz*x.sz),De.updateMatrix(),d.setMatrixAt(f,De.matrix)}for(let l=0;l<8;l++)this.unitMesh[l].count=s[l],this.unitMesh[l].instanceMatrix.needsUpdate=!0;const a=new Array(8).fill(0);for(const l of t.corpses){const u=l.faction*4+l.kind,d=this.corpseMesh[u],f=a[u]++,g=dg(l);De.position.set(l.x,wc[l.kind]*.22+g.yOff,l.z),De.rotation.set(g.tiltX,l.yaw,g.tiltZ),De.scale.set(g.sx,g.sy,g.sz),De.updateMatrix(),d.setMatrixAt(f,De.matrix)}for(let l=0;l<8;l++)this.corpseMesh[l].count=a[l],this.corpseMesh[l].instanceMatrix.needsUpdate=!0;let o=0,c=0;const h=new Set;for(const l of t.buildings)if(h.add(l.id),l.kind===je)De.position.set(l.x,l.owner===1?.45:.55,l.z),De.rotation.set(0,0,0),De.scale.set(1,1,1),De.updateMatrix(),l.owner===1?this.wallTet.setMatrixAt(c++,De.matrix):this.wallPip.setMatrixAt(o++,De.matrix);else{this.syncBuilding(l);const u=this.bldVisuals.get(l.id);if(u&&l.kind===Ht){const d=u.getObjectByName("gem");d&&(d.rotation.y+=e*1.4);const f=u.getObjectByName("moneyStar");f&&(f.rotation.y+=e*3.6,f.position.y=2.2+Math.sin(r*4+l.id)*.08)}}this.wallPip.count=o,this.wallTet.count=c,this.wallPip.instanceMatrix.needsUpdate=!0,this.wallTet.instanceMatrix.needsUpdate=!0;for(const[l,u]of this.bldVisuals)h.has(l)||(this.bldGroup.remove(u),this.bldVisuals.delete(l));this.renderer.render(this.scene,this.camera),this.drawOverlay(t)}drawOverlay(t){const e=this.octx,n=this.overlay.width,s=this.overlay.height;e.clearRect(0,0,n,s);const r=devicePixelRatio,a=(c,h,l)=>{fn.set(c,h,l).project(this.camera);const u=(fn.x*.5+.5)*n,d=(-fn.y*.5+.5)*s;return[u,d,fn.z>1||fn.z<-1]},o=this.getMode();(o==="wall"||o==="tower"||o==="barracks")&&this.drawBuildZones(t,a,r);for(let c=0;c<fs;c++){if(!t.alive[c])continue;const h=!!t.selected[c]&&t.kind[c]!==ae;if(!h&&t.hp[c]>=t.maxHp[c]*.98)continue;if(h){const g=Ue[t.kind[c]].radius+.32,[x,m,p]=a(t.x[c],.05,t.z[c]);if(!p){const[T,E]=a(t.x[c]+g,.05,t.z[c]),[v,U]=a(t.x[c],.05,t.z[c]+g),b=Math.max(9*r,Math.hypot(T-x,E-m)),A=Math.max(7*r,Math.hypot(v-x,U-m));e.strokeStyle="#fff4a3",e.lineWidth=2.4*r,e.beginPath(),e.ellipse(x,m,b,A,0,0,Math.PI*2),e.stroke()}}const[l,u,d]=a(t.x[c],1.35,t.z[c]);if(d)continue;const f=28*r;e.fillStyle="rgba(20,16,40,0.55)",e.fillRect(l-f/2,u-8*r,f,5*r),e.fillStyle=t.faction[c]===0?this.matchColors[0].mainHex:this.matchColors[1].mainHex,e.fillRect(l-f/2,u-8*r,f*(t.hp[c]/t.maxHp[c]),5*r)}if(t.selectedBuilding>=0){const c=t.buildings.find(h=>h.id===t.selectedBuilding);if(c){const h=c.radius+.45,[l,u,d]=a(c.x,.05,c.z);if(!d){const[f,g]=a(c.x+h,.05,c.z),[x,m]=a(c.x,.05,c.z+h);e.strokeStyle="#fff4a3",e.lineWidth=2.4*r,e.beginPath(),e.ellipse(l,u,Math.max(12*r,Math.hypot(f-l,g-u)),Math.max(10*r,Math.hypot(x-l,m-u)),0,0,Math.PI*2),e.stroke()}}}for(const c of t.buildings){if(c.kind===on||c.kind===In||c.kind===je)continue;const[h,l,u]=a(c.x,2.4,c.z);if(u)continue;const d=44*r;e.fillStyle="rgba(20,16,40,0.55)",e.fillRect(h-d/2,l,d,6*r);const f=c.owner===0?this.matchColors[0].mainHex:c.owner===1?this.matchColors[1].mainHex:"#c9d4ee";e.fillStyle=f,e.fillRect(h-d/2,l,d*(c.hp/c.maxHp),6*r),(c.kind===Ht||c.kind===$t||c.kind===Se)&&(e.fillStyle="rgba(20,16,40,0.45)",e.fillRect(h-d/2,l+8*r,d,4*r),e.fillStyle=f,e.fillRect(h-d/2,l+8*r,d*(c.progress/100),4*r))}if(this.box){e.strokeStyle="rgba(255,244,163,0.9)",e.fillStyle="rgba(255,244,163,0.12)",e.lineWidth=2*r;const c=Math.min(this.box.x0,this.box.x1)*r,h=Math.min(this.box.y0,this.box.y1)*r,l=Math.abs(this.box.x1-this.box.x0)*r,u=Math.abs(this.box.y1-this.box.y0)*r;e.fillRect(c,h,l,u),e.strokeRect(c,h,l,u)}this.drawBeams(t.beams,a,r),this.drawPocUpgradeUi(t,r),this.drawMinimap(t,n,r)}hitPocUpgrade(t,e){const n=this.pocUpgradeUi;if(!n)return null;for(const s of["star","defenders"]){const r=n[s];if(t>=r.x&&t<=r.x+r.w&&e>=r.y&&e<=r.y+r.h)return s}return null}drawPocUpgradeUi(t,e){this.pocUpgradeUi=null;const n=t.selectedBuildingRecord();if(!n||!t.canPickPocUpgrade(n))return;const s=this.projectClient(n.x,3.35,n.z);if(s.hide)return;const r=this.octx,a=6,o=Math.max(78,Math.min(96,innerWidth*.22)),c=38,h=[{key:"star",title:"★ Star",sub:"+income"},{key:"defenders",title:"🛡 Squad",sub:"6 guards"}],l=o*2+a,u=s.sx-l/2,d=s.sy-c-14,f={star:{x:0,y:0,w:0,h:0},defenders:{x:0,y:0,w:0,h:0}};h.forEach((g,x)=>{const m=u+x*(o+a),p=d;f[g.key]={x:m,y:p,w:o,h:c};const T=m*e,E=p*e,v=o*e,U=c*e,b=14*e;r.fillStyle="rgba(20,16,40,0.72)",r.strokeStyle="#fff4a3",r.lineWidth=2*e,Ac(r,T,E,v,U,b),r.fill(),r.stroke(),r.fillStyle="#fff7fb",r.font=`800 ${12*e}px Nunito, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.fillText(g.title,T+v/2,E+U*.38),r.fillStyle="rgba(255,247,251,0.78)",r.font=`700 ${9.5*e}px Nunito, sans-serif`,r.fillText(g.sub,T+v/2,E+U*.72)}),this.pocUpgradeUi=f}drawBuildZones(t,e,n){const s=this.octx,r=this.matchColors[t.player].main,a=r>>16&255,o=r>>8&255,c=r&255;for(const h of t.buildZoneSites(t.player)){const[l,u,d]=e(h.x,.05,h.z);if(d)continue;const[f,g]=e(h.x+Yr,.05,h.z),[x,m]=e(h.x,.05,h.z+Yr),p=Math.max(14*n,Math.hypot(f-l,g-u)),T=Math.max(12*n,Math.hypot(x-l,m-u));s.fillStyle=`rgba(${a},${o},${c},0.10)`,s.strokeStyle=`rgba(${a},${o},${c},0.58)`,s.lineWidth=2*n,s.setLineDash([7*n,5*n]),s.beginPath(),s.ellipse(l,u,p,T,0,0,Math.PI*2),s.fill(),s.stroke(),s.setLineDash([])}}drawBeams(t,e,n){for(const s of t){const[r,a,o]=e(s.x0,s.y0,s.z0),[c,h,l]=e(s.x1,s.y1,s.z1);if(o&&l)continue;const u=Math.min(1,s.t/Pc),d=s.owner===0?this.matchColors[0].main:this.matchColors[1].main,f=(d>>16&255)/255,g=(d>>8&255)/255,x=(d&255)/255,m=.25+u*.55;this.octx.lineCap="round",this.octx.strokeStyle=`rgba(${Math.round(f*255)},${Math.round(g*255)},${Math.round(x*255)},${m})`,this.octx.lineWidth=(3+u*2.5)*n,this.octx.beginPath(),this.octx.moveTo(r,a),this.octx.lineTo(c,h),this.octx.stroke(),this.octx.strokeStyle=`rgba(255,255,255,${.35+u*.55})`,this.octx.lineWidth=(1.2+u*.8)*n,this.octx.beginPath(),this.octx.moveTo(r,a),this.octx.lineTo(c,h),this.octx.stroke(),this.octx.fillStyle=`rgba(255,255,255,${u*.9})`,this.octx.beginPath(),this.octx.arc(c,h,3.5*n,0,Math.PI*2),this.octx.fill()}}drawMinimap(t,e,n){const s=108*n,r=108*n,a=e-s-14*n,o=86*n;Ac(this.octx,a,o,s,r,12*n),this.octx.fillStyle="rgba(22,18,42,0.72)",this.octx.fill();const c=de*2,h=u=>a+(u+de)/c*s,l=u=>o+(u+de)/c*r;for(const u of t.buildings){this.octx.fillStyle=u.kind===In?"#9af0ff":u.kind===on?"#6b7394":u.owner===0?this.matchColors[0].mainHex:u.owner===1?this.matchColors[1].mainHex:"#c9d4ee";const d=u.kind===$t?5*n:3.2*n;this.octx.fillRect(h(u.x)-d/2,l(u.z)-d/2,d,d)}this.octx.strokeStyle="#fff4a3",this.octx.lineWidth=2*n,this.octx.strokeRect(h(this.target.x)-8*n,l(this.target.z)-6*n,16*n,12*n)}}const wc=[.24,.28,.42,.5];function hg(i,t,e){const n=Math.hypot(i.vx[t],i.vz[t]),s=i.task[t],r=i.kind[t]===ae,a=e*8.5+t*1.31;if(r&&(s===Kn||s===Ke)&&n<.55){const c=Math.sin(a*.85),l=(c*.5+.5)*.07,u=1+c*.08,d=1+(1-u)*.45;return{yOff:l,sx:d,sy:u,sz:d,tiltX:c*.05,tiltZ:Math.sin(a*1.3)*.04}}if(n>.45||s===pn||s===Dn||s===Kn&&n>=.55){const c=Math.abs(Math.sin(a)),h=c*.09,l=1-c*.14,u=1+c*.1;return{yOff:h,sx:u,sy:l,sz:u,tiltX:Math.sin(a*1.4)*.07,tiltZ:Math.cos(a*1.1)*.06}}return{yOff:0,sx:1,sy:1,sz:1,tiltX:0,tiltZ:0}}function ug(i,t){if(i<=0)return{xOff:0,yOff:0,zOff:0,sx:1,sy:1,sz:1,tiltX:0,tiltZ:0};const e=1-i/$r,n=e<.38?Math.sin(e/.38*Math.PI*.5):Math.sin((1-e)/.62*Math.PI*.5)*(1-(e-.38)/.62),s=n*.28,r=1+n*.2,a=1-n*.14;return{xOff:Math.sin(t)*s,yOff:n*.04,zOff:Math.cos(t)*s,sx:r,sy:a,sz:r,tiltX:-n*.22,tiltZ:n*.72}}function dg(i){const t=Math.min(1,i.t/.35),e=Math.sin(i.t*9)*t*.04;return{yOff:e,sx:1.08+e*.5,sy:.32,sz:1.08+e*.5,tiltX:.55+e,tiltZ:e*.6}}function Ac(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}Fl();const fg=document.getElementById("game"),pg=document.getElementById("overlay"),we=new kl;let xt=new Fc(0),be=!1,Te=!1,bc=performance.now(),ar=!1,io=tr(0),Fe;function Rc(i){io={...i},Fe.applyMatchSetup(i),Ol(i),xt=new Fc(i.faction),Fe.lookAtFaction(i.faction),be=!0,Te=!1,ar=!1,we.closeSheet(),we.setScreen("hud"),we.setMode("command")}function mg(){be=!1,Te=!1,we.setScreen("title")}we.bind({onPlay:Rc,onPause:()=>{!be||ar||(Te=!0,we.setScreen("pause"))},onResume:()=>{Te=!1,we.setScreen("hud")},onQuit:mg,onAgain:()=>Rc(io),onProduce:i=>{be&&!Te&&xt.produce(i)},onMode:i=>{xt.mode=xt.mode===i?"command":i,we.setMode(xt.mode)},onSelectAll:()=>xt.selectAllArmy(),onHireWorker:i=>{if(!be||Te)return;const t=xt.buildings.find(e=>e.id===i);t&&(xt.selectBuilding(t),Fe.lookAtPoint(t.x,t.z),xt.produceAt(0,i))},onPickWar:i=>{if(!be||Te)return;const t=xt.buildings.find(e=>e.id===i);t&&(xt.selectBuilding(t),Fe.lookAtPoint(t.x,t.z))},onDemolish:()=>{if(!be||Te)return;const i=xt.selectedBuildingRecord();i&&xt.demolishBuilding(i.id)}});Fe=new lg(fg,pg);Fe.onPocUpgrade=i=>{!be||Te||xt.pickPocUpgrade(i)};Fe.getMode=()=>xt.mode;Fe.canPreviewPlace=(i,t,e)=>xt.canPreviewPlace(e,i,t);Fe.onTap=(i,t,e)=>{if(!be||Te)return;const n=xt.pickOwnEco(i,t);if(n){xt.selectBuilding(n);return}const s=xt.pickOwnBattlePoc(i,t);if(s){xt.selectBuilding(s);return}xt.pickOwnUnit(i,t)>=0||e||xt.selectCount===0?xt.selectAt(i,t,e):xt.commandAt(i,t)};Fe.onBox=(i,t,e,n)=>{!be||Te||xt.selectScreenBox(i,t,e,n,(s,r)=>Fe.projectClient(s,.4,r))};Fe.onWallDrag=i=>{if(!be||Te)return;let t=0;for(const e of i)xt.tryPlaceWall(e.x,e.z)&&(t+=1);t&&(xt.mode="command"),we.setMode(xt.mode)};Fe.onPlace=(i,t)=>{!be||Te||(xt.mode==="tower"?xt.tryPlaceTower(i,t):xt.mode==="barracks"&&xt.tryPlaceBarracks(i,t),we.setMode(xt.mode))};window.addEventListener("resize",()=>Fe.resize());window.addEventListener("keydown",i=>{i.key==="Escape"&&(xt.mode!=="command"?(xt.mode="command",we.setMode("command")):be&&!Te&&(Te=!0,we.setScreen("pause"))),!(!be||Te)&&(i.key==="1"&&xt.produce(0),i.key==="2"&&xt.produce(1),i.key==="3"&&xt.produce(2),i.key==="4"&&xt.produce(3),i.key==="q"&&(xt.mode=xt.mode==="wall"?"command":"wall",we.setMode(xt.mode)),i.key==="e"&&(xt.mode=xt.mode==="tower"?"command":"tower",we.setMode(xt.mode)),i.key==="r"&&(xt.mode=xt.mode==="barracks"?"command":"barracks",we.setMode(xt.mode)),i.key==="g"&&xt.selectAllArmy())});function ml(i){const t=Math.min(.05,(i-bc)/1e3);bc=i,be&&!Te&&(xt.tick(t),we.update(xt,t),!ar&&xt.winner!==null&&(ar=!0,be=!1,we.showEnd(xt.winner===xt.player,xt.player,io,xt.matchStats(xt.player)))),(be||Te)&&Fe.render(xt,t),requestAnimationFrame(ml)}we.setScreen("title");requestAnimationFrame(ml);
