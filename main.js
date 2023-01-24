const button = document.querySelector(".rules");
const rulesimg = document.querySelector(".rules-img");
const closeBtn = document.querySelector(".close");
const choices = ["paper", "scissors", "rock"];
const buttons = document.querySelectorAll(".pick");
const scoreEl = document.querySelector(".score");
const RPS = document.querySelector(".RPS");
const selection = document.querySelector(".selection");
const reset = document.querySelector(".reset");
const user = document.querySelector(".user_choice");
const computer = document.querySelector(".computer_picked");
const winner = document.querySelector(".winner");
const reset_btn = document.querySelector(".reset-score");

reset_btn.addEventListener("click", () => {
  score = 0;
  scoreEl.innerHTML = score;
});

reset.addEventListener("click", () => {
  RPS.style.display = "flex";
  selection.style.display = "none";
});

//UPDATE-SCORE
let score = 0;
function updateScore(value) {
  score += value;
  scoreEl.innerText = score;
}

// UserChoice
let userChoice = undefined;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    userChoice = button.getAttribute("data-choice");

    checkWinner();
  });
});

function checkWinner() {
  const computerChoice = pickRaddomChoice();
  updateSection(user, userChoice);
  updateSection(computer, computerChoice);

  if (userChoice === computerChoice) {
    //draw
    winner.innerText = "DRAW";
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "rock" && computerChoice === "scissors")
  ) {
    updateScore(1);
    winner.innerText = "WIN";
  } else {
    updateScore(-1);
    winner.innerText = "LOSE";
  }
  RPS.style.display = "none";
  selection.style.display = "flex";
}

// computerChoice
function pickRaddomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function updateSection(selectionEl, choice) {
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");

  const img = selectionEl.querySelector("img");
  selectionEl.classList.add(`btn-${choice}`);
  img.src = `./images/icon-${choice}.svg`;
}

// RULES-BUTTON
button.addEventListener("click", (e) => {
  rulesimg.classList.add("open");
});

closeBtn.addEventListener("click", (e) => {
  rulesimg.classList.remove("open");
});
