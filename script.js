

function getComputerChoice() {
        let randomNum = Math.floor((Math.random()*100)%3)
        if (randomNum === 0) {
            return "Rock";
        }
        else if (randomNum === 1) {
            return "Paper";
        }
        else if (randomNum === 2) {
            return "Scissors";
        }
    
    return rockPaperScissors();
}
 console.log(getComputerChoice());
