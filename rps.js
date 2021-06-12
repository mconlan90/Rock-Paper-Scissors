const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const inputs = document.querySelectorAll("input");
const result = document.querySelector("#result");
const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');
const finalResult = document.querySelector("#finalResult");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

rock.addEventListener('click', function() {
    playButton("rock");
});

paper.addEventListener('click', function() {
    playButton("paper"); 
});

scissors.addEventListener('click', function() {
    playButton("scissors");
});

function playButton(playerSelection) {
    result.innerText = playRound(playerSelection, computerPlay());
    if (p1Score === 5 || p2Score === 5) {
      declareWinner();
    }
};

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];
    return randomOption;
  };  

function capitalise(text) {
    return text[0].toUpperCase() + text.slice(1);
  };

function displayPlayerWin(playerSelection, computerSelection) {
    return "You win! " + capitalise(playerSelection) + " beats " + computerSelection + "!";
    };
    
function displayPlayerLose(playerSelection, computerSelection) {
    return "You lose! " + computerSelection + " beats " + capitalise(playerSelection) + "!";
    };

function declareWinner() {
    if (p1Score === 5) {
      p1Score = 5;
      finalResult.textContent = "Player wins!";
    } else if (p2Score === 5) {
      p2Score = 5;
      finalResult.textContent = "Computer wins!";
    }
};

function keepPlayerScore() {
    if (p1Score !== winningScore && p2Score < winningScore) {
      p1Score += 1;
      displayPlayerScore.textContent = p1Score;
    } else if (p1Score === winningScore && p2Score < winningScore) {
      p1Score += 0;
      displayPlayerScore.textContent = p1Score;
    }
  };

function keepCpuScore() {
    if (p2Score !== winningScore && p1Score < winningScore) {
      p2Score += 1;
      displayComputerScore.textContent = p2Score;
    } else if (p2Score === winningScore && p1Score < winningScore) {
      p2Score += 0;
      displayComputerScore.textContent = p2Score;
    }
  };

function playRound (playerSelection, computerSelection) {
      
    if ( (playerSelection === "rock" && computerSelection === "Scissors") ||
        (playerSelection === "scissors" && computerSelection === "Paper") ||
        (playerSelection === "paper" && computerSelection === "Rock") ) {
        keepPlayerScore();
        return displayPlayerWin(playerSelection, computerSelection);
    } else if 
        ( (playerSelection === "scissors" && computerSelection === "Rock") ||
        (playerSelection === "paper" && computerSelection === "Scissors") ||
        (playerSelection === "rock" && computerSelection === "Paper") )  {
        keepCpuScore();
        return displayPlayerLose(playerSelection, computerSelection);
      } else {
        return "It's a tie!";
      }
    };

