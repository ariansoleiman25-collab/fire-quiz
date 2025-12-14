// cspell:ignore Corel تاقیکردنەوە راهێنان پێگە پرسیار نمرە هەڵە ڕاستە تێپەڕێنرا نایابە باشە پێداچوونەوە پێویستت راهێنانی زیاترە هەڵەیەک نییە تێپەڕێنراو وەڵامی ڕاست
// =======================
// Computer Architecture Quiz (Local)
// Beautiful UI + Easy answering + Keyboard (A/B/C/D, Enter, S)
// =======================

// Question bank (from your PDF)
const BANK = [
  { q: "A computer is a device that:", a: ["Stores and processes data","Plays games only","Works without electricity","Draws only pictures"], c: 0 },
  { q: 'The term "computer" is derived from the word:', a: ["Compute","Compiler","Compact","Compare"], c: 0 },
  { q: "The main purpose of a computer is to:", a: ["Perform calculations and logical operations","Store food items","Provide electricity","Wash clothes"], c: 0 },
  { q: "A computer follows a set of:", a: ["Random instructions","Predefined instructions (programs)","Human emotions","None of these"], c: 1 },
  { q: "The ability of a computer to perform multiple tasks is called:", a: ["Multitasking","Multi-user","Multilevel","Multistage"], c: 0 },
  { q: "A computer system consists of:", a: ["Hardware and software","Hardware only","Software only","Keyboard only"], c: 0 },
  { q: "Which of the following is NOT part of a computer system?", a: ["Mouse","Monitor","Water bottle","CPU"], c: 2 },
  { q: "The interaction between hardware and software is done through:", a: ["Operating system","Keyboard","Printer","Scanner"], c: 0 },
  { q: "Data entered into the computer is called:", a: ["Output","Input","Storage","File"], c: 1 },
  { q: "Processed data is known as:", a: ["Information","Raw data","Garbage","Software"], c: 0 },
  { q: "Devices that connect to a computer are called:", a: ["Peripherals","Accessories","Components","Wires"], c: 0 },
  { q: "The main circuit board in a computer is called:", a: ["Motherboard","Keyboard","RAM","CPU"], c: 0 },
  { q: "USB stands for:", a: ["Universal Serial Bus","United System Board","Universal Service Board","Unified Serial Base"], c: 0 },
  { q: "Which device connects computers to the internet?", a: ["Modem","Printer","Scanner","Mouse"], c: 0 },
  { q: "A cable that connects the monitor to the computer is usually a:", a: ["VGA/HDMI cable","Power cord","Telephone wire","None"], c: 0 },
  { q: "Which is the smallest type of computer?", a: ["Microcomputer","Minicomputer","Mainframe","Supercomputer"], c: 0 },
  { q: "Which type of computer is used by large organizations for bulk data processing?", a: ["Mainframe","Microcomputer","Minicomputer","Laptop"], c: 0 },
  { q: "Which computer type is the fastest?", a: ["Supercomputer","Minicomputer","Laptop","Microcomputer"], c: 0 },
  { q: "A smartphone is an example of:", a: ["Microcomputer","Mainframe","Supercomputer","Minicomputer"], c: 0 },
  { q: "Which type of computer is used for scientific research?", a: ["Supercomputer","Mainframe","Laptop","Desktop"], c: 0 },
  { q: "CPU stands for:", a: ["Central Processing Unit","Computer Processing Unit","Central Process Utility","Control Processing Unit"], c: 0 },
  { q: "CPU is also called the:", a: ["Brain of the computer","Heart of the computer","Eye of the computer","Ear of the computer"], c: 0 },
  { q: "CPU consists of:", a: ["ALU and Control Unit","ALU and Printer","RAM and Mouse","Control Unit and Hard Disk"], c: 0 },
  { q: "The arithmetic operations are performed in:", a: ["ALU","CU","Memory","Storage unit"], c: 0 },
  { q: "The control unit is responsible for:", a: ["Managing the execution of instructions","Storing data","Printing output","Drawing graphics"], c: 0 },
  { q: "Software is a collection of:", a: ["Programs","Devices","Wires","Chips"], c: 0 },
  { q: "Which of these is system software?", a: ["Operating System","MS Word","Photoshop","Tally"], c: 0 },
  { q: "Application software is used for:", a: ["Performing specific tasks","Controlling hardware","Formatting disks","Managing memory"], c: 0 },
  { q: "Which of these is not software?", a: ["Keyboard","MS Paint","Windows","Linux"], c: 0 },
  { q: "An example of open-source software is:", a: ["Linux","Microsoft Word","Adobe Photoshop","CorelDRAW"], c: 0 },
  { q: "Which is NOT a component of a computer system?", a: ["Input unit","Output unit","Storage unit","Clothing unit"], c: 3 },
  { q: "Which is an input device?", a: ["Keyboard","Monitor","Printer","Speaker"], c: 0 },
  { q: "Which is an output device?", a: ["Monitor","Keyboard","Scanner","Joystick"], c: 0 },
  { q: "The temporary storage area in a computer is:", a: ["RAM","ROM","Hard disk","CD"], c: 0 },
  { q: "ROM stands for:", a: ["Read Only Memory","Random Only Memory","Ready Operational Memory","Run Once Memory"], c: 0 },
  { q: "A microprocessor is:", a: ["A CPU on a single chip","A monitor","A storage device","A printer"], c: 0 },
  { q: "The 8085 microprocessor is an:", a: ["8-bit processor","16-bit processor","32-bit processor","64-bit processor"], c: 0 },
  { q: "The control bus is used to:", a: ["Control signals between devices","Carry data","Carry addresses","Store data"], c: 0 },
  { q: "The ALU performs:", a: ["Arithmetic and logical operations","Only input operations","Only memory operations","None"], c: 0 },
  { q: "The registers in a microprocessor are used for:", a: ["Temporary data storage","Long-term storage","Sound output","Displaying images"], c: 0 },
  { q: "The lowest level in the computer hierarchy is:", a: ["Hardware","Software","Application","User"], c: 0 },
  { q: "Which layer directly interacts with the hardware?", a: ["Operating system","Application software","User","Data"], c: 0 },
  { q: "The highest level in the hierarchy is:", a: ["User","Software","Hardware","OS"], c: 0 },
  { q: "The hierarchy shows the relationship between:", a: ["User, Software, and Hardware","CPU and RAM only","Printers only","None of these"], c: 0 },
  { q: "Operating systems act as an interface between:", a: ["User and hardware","Two computers","Two networks","Keyboard and mouse"], c: 0 },
  { q: "MOV instruction is used to:", a: ["Transfer data from one register to another","Perform addition","Compare values","Jump to address"], c: 0 },
  { q: "In MOV A, B — data is moved from:", a: ["Register B to A","Register A to B","Memory to A","None"], c: 0 },
  { q: "The timing diagram represents:", a: ["Relationship between signals and time","Memory capacity","Data types","Logic gates"], c: 0 },
  { q: "In the MOV instruction, how many bytes are used?", a: ["1 byte","2 bytes","3 bytes","4 bytes"], c: 0 },
  { q: "MOV instruction belongs to which group?", a: ["Data transfer instructions","Arithmetic instructions","Logical instructions","Branch instructions"], c: 0 },
];

