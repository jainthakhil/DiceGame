var diceOne = Math.round(Math.random()*5 + 1);
var diceTwo = Math.round(Math.random()*5 + 1);

// for dice one------------------------

if(diceOne===1){
    document.querySelectorAll("img")[0].setAttribute("src","one.png");
}

else if(diceOne===2){
    document.querySelectorAll("img")[0].setAttribute("src","two.png");
}

else if(diceOne===3){
    document.querySelectorAll("img")[0].setAttribute("src","three.png");
}

else if(diceOne===4){
    document.querySelectorAll("img")[0].setAttribute("src","four.png");
}

else if(diceOne===5){
    document.querySelectorAll("img")[0].setAttribute("src","five.png");
}

else if(diceOne===6){
    document.querySelectorAll("img")[0].setAttribute("src","six.png");
}


// for dice two--------------------------------------

if(diceTwo===1){
    document.querySelectorAll("img")[1].setAttribute("src","one.png");
}

else if(diceTwo===2){
    document.querySelectorAll("img")[1].setAttribute("src","two.png");
}

else if(diceTwo===3){
    document.querySelectorAll("img")[1].setAttribute("src","three.png");
}

else if(diceTwo===4){
    document.querySelectorAll("img")[1].setAttribute("src","four.png");
}

else if(diceTwo===5){
    document.querySelectorAll("img")[1].setAttribute("src","five.png");
}

else if(diceOne===6){
    document.querySelectorAll("img")[1].setAttribute("src","six.png");
}


// SCOREBOARD

if(diceOne===diceTwo){
    document.querySelector("h1").innerHTML = "🪢Match Tie!";
    document.querySelector("h1").innerHTML = "🔃Refresh Me!";
}
if(diceOne > diceTwo){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
    countOne++;
    document.querySelectorAll("p")[0].innerHTML = countOne;
}

else if(diceOne < diceTwo){
    document.querySelector("h1").innerHTML = "🚩Player 2 wins!";
    countTwo++;
    document.querySelectorAll("p")[1].innerHTML = countTwo;
}
