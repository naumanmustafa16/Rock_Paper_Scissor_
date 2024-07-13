// 1st write a function that randomly picks a computer's choice. Math.random() function will be handy

function getComputerChoice(){
    if (Math.random() < 0.33){
        return "Rock";}
    else if ((Math.random()>0.33) && (Math.random()<0.66)){
        return "Paper";
    }
    else {
        return "Scissor";
    }
    }
console.log(getComputerChoice())