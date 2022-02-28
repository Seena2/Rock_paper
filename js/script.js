//console.log("Test");
//ROCK-PAPER-SCISSOR GAME PLAYED WITH COMPUTER

const choices = document.querySelectorAll('.choice'); //get all elmts with class name choice and put it into nodelist(like array)
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreBoard = [0, 0]; //we can use objects here scorb={playe:0, computer:0}
//PLAY GAME function
//let score=0;
//method 1: by prompt
/*
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
*/
//function to accept user input from prompt
/*
function userPlay() {
    let userInput = prompt("throw your guess out of Rock,Papper or Scissors");
    let convertedInput = userInput.toLowerCase();
    let placedByUser = "";
    if (convertedInput === "rock" || convertedInput === "papper" || convertedInput === "scissors") {
        placedByUser = convertedInput;
    } else {
        console.log("check your choice, wrong input used");
    }
    return placedByUser;
}
*/

//ADDITIONAL CHALLENGE
/*
function game() {
    //calls playRound function  5 times and keeps score and reports
    //winner or loser at the end

    //value to hold scores of play when 5 round is played
    let grade = [0, 0]
    for (let i = 0; i < 5; i++) {
        let rest = playRound();
        let rnd = document.getElementById('round');// grab p to display each rounds result
        rnd.textContent = rest[0];
        if (rest[1] === 1) {
            grade[0]++;
        } else if (rest[2] === 1) {
            grade[1]++;
        }
    }
    //grab div for displaying result
    let computerScore = document.getElementById('computerScore');
    let playerScore = document.getElementById('playerScore');
    computerScore.textContent = grade[0];
    playerScore.textContent = grade[1];
}

// test function call
//console.log(playRound(playerSelection,computerSelection)) //modified to no arguement for method 1
let play = document.getElementById('play'); //grab play btn
play.addEventListener('click', game); //add listener to it
*/
//Method 2: by UI, 
function playRound(e) { //listens to event
    restart.style.display = 'inline-block';//activate the hidden restart button when player makes its choice
    const playerSelection = e.target.id;//capture id of clicked icon
    const computerSelection = computerPlay();
    //console.log(playerSelection,computerSelection);
    const winner = getWinner(playerSelection, computerSelection);
    //console.log(playerSelection,computerSelection,winner);
    showWinner(winner, computerSelection, playerSelection);
}
//Event Listeners 
//start game when player clicks icon
choices.forEach(choice => choice.addEventListener('click', playRound));
window.addEventListener('click', clearModal);//close popup modal when clicked
restart.addEventListener('click', restartGame); //clear score recorded on html and Js and starts as new
//Clear modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
//Restart Game button, clears the scores and start counting as new
function restartGame(){
    scoreBoard[0]=0;
    scoreBoard[1]=0;
    //clear html
    score.innerHTML=   `
    <p>Computer:0</p>
    <p>Player:0</p>
    `;
}
//Computer Selection
function computerPlay() {
    // generate random number between (1&3),which is 1(Rock),2(scissors) and 3(papper)
    const randomIntBetween1and3 = Math.floor(Math.random() * 3) + 1;

    if (randomIntBetween1and3 === 1) {
        return "rock";
    } else if (randomIntBetween1and3 === 2) {
        return "scissors";
    } else if (randomIntBetween1and3 === 3) {
        return "paper";
    }
}
//Get game winner
function getWinner(p, c) {
    const msg = [0, 0];
    if (p === c) {
        return "draw";
    } else if (p === 'rock') {
        if (c === 'paper') {
            msg[0] = 'computer';
            msg[1] = 'Paper beats Rock';
            return msg;
        } else {
            msg[0] = 'player';
            msg[1] = 'Rock beats Scissors';
            return msg;
        }
    } else if (p === 'paper') {
        if (c === 'sissors') {
            msg[0] = 'computer';
            msg[1] = 'Scissors beats Paper';
            return msg;
        } else {
            msg[0] = 'player';
            msg[1] = 'Paper beats Rock';
            return msg;
        }
    } else if (p === 'scissors') {
        if (c === 'rock') {
            msg[0] = 'computer';
            msg[1] = 'Rock beats Scissors';
            return msg;
        } else {
            msg[0] = 'player';
            msg[1] = 'Scissors beats Paper';
            return msg;
        }
    }
}
//Show the Winner of the Game
function showWinner(winner, computerSelection, playerSelection) {
    if (winner[0] === 'player') {      //winner[0]==msg[0]
        //increement player score
        scoreBoard[0]++;
        //pop the modal to show the result on the modal
        result.innerHTML = `
        <h1 class='txt-win'> You Win</h1> </br>
        <i class="fas fa-hand-rock fa-6x"></i> <br>
        <p>Computer Selection :${computerSelection}</p>
        <p>player Selection:${playerSelection}</p>
        <strong>${winner[1]}  </strong>
        `;
    } else if (winner[0] === 'computer') {
        //increement computer score
        scoreBoard[1]++;
        //pop the modal to display  the result on the modal
        result.innerHTML = `
        <h1 class='txt-lose'> You Lose </h1> </br>
        <i class="fa-solid fa-thumbs-down fa-6x"></i> <br>
        <p>Computer Selection : ${computerSelection}</p>
        <p>player Selection: ${playerSelection} </p> 
        <strong> ${winner[1]}</strong>
        `;
    } else {
        result.innerHTML = `
        <h1 > It's a Draw,</h1>
        <i class="fa-solid fa-grip-lines fa-6x"></i> <br>
        <p>Computer Selection: ${computerSelection} </p>
        <p>player Selection: ${playerSelection}</p> 
        `;
    }
    //Show score
    score.innerHTML = `
    <p> Player: ${scoreBoard[0]}</p>
    <p>computer: ${scoreBoard[1]}</p>
    `;
    //display the modal,since the difailt is none
    modal.style.display = 'block';

}