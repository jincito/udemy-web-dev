var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(".btn").on("click", function() {
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  // console.log(userClickedPattern);
});

function nextSequence() {
  var randomNum = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
}

function playSound(name) {
  var audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColor) {
  currentColor = $(`#${currentColor}`);
  currentColor.addClass("pressed");
  setTimeout(() => {
    currentColor.removeClass("pressed");
  }, 100);
}
