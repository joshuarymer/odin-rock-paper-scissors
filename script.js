const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => playRound("rock", getComputerChoice()));
btn2.addEventListener("click", () => playRound("paper", getComputerChoice()));
btn3.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const results = document.getElementById("resultscon");

let currentRound = 1;
let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
        let randomNum = Math.floor((Math.random()*3));
        if (randomNum === 0) {
            return "rock";
        }
        else if (randomNum === 1) {
            return "paper";
        }
        else if (randomNum === 2) {
            return "scissors";
        }
}
 
function playRound(playerInput, computerSelection) {
    if (playerInput === "rock" && computerSelection === "paper") {
        computerScore += 1;
        results.textContent += "Round " + currentRound + ": You lose. Paper covers rock.\nYou: "
                             + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }
    else if(playerInput === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        results.textContent += "Round " + currentRound + ": You win. Rock blunts scissors.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }
    else if(playerInput === "rock" && computerSelection === "rock") {
        results.textContent += "Round " + currentRound + ": Draw.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }    
    else if (playerInput === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        results.textContent += "Round " + currentRound + ": You win. Scissors cut paper.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }
    else if(playerInput === "scissors" && computerSelection === "scissors") {
        results.textContent += "Round " + currentRound + ": Draw.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }
    else if(playerInput === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        results.textContent += "Round " + currentRound + ": You lose. Rock blunts scissors.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        
        currentRound += 1;
    }
    else if (playerInput === "paper" && computerSelection === "paper") {
        results.textContent += "Round " + currentRound + ": Draw.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }
    else if(playerInput === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        results.textContent += "Round " + currentRound + ": You lose. Scissors cut paper.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }
    else if(playerInput === "paper" && computerSelection === "rock") {
        playerScore += 1;
        results.textContent += "Round " + currentRound + ": You win. Paper covers rock.\nYou: "
                            + playerScore + " Computer: " + computerScore + ".\n";
        currentRound += 1;
    }
}





