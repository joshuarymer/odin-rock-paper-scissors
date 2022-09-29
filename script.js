

function getComputerChoice() {
        let randomNum = Math.floor((Math.random()*100)%3)
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
    playerSelection = playerInput.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose. Paper covers rock.";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors") {
        return "You win. Rock blunts scissors.";
    }
    else if(playerSelection === "rock" && computerSelection === "rock") {
        return "Draw.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win. Scissors cut paper.";
    }
    else if(playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw.";
    }
    else if(playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose. Rock blunts scissors.";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw.";
    }
    else if(playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose. Scissors cut paper.";
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        return "You win. Paper covers rock.";
    }
}
