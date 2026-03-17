const STORAGE_KEY = "fitness-progress-score";
const SCORE_STEP_GYM = 10;
const SCORE_STEP_BURGER = -30;

const scoreElement = document.getElementById("score");
const gymButton = document.getElementById("gymButton");
const burgerButton = document.getElementById("burgerButton");

function getStoredScore() {
  const rawValue = window.localStorage.getItem(STORAGE_KEY);
  const parsedValue = Number.parseInt(rawValue ?? "0", 10);

  return Number.isNaN(parsedValue) ? 0 : parsedValue;
}

function renderScore(score) {
  scoreElement.textContent = String(score);
}

function updateScore(delta) {
  const nextScore = getStoredScore() + delta;
  window.localStorage.setItem(STORAGE_KEY, String(nextScore));
  renderScore(nextScore);
}

renderScore(getStoredScore());

gymButton.addEventListener("click", () => {
  updateScore(SCORE_STEP_GYM);
});

burgerButton.addEventListener("click", () => {
  updateScore(SCORE_STEP_BURGER);
});
