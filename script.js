

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

function game() {
    let playerScore = 0;
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        let round = rockPaperScissors(prompt("Rock, Paper or Scissors?"), getComputerChoice())
        if (round === "You lose. Paper covers rock.") {
            computerScore += 1;
            alert(round);
        }
        else if (round === "You win. Rock blunts scissors.") {
            playerScore += 1;
            alert(round);
        }
        else if (round === "You win. Scissors cut paper.") {
            playerScore += 1;
            alert(round);
        }
        else if (round === "You lose. Rock blunts scissors.") {
            computerScore += 1;
            alert(round);
        }
        else if (round === "You lose. Scissors cut paper.") {
            computerScore += 1;
            alert(round);
        }
        else if (round === "You win. Paper covers rock.") {
            playerScore += 1;
            alert(round);
        }
        else if (round === "Draw.") {
            alert(round);
        }
    }
    if (computerScore > playerScore) {
        return "You lose. The computer scored " + computerScore + " points, while you scored " + 
        playerScore + " points.";
    }
    else if (computerScore < playerScore) {
        return "You win! You scored " + playerScore + " points, while the computer scored " + 
        computerScore + " points.";
     }
     
     else {
        return "It's a draw!";
     }
}

alert(game());

