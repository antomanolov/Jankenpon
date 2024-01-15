function gamePlay(playerSelection, computerSelection){
    if (playerSelection > computerSelection){
        return "Player wins";
    } else if (computerSelection > playerSelection){
        return "Computer wins";
    } else (computerSelection === playerSelection);{
        return "It's a Tie";
    }
        
}

/*Leet Code version
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
let computerSelection = getComputerChoice();
console.log("Computer choice: ",computerSelection);*/

function getComputerChoice(){
    let choice = Math.random() * 3;
if (choice <= 1) {
    choice = "Rock";
} else if (choice <= 2) {
    choice = "Paper";
} else {
    choice = "Scissors";
}
return choice;// if your forget the return function it returns undefined as error
}
let computerSelection = getComputerChoice();
console.log("Computer choice: ", computerSelection);