const options = ["rock", "paper", "scrissors"]
const choice = options[Math.floor(Math.random()*options.length)];

function computerSelection(options){
    return options;
}

function gamePlay(playerSelection, computerSelection){
    if (playerSelection > computerSelection){
        return "Player wins";
    } else if (computerSelection > playerSelection){
        return "Computer wins";
    } else (computerSelection === playerSelection);{
        return "It's a Tie";
    }
        
}

function singleRound(playerSelection,computerSelection){
    
}