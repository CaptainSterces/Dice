function dice() {
    return Math.floor(Math.random() * 6) + 1;
}

var randomNumber1 = dice();
var randomNumber2 = dice();

document.querySelector('.img1').src = "images/dice" + randomNumber1 + ".png"
document.querySelector('.img2').src = "images/dice" + randomNumber2 + ".png";

function winner() {
    if (randomNumber1 > randomNumber2) {
        return "🚩Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        return "Player 2 wins!🚩";
    } else if (randomNumber1 === randomNumber2) {
        return "🚩DRAW🚩";
    }
}

document.querySelector("h1").innerHTML = winner();

//   var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//
// document.querySelector('.img1').src="images/dice" + randomNumber1 + ".png";
//
//
//   var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// document.querySelector('.img2').src="images/dice" + randomNumber2 + ".png";
//
//
//   if (randomNumber1 > randomNumber2){
//     document.querySelector("h1").innerHTML = "🚩Player 1 wins";
//   }else if(randomNumber1 < randomNumber2){
//     document.querySelector("h1").innerHTML = "Player 2 wins🚩";
//   }else if (randomNumber1 === randomNumber2){
//     document.querySelector("h1").innerHTML = "🚩DRAW🚩";
//   }
