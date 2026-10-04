function go(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  window.setTimeout(()=>window.scrollTo({top:0,behavior:"instant"}),350);
}
function guilty(answer){
  const r=document.getElementById("guiltyResult");
  if(answer==="guilty") r.textContent="I knew it! 😂 But honestly... I wouldn't change a thing about you. ❤️";
  else r.textContent="Innocent? Hmm. The evidence strongly disagrees. 😌😂";
  setTimeout(()=>go("littleThings"),1900);
}
let revealed=0;
function reveal(btn,text){
  if(btn.classList.contains("revealed")) return;
  btn.classList.add("revealed");
  btn.innerHTML="<span>♥</span><b>"+text+"</b>";
  revealed++;
  if(revealed>=4) document.getElementById("continueLittle").classList.add("show");
}
function yesChoice(){
  document.getElementById("choiceResult").textContent="Then I have one more thing to tell you... ❤️";
  setTimeout(()=>go("letter"),1400);
}
function maybeChoice(){
  document.getElementById("choiceResult").textContent="Take your time, Miss Trouble. I already know I'm going to keep trying. 😂❤️";
  setTimeout(()=>go("letter"),1600);
}
function runAway(){
  const b=document.getElementById("runBtn");
  const x=(Math.random()*260)-130;
  const y=(Math.random()*150)-75;
  b.style.transform=`translate(${x}px,${y}px)`;
  toast("Nice try, Miss Trouble. 😏 The NO button has disappeared!");
}
function finish(){
  celebration();
  go("final");
}
function restart(){revealed=0;go("welcome");window.scrollTo({top:0,behavior:"smooth"})}
function toast(msg){
  const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");
  clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),2500);
}
function sparkle(){
  const c=document.querySelector(".sparkles"),s=document.createElement("span");
  s.className="sparkle";s.textContent=["✦","✧","♡","•"][Math.floor(Math.random()*4)];
  s.style.left=Math.random()*100+"%";s.style.top=(70+Math.random()*35)+"%";s.style.fontSize=(10+Math.random()*20)+"px";
  s.style.animationDuration=(6+Math.random()*6)+"s";c.appendChild(s);setTimeout(()=>s.remove(),13000);
}
function petal(){
  const c=document.querySelector(".petals"),p=document.createElement("span");p.className="petal";p.textContent=["🌸","🌹","♡"][Math.floor(Math.random()*3)];
  p.style.left=Math.random()*100+"%";p.style.animationDuration=(8+Math.random()*7)+"s";p.style.fontSize=(12+Math.random()*14)+"px";
  c.appendChild(p);setTimeout(()=>p.remove(),16000);
}
setInterval(sparkle,500);setInterval(petal,1800);
for(let i=0;i<10;i++)setTimeout(sparkle,i*150);
function celebration(){
  const icons=["❤️","💕","💖","✨","🌹","💗","♡"];
  for(let i=0;i<65;i++){
    const e=document.createElement("div");e.className="burst";e.textContent=icons[Math.floor(Math.random()*icons.length)];
    e.style.left="50%";e.style.top="50%";e.style.fontSize=(14+Math.random()*25)+"px";
    e.style.setProperty("--x",(Math.random()*window.innerWidth-window.innerWidth/2)+"px");
    e.style.setProperty("--y",(Math.random()*window.innerHeight-window.innerHeight/2)+"px");
    e.style.animationDelay=Math.random()*.7+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),3500);
  }
}
