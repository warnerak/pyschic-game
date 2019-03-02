
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
  "z"
];
var wins = 0;
var losses = 0;
var numGuesses = [9];
var guessChoices = [];

var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)];
  console.log(computerGuess)

document.onkeyup = function(event) {
  var userGuess = event.key;
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y",
  "z"];

  var userAnswers = [];
  
    if (options.indexOf(userGuess) > -1) {
      if (userGuess === computerGuess) {
          wins++;
          numGuesses = 9;
          guessChoices = [];
      }
      else {
          if (guessChoices.includes(userGuess)) {
              var isDuplicate = false;
              for (var i = 0; i < userAnswers.length; i++) { //for every previous answer
                  if (currentAnswer == userAnswers[i]) { //check if the current answer is a previous one
                  isDuplicate = true;
                  break; //exit loop
                  }
              }
              if (!isDuplicate) { //different than previous
                userAnswers[userAnswers.length] = currentAnswer;
              }
          
              else {
              numGuesses--;
              guessChoices.push(userGuess);
          }
      }
  
      if (numGuesses === 0) {
          numGuesses = 9;
          losses++;
          guessChoices = [];
      }
  }  
}

    var html
    "<h1>The Psychic Game</h1>" +
    "<p>Guess what letter I'm thinking!</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + numGuesses + "</p>" +
    "<p>Your guesses so far: " + guessChoices.join (", ") + "</p>" ;
    document.querySelector(".game").innerHTML = html;
  }

