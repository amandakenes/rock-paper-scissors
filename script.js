const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const playAgainBtn = document.querySelector("#play-again");
const result = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let tiedRounds = 0;

function getComputerChoice() {
  const opcoes = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * opcoes.length);
  return opcoes[i];
}

function roundPlay(playerSelection, computerSelection) {
  let playerSelectionCapitalized = playerSelection.slice(0, 1);
  playerSelection = playerSelection.slice(1);

  playerSelectionCapitalized = playerSelectionCapitalized.toUpperCase();
  playerSelection = playerSelection.toLowerCase();

  playerSelectionCapitalized += playerSelection;

  console.log(computerSelection);

  if (playerSelectionCapitalized == computerSelection) {
    result.innerHTML = `
    You played ${playerSelectionCapitalized}<br>
    Computer played ${computerSelection}<br>
    It's a tie!
    `;

    return "tie";
  } else if (
    playerSelectionCapitalized == "Rock" &&
    computerSelection == "Scissors"
  ) {
    result.innerHTML = `
    You played ${playerSelectionCapitalized}<br>
    Computer played ${computerSelection}<br>
    You won!
    `;

    return "won";
  } else if (
    playerSelectionCapitalized == "Paper" &&
    computerSelection == "Rock"
  ) {
    result.innerHTML = `
    You played ${playerSelectionCapitalized}<br>
    Computer played ${computerSelection}<br>
    You won!
    `;

    return "won";
  } else if (
    playerSelectionCapitalized == "Scissors" &&
    computerSelection == "Paper"
  ) {
    result.innerHTML = `
    You played ${playerSelectionCapitalized}<br>
    Computer played ${computerSelection}<br>
    You won!
    `;

    return "won";
  } else {
    result.innerHTML = `You played ${playerSelectionCapitalized}<br>
    Computer played ${computerSelection}<br>
    You lost!`;

    return "lost";
  }
}

function playAgain() {
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  result.innerHTML = "";

  playAgainBtn.classList.remove("showBtn");
  playAgainBtn.classList.add("play-again");

  playerScore = 0;
  computerScore = 0;
  rounds = 0;
  tiedRounds = 0;
}

function playRockBtn() {
  rounds += 1;

  let pc = getComputerChoice();
  let player = rockBtn.innerHTML;
  let resultPlay = roundPlay(player, pc);

  if (resultPlay.includes("won")) {
    playerScore += 1;
  } else if (resultPlay.includes("lost")) {
    computerScore += 1;
  } else if (resultPlay.includes("tie")) {
    tiedRounds += 1;

    playerScore = playerScore;
    computerScore = computerScore;
  }

  result.innerHTML += `<p>Player score: ${playerScore}</p>
  <p>Computer score: ${computerScore}</p>
  `;

  if (rounds >= 5) {
    result.innerHTML = "";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (playerScore > computerScore) {
      result.innerHTML = `
        You won ${playerScore} rounds against computer's ${computerScore}<br>
        Tied rounds: ${tiedRounds}<br>
        Congratulations! You're the winner!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    } else if (playerScore < computerScore) {
      result.innerHTML = `
        Computer won ${computerScore} rounds agaisnt your ${playerScore} wins<br>
        Tied rounds: ${tiedRounds}<br>
        You lost this match. Computer's the winner!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    } else if (playerScore == computerScore) {
      result.innerHTML = `
        You won ${playerScore} rounds<br>
        Computer won ${computerScore} rounds<br>
        We have no winner, it's a tie!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    }
  }
}

function playPaperBtn() {
  rounds += 1;

  let pc = getComputerChoice();
  let player = paperBtn.innerHTML;
  let resultPlay = roundPlay(player, pc);

  if (resultPlay.includes("won")) {
    playerScore += 1;
  } else if (resultPlay.includes("lost")) {
    computerScore += 1;
  } else if (resultPlay.includes("tie")) {
    tiedRounds += 1;

    playerScore = playerScore;
    computerScore = computerScore;
  }

  result.innerHTML += `<p>Player score: ${playerScore}</p>
  <p>Computer score: ${computerScore}</p>
  `;

  if (rounds >= 5) {
    result.innerHTML = "";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (playerScore > computerScore) {
      result.innerHTML = `
        You won ${playerScore} rounds against computer's ${computerScore}<br>
        Tied rounds: ${tiedRounds}<br>
        Congratulations! You're the winner!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    } else if (playerScore < computerScore) {
      result.innerHTML = `
        Computer won ${computerScore} rounds agaisnt your ${playerScore} wins<br>
        Tied rounds: ${tiedRounds}<br>
        You lost this match. Computer's the winner!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    } else if (playerScore == computerScore) {
      result.innerHTML = `
        You won ${playerScore} rounds<br>
        Computer won ${computerScore} rounds<br>
        We have no winner, it's a tie!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    }
  }
}

function playScissorsBtn() {
  rounds += 1;

  let pc = getComputerChoice();
  let player = scissorsBtn.innerHTML;
  let resultPlay = roundPlay(player, pc);

  if (resultPlay.includes("won")) {
    playerScore += 1;
  } else if (resultPlay.includes("lost")) {
    computerScore += 1;
  } else if (resultPlay.includes("tie")) {
    tiedRounds += 1;

    playerScore = playerScore;
    computerScore = computerScore;
  }

  result.innerHTML += `<p>Player score: ${playerScore}</p>
  <p>Computer score: ${computerScore}</p>
  `;

  if (rounds >= 5) {
    result.innerHTML = "";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (playerScore > computerScore) {
      result.innerHTML = `
        You won ${playerScore} rounds against computer's ${computerScore}<br>
        Tied rounds: ${tiedRounds}<br>
        Congratulations! You're the winner!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    } else if (playerScore < computerScore) {
      result.innerHTML = `
        Computer won ${computerScore} rounds agaisnt your ${playerScore} wins<br>
        Tied rounds: ${tiedRounds}<br>
        You lost this match. Computer's the winner!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    } else if (playerScore == computerScore) {
      result.innerHTML = `
        You won ${playerScore} rounds<br>
        Computer won ${computerScore} rounds<br>
        We have no winner, it's a tie!
        `;

      playAgainBtn.classList.remove("play-again");
      playAgainBtn.classList.add("showBtn");

      playAgainBtn.addEventListener("click", playAgain);
    }
  }
}

rockBtn.addEventListener("click", playRockBtn);
paperBtn.addEventListener("click", playPaperBtn);
scissorsBtn.addEventListener("click", playScissorsBtn);
