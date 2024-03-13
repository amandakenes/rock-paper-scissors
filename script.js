function getComputerChoice() {
  const opcoes = ["Rock", "Paper", "Scissors"];
  let i = Math.floor(Math.random() * opcoes.length);
  return opcoes[i];
}

function roundPlay(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `It's a tie`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return `${playerSelection} over ${computerSelection}. You won!`
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return `${playerSelection} over ${computerSelection}. You won!`
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return `${playerSelection} over ${computerSelection}. You won!`
    } else {
        return `${computerSelection} over ${playerSelection}. You lost!`
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let a = 1; a <= 5; a++) {
        let player = prompt('Rock, paper or scissors?');
        let pc = getComputerChoice()
        let result = roundPlay(player, pc);
        console.log(`Round ${a}\nThe result is: ${result}`);
        if (result.includes("won")) {
            playerScore = playerScore + 1;
        } else if (result.includes("lost")) {
            computerScore = computerScore + 1;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You win the game with ${playerScore} rounds over ${computerScore} for you!`)
    } else if (playerScore < computerScore) {
        console.log(`You lost the game with ${computerScore} rounds over ${playerScore} for the computer!`)
    } else {
        console.log("It's a tie!")
    }
}

playGame();