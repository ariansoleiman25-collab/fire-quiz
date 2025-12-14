// cspell:ignore Corel تاقیکردنەوە راهێنان پێگە پرسیار نمرە هەڵە ڕاستە تێپەڕێنرا نایابە باشە پێداچوونەوە پێویستت راهێنانی زیاترە هەڵەیەک نییە تێپەڕێنراو وەڵامی ڕاست
// =======================
// Computer Architecture Quiz (Local)
// Beautiful UI + Easy answering + Keyboard (A/B/C/D, Enter, S)
// =======================

// Question bank - Networking & IT Certification Questions
const BANK = [
  { q: "What is a network?", a: ["A device that stores data","A protocol for file sharing","A group of devices connected to share information","A type of cable used in communication"], c: 2 },
  { q: "What is a node in networking?", a: ["A type of IP address","A routing table entry","A device that exchanges data on a network","A communication protocol"], c: 2 },
  { q: "Which address version uses 32 bits to form an IP address?", a: ["MAC address","IPv4","IPv6","Subnet Mask"], c: 1 },
  { q: "What is the purpose of a subnet mask?", a: ["To encrypt data","To define the network and host portions of an IP address","To assign MAC addresses","To identify VLANs"], c: 1 },
  { q: "Which of the following is not a valid subnet mask in decimal notation?", a: ["255.0.0.0","255.255.255.0","255.255.255.255","255.255.255.255.0"], c: 3 },
  { q: "What device is typically used as a default gateway?", a: ["Switch","Hub","Router","NIC"], c: 2 },
  { q: "What does DNS do?", a: ["Assigns MAC addresses","Routes data to remote networks","Converts hostnames into IP addresses","Manages IP configurations"], c: 2 },
  { q: "Which address is unique to a network interface and assigned at the hardware level?", a: ["IP address","MAC address","Subnet mask","DNS"], c: 1 },
  { q: "Which of the following is used to connect a device to a network?", a: ["DHCP","VLAN","NIC","DNS"], c: 2 },
  { q: "Which cable type is not used in wired networks?", a: ["Coaxial","Twisted Pair","Fiber Optic","Infrared"], c: 3 },
  { q: "Which network type uses radio spectrums instead of cables?", a: ["Wired network","Wireless network","VPN","VLAN"], c: 1 },
  { q: "What is a VPN used for?", a: ["Encrypting MAC addresses","Blocking broadcast messages","Creating a secure virtual network over public internet","Connecting VLANs"], c: 2 },
  { q: "What is a VLAN?", a: ["Virtual Private Network","A subnet of DNS servers","A group of devices sharing broadcasts on a local network","A router configuration command"], c: 2 },
  { q: "How many bits does IPv6 use?", a: ["32","64","96","128"], c: 3 },
  { q: "In peer-to-peer networking:", a: ["There is a central server","Devices require server approval","Each device manages its own authentication","The server controls all resources"], c: 2 },
  { q: "What does DHCP do?", a: ["Encrypts IP addresses","Converts MAC to IP","Provides IP configuration to clients","Monitors DNS traffic"], c: 2 },
  { q: "What does a straight-through Ethernet cable typically connect?", a: ["Switch to switch","Router to router","Host to switch","Host to host"], c: 2 },
  { q: "Which IP class is suitable for small networks?", a: ["Class A","Class B","Class C","Class D"], c: 2 },
  { q: "What protocol is used to find a MAC address if only the IP is known?", a: ["DNS","DHCP","ARP","RIP"], c: 2 },
  { q: "Which IOS mode is entered with the configure terminal command?", a: ["User EXEC","Privileged EXEC","Global Configuration","Interface Configuration"], c: 2 },
  { q: "What is the purpose of the line vty 0 4 command in Cisco IOS?", a: ["It enables serial communication","It creates five virtual terminal lines for remote access","It assigns a hostname","It sets a router password"], c: 1 },
  { q: "What does the enable secret command do?", a: ["Encrypts the VTY password","Configures a telnet password","Sets an encrypted password for privileged EXEC mode","Sets the console password"], c: 2 },
  { q: "Which banner type is displayed before login authentication on a Cisco device?", a: ["Login Banner","Exec Banner","MOTD Banner","Warning Banner"], c: 2 },
  { q: "Which command is used to activate a router interface?", a: ["interface on","set up","start interface","no shutdown"], c: 3 },
  { q: "What is required for a serial interface to function as DCE?", a: ["Interface IP address","Clock rate command","Routing protocol","Loopback address"], c: 1 },
  { q: "Which command would assign an IP address to a router interface?", a: ["set ip 10.0.0.1","assign ip 10.0.0.1","ip address 10.0.0.1 255.255.255.0","interface ip 10.0.0.1"], c: 2 },
  { q: "What is the output of the show ip interface brief command used for?", a: ["To test network connections","To configure new interfaces","To view a summary of interface status and IPs","To restart interfaces"], c: 2 },
  { q: "What does it mean when the interface status shows 'administratively down'?", a: ["The interface has a hardware failure","The interface is disconnected","The interface has been manually shut down","The IP is incorrectly configured"], c: 2 },
  { q: "What does the show version command display?", a: ["Interface configuration","IP routing table","Current IOS version and hardware information","Banner message"], c: 2 },
  { q: "Where is the startup configuration stored?", a: ["RAM","ROM","Flash","NVRAM"], c: 3 },
  { q: "Which command shows the current configuration stored in RAM?", a: ["show version","show startup-config","show interfaces","show running-config"], c: 3 },
  { q: "What does the copy running-config startup-config command do?", a: ["Loads IOS from flash","Copies saved config to RAM","Saves current config to NVRAM","Erases the current configuration"], c: 2 },
  { q: "In static routing, which of the following must be configured?", a: ["VTY lines","Remote MAC address","Next-hop IP or exit interface","Hostname of next router"], c: 2 },
  { q: "Which symbol represents a directly connected network in show ip route?", a: ["R","S","C","D"], c: 2 },
  { q: "Which routing protocol uses hop count as its metric?", a: ["OSPF","EIGRP","BGP","RIP"], c: 3 },
  { q: "Which of the following best describes EIGRP?", a: ["A pure link-state protocol","A hybrid protocol with both distance-vector and link-state characteristics","A protocol that only sends full routing updates","A protocol that does not support neighbor discovery"], c: 1 },
  { q: "What routing metric does RIP use to determine the best path?", a: ["Bandwidth","Delay","Hop count","Administrative distance"], c: 2 },
  { q: "What is the default maximum hop count allowed by RIP?", a: ["8","10","15","20"], c: 2 },
  { q: "Which version of RIP supports classless routing and VLSM?", a: ["RIP version 1","RIP advanced","RIP classic","RIP version 2"], c: 3 },
  { q: "In RIP configuration, which command activates the RIP routing process?", a: ["router dynamic","rip routing enable","router rip","start rip"], c: 2 },
  { q: "What command can be used to prevent RIP updates from being sent on an interface?", a: ["no-update interface","interface passive","disable interface","passive-interface"], c: 3 },
  { q: "Which algorithm does OSPF use to calculate the shortest path?", a: ["Bellman-Ford","Prim's","Dijkstra","Ford-Fulkerson"], c: 2 },
  { q: "What is the default OSPF area that must exist in all OSPF networks?", a: ["Area 10","Area 1","Area 100","Area 0"], c: 3 },
  { q: "Which router connects different OSPF areas to the backbone area?", a: ["BDR","ABR","ASBR","DR"], c: 1 },
  { q: "What feature allows OSPF to minimize routing update traffic?", a: ["Flooding","Periodic updates","Use of designated routers","Link-state advertisements"], c: 3 },
  { q: "Which command is used in OSPF to specify interfaces that belong to an area?", a: ["interface area","network","ospf connect","area assign"], c: 1 },
  { q: "In a /28 subnet, what is the correct wildcard mask used in OSPF configuration?", a: ["0.0.0.0","0.0.0.14","0.0.0.15","0.0.0.16"], c: 2 },
  { q: "What type of authentication sends passwords in clear text?", a: ["Null","Type 0","Type 1","Type 2"], c: 2 },
  { q: "Which type of OSPF authentication is the most secure?", a: ["None","Simple password","Clear text","MD5"], c: 3 },
  { q: "In Type 2 OSPF authentication, what element is sent instead of a password?", a: ["Encrypted password","Authentication key","Hash value","Encrypted token"], c: 2 },
  { q: "Which routing protocol is considered a hybrid of distance-vector and link-state?", a: ["RIP","OSPF","EIGRP","BGP"], c: 2 },
  { q: "Which routing protocol sends the entire routing table periodically?", a: ["OSPF","RIP","EIGRP","BGP"], c: 1 },
  { q: "What is the default maximum hop count for RIP?", a: ["10","12","15","255"], c: 2 },
  { q: "What metric does RIP use to determine the best route?", a: ["Bandwidth","Delay","Hop count","Load"], c: 2 },
  { q: "Which version of RIP supports classless routing and VLSM?", a: ["RIP version 1","RIP version 2","RIPng","RIPv3"], c: 1 },
  { q: "Which command disables RIP updates on a specific interface?", a: ["no auto-summary","passive-interface","no rip","stop update"], c: 1 },
  { q: "Which protocol uses the Dijkstra algorithm?", a: ["EIGRP","RIP","OSPF","BGP"], c: 2 },
  { q: "What is the OSPF backbone area?", a: ["Area 1","Area A","Area 0","Area 100"], c: 2 },
  { q: "Which OSPF router connects different areas to the backbone?", a: ["ASBR","BDR","ABR","DR"], c: 2 },
  { q: "What command is used to start the RIP routing process?", a: ["enable rip","router rip","rip start","run rip"], c: 1 },
  { q: "What command shows RIP-learned routes?", a: ["show running-config","show ip protocols","show ip route","show rip"], c: 2 },
  { q: "What does the wildcard mask in OSPF do?", a: ["Specifies subnet mask","Matches interfaces by IP","Enables static routing","Assigns IP address"], c: 1 },
  { q: "Which command advertises a network in OSPF?", a: ["advertise","ip route","network","ospf route"], c: 2 },
  { q: "Which command is used to verify OSPF neighbor relationships?", a: ["show ospf neighbors","show ip ospf neighbor","show ip protocols","show interface ospf"], c: 1 },
  { q: "What must match for OSPF routers to form an adjacency?", a: ["Hostnames","Area IDs","Router IDs","Wildcard masks"], c: 1 },
  { q: "What command displays OSPF interface information?", a: ["show interface ospf","show ip ospf interface","show ospf int","show ospf"], c: 1 },
  { q: "What is the default administrative distance of OSPF?", a: ["90","100","110","120"], c: 2 },
  { q: "What is the purpose of a Designated Router (DR) in OSPF?", a: ["To back up routing data","To reduce adjacencies","To set routing metrics","To connect to ASBR"], c: 1 },
  { q: "How is the OSPF router ID determined by default?", a: ["Lowest interface IP","Random number","Highest loopback IP","MAC address"], c: 2 },
  { q: "Which command prevents OSPF from forming neighbors on an interface?", a: ["ospf disable","no ospf neighbor","passive-interface","shutdown ospf"], c: 2 },
  { q: "Which router connects OSPF with another routing protocol?", a: ["ABR","DR","BDR","ASBR"], c: 3 },
  { q: "What type of authentication sends passwords in plain text?", a: ["Type 0","Type 1","Type 2","MD5"], c: 1 },
  { q: "Which OSPF authentication type is most secure?", a: ["Simple password","MD5","Type 1","Null"], c: 1 },
  { q: "What is sent instead of a password in Type 2 (MD5) authentication?", a: ["Encrypted password","Key ID","Hash value","Access list"], c: 2 },
  { q: "What must be the same for OSPF authentication to work between neighbors?", a: ["Key ID","IP address","Password","Router hostname"], c: 2 },
  { q: "What is the command to enter global configuration mode on a Cisco router?", a: ["router>","enable","configure terminal","interface"], c: 2 },
  { q: "Which command is used to enter the interface configuration mode for FastEthernet 0/1?", a: ["interface fastethernet 0/1","int fe 0/1","conf int 0/1","config-if 0/1"], c: 0 },
  { q: "What command assigns an IP address to an interface?", a: ["ip subnet","ip addr","ip address 192.168.1.1","ip address 192.168.1.1 255.255.255.0"], c: 3 },
  { q: "Which command activates an interface after assigning an IP address?", a: ["interface up","enable interface","no shutdown","activate interface"], c: 2 },
  { q: "What command verifies interface configuration and status?", a: ["show interface","show ip interface brief","show running-config","show startup-config"], c: 1 },
  { q: "What command shows the routing table of a Cisco router?", a: ["show ip routing-table","show ip route","show route","show interfaces"], c: 1 },
  { q: "What command is used to assign a default gateway?", a: ["ip gateway","default-gateway","ip default-gateway 192.168.1.1","gateway 192.168.1.1"], c: 2 },
  { q: "Which command enters the routing configuration mode for RIP?", a: ["routing rip","router rip","ip rip","start rip"], c: 1 },
  { q: "What command adds a network to the RIP configuration?", a: ["ip route","advertise network","network 192.168.1.0","rip network"], c: 2 },
  { q: "Which RIP version supports classless routing and subnet masks?", a: ["Version 1","Version 2","Version 3","RIPng"], c: 1 },
  { q: "What command sets RIP to use version 2?", a: ["rip version 2","version 2","router rip version 2","ripv2 enable"], c: 1 },
  { q: "Which command disables RIP updates on an interface?", a: ["no ip rip","stop update","passive-interface fastethernet 0/1","rip interface shutdown"], c: 2 },
  { q: "What is the function of show running-config?", a: ["Shows router logs","Displays current configuration in RAM","Displays saved configuration in NVRAM","Shows the routing table"], c: 1 },
  { q: "How do you save the running configuration to startup configuration?", a: ["write config","copy run","copy running-config startup-config","save configuration"], c: 2 },
  { q: "Which command reboots the router?", a: ["shutdown","reload","restart","reset"], c: 1 },
  { q: "What is the first mode you enter upon accessing a Cisco router?", a: ["Configuration mode","Privileged mode","User EXEC mode","Interface mode"], c: 2 },
  { q: "Which command allows access from user mode to privileged mode?", a: ["config","enable","admin","sudo"], c: 1 },
  { q: "What prompt indicates the router is in privileged EXEC mode?", a: [">","#","$","@"], c: 1 },
  { q: "Which command configures OSPF routing process?", a: ["routing ospf","router ospf 1","start ospf","ospf enable"], c: 1 },
  { q: "In the command network 10.0.0.0 0.0.0.255 area 0, what does 0.0.0.255 represent?", a: ["Subnet mask","Wildcard mask","Gateway","OSPF ID"], c: 1 },
  { q: "What command shows OSPF neighbor relationships?", a: ["show ospf neighbors","show ip ospf neighbor","show ospf table","ospf neighbors"], c: 1 },
  { q: "Which authentication type in OSPF sends clear text passwords?", a: ["None","Type 1","Type 2","MD5"], c: 1 },
  { q: "What authentication method is the most secure in OSPF?", a: ["Clear text","Simple","MD5","Null"], c: 2 },
  { q: "What command sets the router ID for OSPF manually?", a: ["router-id 1.1.1.1","set id 1.1.1.1","ospf-id 1.1.1.1","ip router-id"], c: 0 },
  { q: "What must match on both ends for OSPF authentication to work?", a: ["IP address","Area number","Password","Interface number"], c: 2 },
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
