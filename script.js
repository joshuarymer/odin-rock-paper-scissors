

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
 
function rockPaperScissors(playerInput, computerSelection) {
    if (playerInput === "rock" && computerSelection === "paper") {
        alert("You lose. Paper covers rock.");
    }
    else if(playerInput === "rock" && computerSelection === "scissors") {
        alert("You win. Rock blunts scissors.");
    }
    else if(playerInput === "rock" && computerSelection === "rock") {
        alert("Draw.");
    }    
    else if (playerInput === "scissors" && computerSelection === "paper") {
        alert("You win. Scissors cut paper.");
    }
    else if(playerInput === "scissors" && computerSelection === "scissors") {
        alert("Draw.");
    }
    else if(playerInput === "scissors" && computerSelection === "rock") {
        alert("You lose. Rock blunts scissors.");
    }
    else if (playerInput === "paper" && computerSelection === "paper") {
        alert("Draw.");
    }
    else if(playerInput === "paper" && computerSelection === "scissors") {
        alert("You lose. Scissors cut paper.");
    }
    else if(playerInput === "paper" && computerSelection === "rock") {
        alert("You win. Paper covers rock.");
    }
}


