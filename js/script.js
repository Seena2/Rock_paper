//console.log("Test");
//ROCK-PAPER-SCISSOR GAME PLAYED WITH COMPUTER

//playRound  function
let score=0;
function  playRound(){
      //console.log(1); //test the function
    //store the computer guess and the user input into variables
    let plyr=document.getElementById('player');//grab player btn by Id
    let cmp=document.getElementById('computer');//grab computer btn by Id
    let playerSelection=userPlay(); //call userPlay function to accept user input 
      plyr.textContent=playerSelection;//bind to btn 
      let computerSelection=computerPlay();//generate Rock,paper and scissors
      cmp.innerText=computerSelection;
      let message='';  
      let results=['',0,0 ]; //holds message and scores
    if(computerSelection==="papper"&&playerSelection==="rock"){
        message="you Lose!,Papper beats Rock";
        results[0] =message;
        results[1]++;
    }else if(computerSelection==="rock"&& playerSelection==="scissors"){
        message="you Lose!,Rock beats Scissors"; 
        results[0] =message;
        results[1]++; 
    }else if(computerSelection==="scissors"&& playerSelection==="papper"){
        message="you Lose!,Scissors beats papper";
        results[0] =message;
        results[1]++;
    }else if(computerSelection==="rock"&&playerSelection==="papper"){
        message="you Win!,Papper beats Rock";
        results[0] =message;
        results[2]++;
    }else if(computerSelection==="scissors"&& playerSelection==="rock"){
        message="you Win!,Rock beats Scissors";
        results[0] =message;
        results[2]++;
    }else if(computerSelection==="papper"&& playerSelection==="scissors"){
        message="you Win!,Scissors beats papper";
        results[0] =message;
        results[2]++;
    }else{
        message="it'\s drow, lets play again";
        results[0] =message;
    }
    return results;
}


//function to let the computer throw his options randomly(either Rock,Sciessor or papper)
function computerPlay(){
    // generate random number between (1 -3),which is 1(Rock),2(sciccor) and 3(papper)
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
//function to accept user input
function userPlay(){
    let userInput=prompt("throw your guess out of Rock,Papper or Scissors");
    let convertedInput=userInput.toLowerCase();
    let placedByUser="";
   if(convertedInput==="rock"||convertedInput==="papper"||convertedInput==="scissors"){
    placedByUser=convertedInput; 
   }else{
        console.log("check your choice, wrong input used");
   }
return placedByUser;
}
// test function call
//console.log(playRound(playerSelection,computerSelection)) //modified to no arguement

//ADDITIONAL CHALLENGE
function game(){
    //calls playRound function  5 times and keeps score and reports
    ////winner or loser at the end

    //value to hold scores of play when 5 round is played
    let grade=[0,0] 
    for(let i=0;i<5;i++){
        let rest=playRound();
        let rnd=document.getElementById('round');// grap p to display each rounds result
        rnd.textContent=rest[0];
        if(rest[1]===1){
            grade[0]++;
        }else if(rest[2]===1){
            grade[1]++;
        }
    }
     //grab div for displaying result
     let computerScore= document.getElementById('computerScore');
     let playerScore= document.getElementById('playerScore');
     computerScore.textContent=grade[0];
     playerScore.textContent=grade[1];
}

let play=document.getElementById('play'); //grab play btn
play.addEventListener('click',game); //add listener to it