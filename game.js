let numdraws = 0;
let numloss = 0;
let numvictories = 0;
let invalidAnswer = 0;
let choice;
let rock;
let paper;
let scissors;

function rpsGame(){
    let cpuChoice = Math.floor(Math.random()*3);
    console.log(cpuChoice);
    if (cpuChoice <= 1){
        return rock;
    }
    else if(cpuChoice >= 2){
        return paper;
    }
    else {
        return scissors;
    }
}

function playerChoice(){
    let cpuChoice = rpsGame();
    if(choice.toUpperCase() == 'ROCK' && cpuChoice == rock){
        numdraws++;
        return resultOne = 'CPU: ROCK! \rYou tied!';
    }
    else if (choice.toUpperCase() == 'ROCK' && cpuChoice == paper){
        numloss++;
        return resultTwo = 'CPU: PAPER! \rYou lose!';
    }
    else if (choice.toUpperCase() == 'ROCK' && cpuChoice == scissors){
        numvictories++;
        return resultThree = 'CPU: SCISSORS! \rYou win!';
    }
//----------------------------------------------
    else if(choice.toUpperCase() == 'PAPER' && cpuChoice == rock){
        numvictories++;
        return resultThree = 'CPU: ROCK! You \rwin!';
    }
    else if (choice.toUpperCase() == 'PAPER' && cpuChoice == paper){
        numdraws++;
        return resultOne = 'CPU: PAPER! You \rtied!';
    }
    else if (choice.toUpperCase() == 'PAPER' && cpuChoice == scissors){
        numloss++;
        return resultTwo = 'CPU: SCISSORS! \rYou lose!';
    }
//----------------------------------------------
    else if(choice.toUpperCase() == 'SCISSORS' && cpuChoice == rock){
        numloss++;
        return resultTwo = 'CPU: ROCK! \rYou lose!';
    }
    else if (choice.toUpperCase() == 'SCISSORS' && cpuChoice == paper){
        numvictories++;
        return resultThree = 'CPU: PAPER! \rYou win!';
    }
    else if (choice.toUpperCase() == 'SCISSORS' && cpuChoice == scissors){
        numdraws++;
        return resultOne = 'CPU: SCISSORS! \rYou tied!';
    }
//----------------------------------------------
    else{
        invalidAnswer++;
        return resultFour = 'Please type: ROCK, PAPER, or SCISSORS.';
    }
}

function game(){
    for (let i = 1; i <= 5; i++){
        choice = prompt('Type ROCK, PAPER, or Scissors:');
        alert('You: '+ choice.toUpperCase() + '!\r' + playerChoice());
        alert('Game: ' + i + '/5\r' + '\rYou: ' + numvictories +'\rCPU: ' + numloss + '\rTies: ' + numdraws);
        if (numvictories > numloss) 
        {
            return message = 'You win!';
        }
        else if (numloss > numvictories)
        {
            return message = "You lose!";
        }
        if (invalidAnswer == 1){
            i--;
            invalidAnswer--;
        }
}}

game();