//javascript file

const options = ["rock", "paper", "scissors"];

let playerChoice, computerChoice;
let yourScore = 0;
let compScore = 0;

const select = function(selection) {
  playerChoice = selection;
  computerChoose();
  if ((yourScore ==0 || yourScore <5) && (compScore ==0 || compScore <5)) {
    playRound();
}
}

const finalScore = document.querySelector('#finalScore');
const winMessage = document.querySelector('#winMessage');
const roundResult = document.querySelector('#roundResult');
const reset = document.querySelector('#reset');
reset.onclick = () => resetScore();


function resetScore() {
  yourScore = 0;
  compScore = 0;
  finalScore.textContent = 'You: '+ yourScore + ' |' + ' Computer: '+ compScore;
  winMessage.textContent = ""
  roundResult.textContent = ""
}

function computerChoose() {
    computerChoice = options[Math.floor(Math.random() * options.length)];
}

function playRound() {
  
    if (playerChoice == computerChoice) {

    } else if
      ((playerChoice === "rock" && computerChoice === "scissors")
    || (playerChoice === "paper" && computerChoice === "rock") 
    || (playerChoice === "scissors" && computerChoice === "paper")) {
      yourScore++;
    } else if ((playerChoice === "rock" && computerChoice === "paper") || 
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")) {
      compScore++;
    }
    
    if (playerChoice == computerChoice) {
      winMessage.textContent = "Tie!";
      roundResult.textContent = "You chose: " + playerChoice + " | " + "Computer chose: " + computerChoice
    } else if ((playerChoice === "rock" && computerChoice === "scissors")
    || (playerChoice === "paper" && computerChoice === "rock") 
    || (playerChoice === "scissors" && computerChoice === "paper")) {
      roundResult.textContent = "You chose: " + playerChoice + " | " + "Computer chose: " + computerChoice;
      winMessage.textContent = "";
    } else {
      roundResult.textContent = "You chose: " + playerChoice + " | " + "Computer chose: " + computerChoice;
      winMessage.textContent = "";
    }

    let score = 'You: '+ yourScore + ' | ' + ' Computer: '+ compScore;
    finalScore.textContent= score;

    if (yourScore == 5 || compScore == 5) {
      let message = yourScore == 5 ? 'You won!' : 'Computer won!';

      winMessage.textContent = message;
      
    }
  }
