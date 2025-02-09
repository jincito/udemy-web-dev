var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = `images/dice${randomNumber}.png`;
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = `images/dice${randomNumber2}.png`;
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if (randomNumber > randomNumber2) {
  document.querySelector("h1").innerHTML = "<strong>Player 1 wins!</strong>";
} else if (randomNumber < randomNumber2) {
  document.querySelector("h1").innerHTML = "<strong>Player 2 wins!</strong>";
} else {
  document.querySelector("h1").innerHTML = "<strong>Draw</strong>";
}
