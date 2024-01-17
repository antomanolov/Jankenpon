/*function gamePlay(playerSelection, computerSelection){
    if (playerSelection > computerSelection){
        return "Player wins";
    } else if (computerSelection > playerSelection){
        return "Computer wins";
    } else (computerSelection === playerSelection);{
        return "It's a Tie";
    }
        
}*/

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

/*function getComputerChoice(){
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
let computerSelection = getComputerChoice();*/


/*document.getElementById("Rock").addEventListener("click",function())*/
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//let computerMove = ''; (Using return value is better as we use scope) declaring a Global Variable, so it can be used in all functions.


function pickComputerMove(){
        const randomNumber = Math.random();

        let computerMove = '';
        
        if (randomNumber >= 0 && randomNumber
        < 1 / 3) {
            computerMove ='Rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
            computerMove = 'Paper';
        } else if (randomNumber >= 2 /3 && randomNumber < 1){
            computerMove = 'Scissors';
        }
    
        return computerMove;
        /* Using a return value is preffered to using a global variable, 
        as the scope will prevent us naming conflicts
        Best Practice: Keep Variables inside a scope (if you can)*/
}





document.getElementById('Rock').onclick = function() {

    const computerMove = pickComputerMove();

    let result = '';

    if (computerMove === 'Rock'){
        result = 'Tie.';
    } else if (computerMove === 'Paper'){
        result = 'You lose.';
    } else if (computerMove === 'Scissors'){
       result = 'You win.'; 
    }

     alert(`You picked rock. Computer picked ${computerMove}.${result}`);
}

document.getElementById('Paper').onclick = function() {
    
    const computerMove = pickComputerMove();

    let result = '';

    if (computerMove === 'Rock'){
        result = 'You win.';
    } else if (computerMove === 'Paper'){
        result = 'Tie.';
    } else if (computerMove === 'Scissors'){
    result = 'You lose.'; 
    }

    alert(`You picked paper. Computer picked ${computerMove}.${result}`); 
}

document.getElementById('Scissors').onclick = function() {
       
        const computerMove = pickComputerMove();

        let result = '';

        if (computerMove === 'Rock'){
            result = 'You lose.';
        } else if (computerMove === 'Paper'){
            result = 'You win.';
        } else if (computerMove === 'Scissors'){
        result = 'Tie.'; 
        }

        alert(`You picked scrissors. Computer picked ${computerMove}.${result}`);
    }
    