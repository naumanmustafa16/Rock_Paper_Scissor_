function playGame(){
    // 1st write a function that randomly picks a computer's choice. Math.random() function will be handy

    function getComputerChoice(){
        if (Math.random() < 0.33){
            let computerChoice = "rock";
            console.log("Computer choice is: " + computerChoice);
            return computerChoice;}
        else if ((Math.random()>0.33) && (Math.random()<0.66)){
            let computerChoice = "paper";
            console.log("Computer choice is: " + computerChoice);
            return computerChoice;
        }
        else {
            let computerChoice = "scissor";
            console.log("Computer choice is: " + computerChoice);
            return computerChoice;
        }
        }
    // console.log(getComputerChoice());

    // We need to get human choice. Prompt will be used in a function getHumanChoice()

    function getHumanChoice(){
        let choice = prompt("Please Choose among 'Rock', 'Paper' and 'Scissor'")
        let humanChoice = choice.toLowerCase();
        console.log("Human choice is: " + humanChoice);
        return humanChoice;
    }
    // console.log(getHumanChoice());

    // We will declare two variables to keep track of the scores.



    // Here the logic will be added. playRound function will be declared
    // It will take humanChoice and computerChoice as parameters.
    // 

    function playRound(humanChoice, computerChoice){
        
        // A Tie Situation
        if (humanChoice == computerChoice){
            console.log("It is tie! Play again.")}
        
        // Human wins - 3 Scenarios.

        else if (humanChoice == "rock" && computerChoice == "scissor"){
            console.log(`You win ! ${humanChoice} beats ${computerChoice}. Your score is ${++humanScore}`)}

        else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log(`You win ! ${humanChoice} beats ${computerChoice}. Your score is ${++humanScore}`)}        
        
        else if (humanChoice == "scissor" && computerChoice == "paper"){
            console.log(`You win ! ${humanChoice} beats ${computerChoice}. Your score is ${++humanScore}`)}
        
        // Computer wins - 3 Scenarios.

        else if (computerChoice == "rock" && humanChoice == "scissor"){
            console.log(`You loss! ${computerChoice} beats ${humanChoice}. Computer score is ${++computerScore}`)}
        
        else if (computerChoice == "paper" && humanChoice == "rock"){
            console.log(`You loss! ${computerChoice} beats ${humanChoice}. Computer score is ${++computerScore}`)}        
            
        else if (computerChoice == "scissor" && humanChoice == "paper"){
            console.log(`You loss! ${computerChoice} beats ${humanChoice}. Computer score is ${++computerScore}`)}
        
    }
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
}
    
let humanScore = 0;
let computerScore = 0;
for (i=0; i<=4; i++) {
    console.log(`ROUND: ${i + 1}`)
    playGame();}
if (humanScore > computerScore){
    console.log("You win the Game.To play again, press 'F5'.")
}
else if (humanScore < computerScore){
    console.log("You loss the Game. To play again, press 'F5'.")}
else {
    console.log("Game is Tied. To play again, press 'F5'.")
}
