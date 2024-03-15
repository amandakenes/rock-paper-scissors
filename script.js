let playerScore = 0;
let computerScore = 0;
const resultText = document.createElement("div");
const finalResult = document.createElement("p");
const tryAgainBtn = document.createElement("button");
const cont = document.createElement("div");
cont.classList.add("container");
document.body.appendChild(cont);
document.body.style.cssText = "text-align: center";
const mainHeading = document.createElement("h1");
mainHeading.innerHTML = "Let's play!";
cont.appendChild(mainHeading);
const descParag = document.createElement("p");
descParag.innerHTML = "Which one will youc choose?";
cont.appendChild(descParag);
const score = document.createElement("div");
score.classList.add("score");
score.style.cssText =
  "display: flex; align-items: center; justify-content: space-around";
cont.appendChild(score);
const playerScoreText = document.createElement("p");
playerScoreText.innerHTML = `You: ${playerScore}`;
score.appendChild(playerScoreText);
const computerScoreText = document.createElement("p");
computerScoreText.innerHTML = `Computer: ${computerScore}`;
score.appendChild(computerScoreText);
const rockBtn = document.createElement("button");
rockBtn.innerHTML = "Rock";
rockBtn.style.cssText =
  "margin-left: 10px; padding: 10px; cursor: pointer; width: 100px; border: 1px dotted black;; border-radius: 8px";
cont.appendChild(rockBtn);
const paperBtn = document.createElement("button");
paperBtn.innerHTML = "Paper";
paperBtn.style.cssText =
  "margin-left: 10px; padding: 10px; cursor: pointer; width: 100px; border: 1px dotted black;; border-radius: 8px";
cont.appendChild(paperBtn);
const scissorsBtn = document.createElement("button");
scissorsBtn.innerHTML = "Scissors";
scissorsBtn.style.cssText =
  "margin-left: 10px; padding: 10px; cursor: pointer; width: 100px; border: 1px dotted black; border-radius: 8px";
cont.appendChild(scissorsBtn);
const result = document.createElement("div");
result.classList.add("result");
cont.appendChild(result);

function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * options.length);
  return options[i];
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  result.appendChild(resultText);
  result.appendChild(finalResult);
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === computerSelection) {
    resultText.innerHTML = `<p>You played ${playerSelection}</p>
        <p>Computer played ${computerSelection}</p>
        <p>It's a tie</p>`;
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    resultText.innerHTML = `<p>You played ${playerSelection}</p>
        <p>Computer played ${computerSelection}</p>
        <p>You win!</p>`;
    playerScore++;
    playerScoreText.innerHTML = `You: ${playerScore}`;
  } else {
    resultText.innerHTML = `<p>You played ${playerSelection}</p>
        <p>Computer played ${computerSelection}</p>
        <p>You lose!</p>`;
    computerScore++;
    computerScoreText.innerHTML = `Computer: ${computerScore}`;
  }
  playGame();
}

function playGame() {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultText.style.cssText = "margin-top: 15px";
      resultText.innerHTML = "Congratulations! You won this round!";
    } else {
      resultText.style.cssText = "margin-top: 15px";
      resultText.innerHTML = "You lost this round! Try again";
      tryAgain();
    }
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
}

function tryAgain() {
  tryAgainBtn.innerHTML = "Play Again";
  tryAgainBtn.style.cssText =
    "cursor: pointer; border: 1px dotted black; border-radius: 8px; padding: 10px";
  result.appendChild(tryAgainBtn);
  tryAgainBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    resultText.innerHTML = "";
    tryAgainBtn.style.display = "none";
    playRound();
  });
}

rockBtn.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
});
