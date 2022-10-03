const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn1.addEventListener("click", () => playRound("rock", getComputerChoice()));
btn2.addEventListener("click", () => playRound("paper", getComputerChoice()));
btn3.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const results = document.getElementById("resultscon");




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
        results.textContent = "You lose. Paper covers rock.";
    }
    else if(playerInput === "rock" && computerSelection === "scissors") {
        results.textContent = "You win. Rock blunts scissors.";
    }
    else if(playerInput === "rock" && computerSelection === "rock") {
        results.textContent = "Draw.";
    }    
    else if (playerInput === "scissors" && computerSelection === "paper") {
        results.textContent = "You win. Scissors cut paper.";
    }
    else if(playerInput === "scissors" && computerSelection === "scissors") {
        results.textContent = "Draw.";
    }
    else if(playerInput === "scissors" && computerSelection === "rock") {
        results.textContent = "You lose. Rock blunts scissors.";
    }
    else if (playerInput === "paper" && computerSelection === "paper") {
        results.textContent = "Draw.";
    }
    else if(playerInput === "paper" && computerSelection === "scissors") {
        results.textContent = "You lose. Scissors cut paper.";
    }
    else if(playerInput === "paper" && computerSelection === "rock") {
        results.textContent = "You win. Paper covers rock.";
    }
}





