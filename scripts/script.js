console.log("Test");
//rock paper scissor game played with computer

//let the computer throw his options randomly(either Rock,Sciessor or papper)

function computerPlay(){
    // generate random number between out of 1(Rock),2(sciccor) and 3(papper)
const randomIntBetween1and3=Math.floor(Math.random()*3)+1;
let placedBycomputer="";
if(randomIntBetween1and3===1){
    placedBycomputer="rock";
}else if(randomIntBetween1and3===2){
    placedBycomputer="scissors";
}else if(randomIntBetween1and3===3){
    placedBycomputer="papper";
}
return placedBycomputer;
}
//accept user input
function userPlay(){
    let userInput=prompt("throw your guess out of Rock,Papper or Scissors");
    let convertedInput=userInput.toLowerCase();
    let placedByUser="";
   if(convertedInput==="rock" ||convertedInput==="papper"||convertedInput==="scissors"){
    
    placedByUser=convertedInput;
      
   }else{
        console.log("check your choice, wrong input used");
   }
return placedByUser;
}

//play the rock papper game

//store the computer guess and the user input into variables
let playerSelection=userPlay();
console.log(playerSelection);
let computerSelection=computerPlay();
console.log(computerSelection);
function  playRockPapper(playerSelection,computerSelection){
    let score=0;
    
   
    if(computerSelection==="papper"&&playerSelection==="rock"){
        console.log("you Lose!,Papper beats Rock");
    }else if(computerSelection==="rock"&& playerSelection==="scissors"){
        console.log("you Lose!,Rock beats Scissors");
    }else if(computerSelection==="scissors"&& playerSelection==="papper"){
        console.log("you Lose!,Scissors beats papper");
    }else if(computerSelection==="rock"&&playerSelection==="papper"){
        console.log("you Win!,Papper beats Rock");
        score++;
    }else if(computerSelection==="scissors"&& playerSelection==="rock"){
        console.log("you Win!,Rock beats Scissors");
        score++;
    }else if(computerSelection==="papper"&& playerSelection==="scissors"){
        console.log("you Win!,Scissors beats papper");
        score++;
    }else{
        console.log("it'\s drow, lets play again");
    }
return score;
}

// run the function to play
//playRockPapper(playerSelection,computerSelection);

//function to record the score out of 5 round and report the result
function game(){
    let result=""
    //iterate the game 5 times
    for(let i=1;i<=5;i++){
        //variables to store the result
        let player = 0;
        let computer=0;
        
        let score= playRockPapper(playerSelection,computerSelection);
        if(score===0){
            computer++;
        }else{
            player++;
        }
        result= `Computer=${computer} : player=${player}`;
    }
    return result;
}
let finalResult= game();
console.log(finalResult);