const $ = (id) => document.getElementById(id);

// --- CONFETTI ENGINE (Mini Implementation) ---
const confetti = (() => {
  let canvas = null;
  let ctx = null;
  let particles = [];
  let running = false;

  function init() {
    if (canvas) return;
    canvas = document.createElement("canvas");
    canvas.id = "confetti-canvas";
    Object.assign(canvas.style, { position:"fixed", inset:"0", pointerEvents:"none", zIndex:"999" });
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    window.addEventListener("resize", resize);
    resize();
  }

  function resize() {
    if(!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function loop() {
    if (!running) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.y < canvas.height && p.life > 0);
    
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.5; // gravity
      p.life--;
      p.rot += p.vRot;
      
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      ctx.restore();
    });

    if (particles.length > 0) requestAnimationFrame(loop);
    else running = false;
  }

  return (count = 50, x = 0.5, y = 0.5) => {
    init();
    const colors = ["#0071e3", "#ffcc00", "#ff3b30", "#34c759", "#af52de"];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: x * canvas.width,
        y: y * canvas.height,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 1) * 15 - 5,
        vRot: (Math.random() - 0.5) * 0.2,
        rot: Math.random() * Math.PI,
        size: Math.random() * 8 + 4,
        life: 100 + Math.random() * 50,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    if (!running) {
      running = true;
      loop();
    }
  };
})();


let quiz = [];
let idx = 0;
let score = 0;
let picked = null;
let review = [];
let mode = "exam";

