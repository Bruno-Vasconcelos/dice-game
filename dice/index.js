
var randomNum1 = Math.floor(Math.random()*6)+1;// rand
var randomNum2 = Math.floor(Math.random()*6)+1;// ron number between 1 and 6

var randomDiceImage1 = "images/dice" + randomNum1 + ".png";
var randomDiceImage2 = "images/dice" + randomNum2 + ".png";

var player1 = document.querySelectorAll("img")[0];
var player2 = document.querySelectorAll("img")[1];

player1.setAttribute("src", randomDiceImage1);
player2.setAttribute("src", randomDiceImage2);

if(randomNum1>randomNum2){
   document.querySelector("h1").innerHTML = "Player 1 Wins !!";
}
else if(randomNum2>randomNum1){
  document.querySelector("h1").innerHTML = "Player 2 Wins !!";
}else{
  document.querySelector("h1").innerHTML = "Draw !!";
}

function refreshPage(){
    window.location.reload();
}
