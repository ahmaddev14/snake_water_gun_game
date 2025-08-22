let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');

// Function to play the game
function play(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);
  
  if (result === "You Win!") {
    playerScore++;
  } else if (result === "You Lose!") {
    computerScore++;
  }

  updateScores();
  resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

// Function to get the computer's random choice
function getComputerChoice() {
  const choices = ['snake', 'water', 'gun'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the result of the game
function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a Draw!";
  }

  if (
    (playerChoice === 'snake' && computerChoice === 'water') ||
    (playerChoice === 'water' && computerChoice === 'gun') ||
    (playerChoice === 'gun' && computerChoice === 'snake')
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// Function to update the score display
function updateScores() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}