// --- SLIDING NAVIGATOR LOGIC ---
function setMode(newMode, btn) {
  mode = newMode;
  
  // UI Update
  document.querySelectorAll(".seg-item").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  
  // Sliding Motion
  const bg = document.getElementById("segBg");
  const container = btn.parentElement;
  
  // Calculate relative position
  const relLeft = btn.offsetLeft;
  const w = btn.offsetWidth;
  
  // Apply
  bg.style.width = `${w}px`;
  bg.style.transform = `translateX(${relLeft}px)`; // Works for LTR-like positioning context
  
  // If RTL causes issues, we might need negative values or right-side positioning, 
  // but standard offsetLeft usually flows correctly with LTR transforms.
  // Exception: In RTL mode, offsetLeft is from the RIGHT in some legacy definitions, 
  // but in modern Chrome/Edge `direction: rtl`, offsetLeft is from the LEFT.
  // However, `transform: translateX` moves RIGHT.
  // If the container is RTL, items start on the right. 
}

// Init Nav
window.addEventListener("DOMContentLoaded", () => {
    const defaultBtn = document.querySelector(`.seg-item[data-mode="exam"]`);
    if(defaultBtn) setTimeout(() => setMode("exam", defaultBtn), 50); // Delay for layout
});

function shuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random() * (i + 1));
    // ↑ Fix for some editors: if this line errors, replace with:
    // const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

// Some editors auto-insert weird text. If shuffle above breaks, use this safe shuffle:
function safeShuffle(arr){
  const a = [...arr];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function showToast(msg){
  const t = $("toast");
  if(!t) return;
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 900);
}

function show(screen){
  ["screenStart","screenQuiz","screenResult"].forEach(s => $(s).classList.add("hidden"));
  $(screen).classList.remove("hidden");
}

function setProgressUI(){
  $("progress").textContent = `پ ${idx+1} / ${quiz.length}`;
  const fill = $("progressFill");
  if(fill){
    const pct = Math.round((idx / quiz.length) * 100);
    fill.style.width = `${pct}%`;
  }
}

function start(){
  const count = Math.min(parseInt($("count").value,10), BANK.length);
  mode = $("mode").value;

  const pillMode = $("pillMode");
  const pillBank = $("pillBank");
  if(pillMode) pillMode.textContent = `مۆد: ${mode === "exam" ? "تاقیکردنەوە" : "راهێنان"}`;
  if(pillBank) pillBank.textContent = `پێگە: ${BANK.length} پرسیار`;

  // Use safe shuffle always (more reliable)
  quiz = safeShuffle(BANK).slice(0, count);

  idx = 0;
  score = 0;
  picked = null;
  review = [];

  $("score").textContent = `نمرە: ${score}`;
  $("feedback").textContent = "";
  $("btnNext").disabled = true;

  renderQ();
  show("screenQuiz");
}

function renderQ(){
  const item = quiz[idx];
  picked = null;

  $("qText").textContent = item.q;
  $("choices").innerHTML = "";
  $("feedback").textContent = "";
  $("btnNext").disabled = true;

  setProgressUI();

  item.a.forEach((txt, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.setAttribute("data-idx", i);

    btn.innerHTML = `
      <div class="label">
        <div class="key">${String.fromCharCode(65+i)}</div>
        <div class="txt">${txt}</div>
      </div>
    `;

    btn.onclick = () => pick(i, btn);
    $("choices").appendChild(btn);
  });
}

function pick(i, btn){
  if(picked !== null) return;
  picked = i;

  const item = quiz[idx];
  const correct = item.c;

  const buttons = [...document.querySelectorAll(".choice")];
  if(buttons[correct]) buttons[correct].classList.add("correct");

  const isCorrect = (i === correct);
  if(!isCorrect){
    btn.classList.add("wrong");
    review.push({ item, your: i, correct });
    $("feedback").textContent = `❌ هەڵە. ڕاستە: ${String.fromCharCode(65+correct)}.`;
    showToast("هەڵە ❌");
  }else{
    score++;
    $("score").textContent = `نمرە: ${score}`;
    $("feedback").textContent = `✅ ڕاستە!`;
    showToast("ڕاستە ✅");
    confetti(30, 0.5, 0.7); // Burst on correct
  }

  $("btnNext").disabled = false;

  // Practice mode: auto-next quickly
  if(mode === "practice"){
    setTimeout(() => next(), 650);
  }
}

