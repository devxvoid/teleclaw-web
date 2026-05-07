const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 900);
});

const terminalOutput = document.getElementById("terminalOutput");

const terminalLines = [
  "> initializing TeleClaw AI workspace...",
  "> loading agent modules ............ [OK]",
  "> connecting workflow engine ....... [OK]",
  "> scanning Android build tools ..... [OK]",
  "> preparing automation runtime ..... [OK]",
  "> syncing memory context ........... [OK]",
  "> TeleClaw ready. Let's build the future."
];

let lineIndex = 0;
let charIndex = 0;

function typeTerminal() {
  if (!terminalOutput) return;

  if (lineIndex < terminalLines.length) {
    const currentLine = terminalLines[lineIndex];

    if (charIndex < currentLine.length) {
      terminalOutput.textContent += currentLine.charAt(charIndex);
      charIndex++;
      setTimeout(typeTerminal, 22);
    } else {
      terminalOutput.textContent += "\n";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeTerminal, 260);
    }
  } else {
    setTimeout(() => {
      terminalOutput.textContent = "";
      lineIndex = 0;
      charIndex = 0;
      typeTerminal();
    }, 2600);
  }
}

setTimeout(typeTerminal, 1200);

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

const engineStatus = document.getElementById("engineStatus");
const buildQueue = document.getElementById("buildQueue");
const agentCount = document.getElementById("agentCount");

const statuses = ["Online", "Thinking", "Optimizing", "Ready"];
let statusIndex = 0;

setInterval(() => {
  statusIndex = (statusIndex + 1) % statuses.length;

  if (engineStatus) engineStatus.textContent = statuses[statusIndex];
  if (buildQueue) buildQueue.textContent = `${Math.floor(Math.random() * 5) + 1} Tasks`;
  if (agentCount) agentCount.textContent = `${Math.floor(Math.random() * 8) + 9} Active`;
}, 2400);

document.querySelectorAll(".primary-btn, .nav-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("TeleClaw Workspace launching soon.");
  });
});

document.querySelectorAll(".secondary-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" });
  });
});