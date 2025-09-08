var player1 = prompt("Enter the name for Player 1: ");
var player2 = prompt("Enter the name for Player 2: ");

if (player1 === null) {
  player1 = "Player 1";
}
if (player2 === null) {
  player2 = "Player 2";
}

var playerTag1 = document.querySelectorAll("p")[0];
var playerTag2 = document.querySelectorAll("p")[1];
playerTag1.textContent = `${player1}`;
playerTag2.textContent = `${player2}`;
playerTag1.style.color = "blue";
playerTag2.style.color = "red";

// var heading = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild;
var heading = document.querySelectorAll("h1")[0];


function roll() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImg1 = `images/dice${randomNumber1}.png`;
  document.querySelectorAll("img")[0].src = randomDiceImg1;

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImg2 = `images/dice${randomNumber2}.png`;
  document.querySelectorAll("img")[1].src = randomDiceImg2;
  if (randomNumber1 >  randomNumber2) {
    playerTag1.innerHTML = `<strong><u>${player1}</u></strong>`;
    playerTag2.textContent = `${player2}`;
    heading.textContent = `${player1} Wins!`;
    heading.style.color = "blue";
  } else if (randomNumber2 > randomNumber1) {
    playerTag2.innerHTML = `<strong><u>${player2}</u></strong>`;
    playerTag1.textContent = `${player1}`;
    heading.textContent = `${player2} Wins!`;
    heading.style.color = "red";
  } else {
    heading.textContent = "Draw";
    heading.style.color = "green";
    playerTag1.textContent = "💩";
    playerTag2.textContent = "💩";
  }
}

roll();
