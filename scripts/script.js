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
console.log(placedBycomputer);

}
//accept user to throw is options
function userPlay(){
    let userInput=prompt("throw your guess out of Rock,Papper or Scissors");
    let convertedInput=userInput.toLowerCase();
    let userVal="";
   if(convertedInput==="rock" ||convertedInput==="papper"||convertedInput==="scissors"){
    
    userVal=convertedInput;
       console.log(userVal)
   }else{
        console.log("check your choice, wrong input used");
   }
return userVal;
}

//play the rock papper game
function  playRockPapper(playerSelection,computerSelection){
    

}

//if the user guess what the computer throws, the user wins

//else the computer wins

computerPlay();
userPlay();