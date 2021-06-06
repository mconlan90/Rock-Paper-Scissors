const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const h1 = document.querySelector("h1");
let playerSelection;
let computerSelection;

rock.addEventListener('click', function() {
    playerSelection = "rock";
    computerSelection = computerPlay();
    h1.innerText = playRound(playerSelection, computerSelection);
})

paper.addEventListener('click', function() {
    playerSelection = "paper";
    computerSelection = computerPlay();
    h1.innerText = playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', function() {
    playerSelection = "scissors";
    computerSelection = computerPlay();
    h1.innerText = playRound(playerSelection, computerSelection);
})

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    let randomOption = options[randomIndex];
    return randomOption;
  }  

function displayPlayerWin() {
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
    
function displayPlayerLose() {
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }

function playRound (playerSelection, computerSelection) {
      
    if ( (playerSelection === "rock" && computerSelection === "Scissors") ||
        (playerSelection === "scissors" && computerSelection === "Paper") ||
        (playerSelection === "paper" && computerSelection === "Rock") ) {
      return displayPlayerWin();
    } else if 
        ( (playerSelection === "scissors" && computerSelection === "Rock") ||
        (playerSelection === "paper" && computerSelection === "Scissors") ||
        (playerSelection === "rock" && computerSelection === "Paper") )  {
          return displayPlayerLose();
      } else {
        return "It's a tie!";
      }
    }


    