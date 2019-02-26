
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
  "z"
];
var wins = 0;
var losses = 0;
var numGuess = [10];
var guessChoices = [];

var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  console.log(computerGuess)

document.onkeyup = function(event) {
  var userGuess = event.key;

  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
  "z"];

  if (options.indexOf(userGuess) > -1) {
    if (userGuess === computerGuess) {
      wins ++;
      numGuess = 9;
      guessChoices = [];
    }
    else {
      if (guessChoices.includes(userGuess)) {
      }
      else {
        numGuess --;
        guessChoices.push(userGuess);
      }
    }
    if (numGuess === 0) {
      numGuess = 9;
      losses ++;
      guessChoices = [];
    }

    var html
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Your guesses so far: " + guessChoices.join (", ") + "</p>" ;
    document.querySelector("#game").innerHTML = html;
  }

}