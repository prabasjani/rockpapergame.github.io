const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const tieScoreDisplay = document.getElementById('tieScore');

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


function playGame(playerChoices){
    const computerChoices = choices[(Math.floor(Math.random() * 3))];

    let result = "";

    if (playerChoices === computerChoices) {
        result = "Its TIE";
    }
    else{
        switch(playerChoices){
            case "Rock":
                result = (computerChoices === "Scissors") ? "YOU WIN" : "YOU LOSE";
                break;
            
            case "Paper":
                    result = (computerChoices === "Rock") ? "YOU WIN" : "YOU LOSE";
                    break;
        
            case "Scissors":
                result = (computerChoices === "Paper") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoices}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoices}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove('greenTxt', 'redTxt');
    switch(result){
        case "YOU WIN":
            resultDisplay.classList.add('greenTxt');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE":
            resultDisplay.classList.add('redTxt');
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;    
        case "Its TIE":
            tieScore++;
            tieScoreDisplay.textContent = tieScore;
            break;    
    }
}