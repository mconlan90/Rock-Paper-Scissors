const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
let p1Score = 0;
let p2Score = 0;

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

function playRound (playerSelection, computerSelection) {
      
    if ( (playerSelection === "rock" && computerSelection === "Scissors") ||
        (playerSelection === "scissors" && computerSelection === "Paper") ||
        (playerSelection === "paper" && computerSelection === "Rock") ) {
        p1Score += 1;
        playerScore.textContent = p1Score;
      return displayPlayerWin(playerSelection, computerSelection);
    } else if 
        ( (playerSelection === "scissors" && computerSelection === "Rock") ||
        (playerSelection === "paper" && computerSelection === "Scissors") ||
        (playerSelection === "rock" && computerSelection === "Paper") )  {
        p2Score += 1;
        computerScore.textContent = p2Score;
          return displayPlayerLose(playerSelection, computerSelection);
      } else {
        return "It's a tie!";
      }
    };


    