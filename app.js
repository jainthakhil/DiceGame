alert("refresh me to start :)");
var randDiceOne = Math.floor(Math.random()*6)+1;
var randDiceTwo = Math.floor(Math.random()*6)+1;

var diceOnesource = "dice" + randDiceOne + ".png"; 
var diceTwosource = "dice" + randDiceTwo + ".png"; 

document.querySelector(".dice-one-img").setAttribute("src", "dice")

// document.querySelectorAll("img")[0].setAttribute("src",diceOnesource);
// document.querySelectorAll("img")[1].setAttribute("src",diceTwosource);