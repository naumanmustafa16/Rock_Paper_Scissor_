let computerChoice;
let computerSelection;  
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let messageDisplay;
const humanChoices = document.querySelector("#humanChoices");
const humanSelect = document.querySelector("#humanSelect");
const computerSelect = document.querySelector("#computerSelect");
const announcement = document.querySelector("#announcement");
const whoWins = document.querySelector("#whoWins");


// Take humanChoice with the click


function playGame(){

    humanChoices.addEventListener('click', (event) =>{
        if (humanScore < 5 && computerScore < 5){
        let target = event.target;
 
        switch(target.id) {
            case "Rock":
                humanSelection = "Rock".toLowerCase();
                humanSelect.textContent = `Your Choice is ${humanSelection}`;
                computerSelection = getComputerChoice();
                computerSelect.textContent = `Computer's Choice is ${computerSelection}`;
                playRound(humanSelection,computerSelection);
                // annouceResults(humanScore,computerScore);

                break;
            
            case "Paper":
                humanSelection = "Paper".toLowerCase();
                humanSelect.textContent = `Your Choice is ${humanSelection}`
                computerSelection = getComputerChoice();
                computerSelect.textContent = `Computer's Choice is ${computerSelection}`;
                playRound(humanSelection,computerSelection);
                // annouceResults(humanScore,computerScore);
                break;
            
            case "Scissor":
                humanSelection = "Scissor".toLowerCase();
                humanSelect.textContent = `Your Choice is ${humanSelection}`            
                computerSelection = getComputerChoice();
                computerSelect.textContent = `Computer's Choice is ${computerSelection}`;
                playRound(humanSelection,computerSelection);
                // annouceResults(humanScore,computerScore);
                break;}}

    else if (humanScore == 5 || computerScore == 5)
    {
       if (humanScore == 5){
          return announcement.textContent = "You have won the Game.To play again, press 'F5'."
           }
                        
        else{
          return announcement.textContent = "You have lost the Game. To play again, press 'F5'."
            } 
            }
            
            }
    )
    




 // Here the logic will be added. playRound function will be declared
// It will take humanChoice and computerChoice as parameters.


function playRound(humanChoice, computerChoice){
 
    // A Tie Situation
    if (humanChoice == computerChoice){
        return whoWins.textContent = `It is tie! Play again.\n Your score is ${humanScore} & Computer score is ${computerScore}`}
        
    // Human wins - 3 Scenarios.

    else if (humanChoice == "rock" && computerChoice == "scissor"){
        if (humanScore == 4){whoWins.textContent = `You win ! ${humanChoice} beats ${computerChoice}. \n Your score is ${++humanScore} & Computer's score is ${computerScore}. Please Press 'F5' to re-start`}
        else{whoWins.textContent = `You win ! ${humanChoice} beats ${computerChoice}. \n Your score is ${++humanScore} & Computer's score is ${computerScore}`}
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        if (humanScore == 4){whoWins.textContent = `You win ! ${humanChoice} beats ${computerChoice}. \n Your score is ${++humanScore} & Computer's score is ${computerScore}. Please Press 'F5' to re-start`}
        else{whoWins.textContent = `You win ! ${humanChoice} beats ${computerChoice}. \n Your score is ${++humanScore} & Computer's score is ${computerScore}`}
    }        
    else if (humanChoice == "scissor" && computerChoice == "paper"){
        if (humanScore == 4){whoWins.textContent = `You win ! ${humanChoice} beats ${computerChoice}. \n Your score is ${++humanScore} & Computer's score is ${computerScore}. Please Press 'F5' to re-start`}
        else{whoWins.textContent = `You win ! ${humanChoice} beats ${computerChoice}. \n Your score is ${++humanScore} & Computer's score is ${computerScore}`}
    }
        
    // Computer wins - 3 Scenarios.

    else if (computerChoice == "rock" && humanChoice == "scissor"){
        if (computerScore == 4) {whoWins.textContent = `You loss! ${computerChoice} beats ${humanChoice}. \n Your score is ${humanScore} & Computer score is ${++computerScore}. Please Press 'F5' to re-start`}
        else{whoWins.textContent = `You loss! ${computerChoice} beats ${humanChoice}. \n Your score is ${humanScore} & Computer score is ${++computerScore}.`}
    }
    else if (computerChoice == "paper" && humanChoice == "rock"){
        if (computerScore == 4) {whoWins.textContent = `You loss! ${computerChoice} beats ${humanChoice}. \n Your score is ${humanScore} & Computer score is ${++computerScore}. Please Press 'F5' to re-start`}
        else{whoWins.textContent = `You loss! ${computerChoice} beats ${humanChoice}. \n Your score is ${humanScore} & Computer score is ${++computerScore}.`}
    }            
    else if (computerChoice == "scissor" && humanChoice == "paper"){
        if (computerScore == 4) {whoWins.textContent = `You loss! ${computerChoice} beats ${humanChoice}. \n Your score is ${humanScore} & Computer score is ${++computerScore}. Please Press 'F5' to re-start`}
        else{whoWins.textContent = `You loss! ${computerChoice} beats ${humanChoice}. \n Your score is ${humanScore} & Computer score is ${++computerScore}.`}
    }
}
    // 1st write a function that randomly picks a computer's choice. Math.random() function will be handy

function getComputerChoice(){
    if (Math.random() < 0.33){
        computerChoice = "rock";
        return computerChoice;}
    
    else if ((Math.random()>0.33) && (Math.random()<0.66)){
        computerChoice = "paper";
        return computerChoice;
            }
    else {
        computerChoice = "scissor";
        return computerChoice;
        }
        }
    }
     
    
    
playGame()