function skip(){
  const item = quiz[idx];
  review.push({ item, your: null, correct: item.c });
  $("feedback").textContent = `⏭️ تێپەڕێنرا.`;
  showToast("تێپەڕێنرا ⏭️");
  $("btnNext").disabled = false;
}

function next(){
  const fill = $("progressFill");
  if(fill){
    const pct = Math.round(((idx+1) / quiz.length) * 100);
    fill.style.width = `${pct}%`;
  }

  if(idx < quiz.length - 1){
    idx++;
    renderQ();
  } else {
    finish();
  }
}

function finish(){
  show("screenResult");

  const pct = Math.round((score/quiz.length)*100);
  
  // Animate Ring
  const ring = document.querySelector(".score-ring");
  const valSpan = document.getElementById("finalScoreVal");
  
  if(ring) {
     // Small delay to allow transition to trigger
     setTimeout(() => {
       ring.style.setProperty("--val", `${pct * 3.6}deg`); // 360deg = 100%
     }, 100);
  }
  if(valSpan) valSpan.textContent = score; // Show raw score or pct? User had raw score.
  
  if (pct >= 60) {
    setTimeout(() => confetti(150, 0.5, 0.5), 300); // Big burst
    setTimeout(() => confetti(100, 0.3, 0.4), 800);
    setTimeout(() => confetti(100, 0.7, 0.4), 1200);
  }

  $("finalMsg").textContent =
    pct >= 85 ? "نایابە 🔥" :
    pct >= 60 ? "باشە 👍 (پێداچوونەوە بکە)" :
    "پێویستت بە راهێنانی زیاترە 💪";

  const box = $("review");
  box.innerHTML = "";

  if(review.length === 0){
    box.innerHTML = `<p class="hint">هیچ هەڵەیەک نییە 🎉</p>`;
    return;
  }

  review.forEach((r, n) => {
    const div = document.createElement("div");
    div.className = "reviewItem";
    const yourText = (r.your === null) ? "تێپەڕێنراو" : `وەڵامی تۆ: ${String.fromCharCode(65+r.your)}`;
    const tag = (r.your === null)
      ? `<span class="tag skip">تێپەڕێنراو</span>`
      : `<span class="tag bad">هەڵە</span>`;
    div.innerHTML = `
      <b>${n+1}) ${r.item.q}</b> ${tag}<br/>
      ${yourText}<br/>
      وەڵامی ڕاست: ${String.fromCharCode(65+r.correct)}. ${r.item.a[r.correct]}
    `;
    box.appendChild(div);
  });
}

// Buttons
$("btnStart").addEventListener("click", start);
$("btnNext").addEventListener("click", next);
$("btnSkip").addEventListener("click", skip);
$("btnRestart").addEventListener("click", () => show("screenStart"));

// ✅ Keyboard FIX: A/B/C/D answers, ENTER always Next, S Skip
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();

  if (!$("screenQuiz").classList.contains("hidden")) {

    if (["a","b","c","d"].includes(key)) {
      const i = key.charCodeAt(0) - 97; // a=0,b=1,c=2,d=3
      const btn = document.querySelector(`.choice[data-idx="${i}"]`);
      if (btn) btn.click();
      e.preventDefault();
    }

    if (key === "enter") {
      e.preventDefault();
      if (!$("btnNext").disabled) $("btnNext").click();
    }

    if (key === "s") {
      e.preventDefault();
      $("btnSkip").click();
    }
  }
});

// Default
show("screenStart");

// --- FIRE BACKGROUND LOGIC ---
function createParticles(containerId, count, particleClass = "particle") {
    const container = document.getElementById(containerId);
    if (!container) return; 

    // Clear prev if any (in case of re-init)
    container.innerHTML = "";

    const frag = document.createDocumentFragment(); 

    for (let i = 0; i < count; i++) {
        const p = document.createElement("div");
        p.classList.add(particleClass);
        // Random Animation Delay
        p.style.animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
        // Random Horizontal Position
        p.style.left = `${Math.random() * 100}%`;
        // Random Scale
        const scale = 0.5 + Math.random() * 1; 
        p.style.transform = `scale(${scale})`;
        
        frag.appendChild(p);
    }
    container.appendChild(frag);
}

// Init Fire
// We can call immediately or on load
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFire);
} else {
    initFire();
}

function initFire() {
   createParticles("fire-container", 60);
   createParticles("fire-container-2", 40);
   createParticles("fire-container-3", 30, "particle-2");
}
