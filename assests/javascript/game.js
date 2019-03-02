  
    //create an array for the computer to make a choice
		 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
    //create your variables for your wins, losses, number of guesses, and your choices so far
		 var wins = 0;
		 var losses = 0;
		 var numGuesses = 10;
     var guessChoices = [];
     
    //create the function for the computer to make its choice, console log the choice so you can see that it is working
     var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     console.log(computerGuess)

    //function to hit any button to start game
		 document.onkeyup = function(event) {

		 	var userGuess = event.key;

		 	
    //array for appropriate user guesses
		 	var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
		 	
    //function to make sure each guess will be a string
			if (options.indexOf(userGuess) > 0) {
    
    //if the userGuess is the computerGuess then wins go up, numGuess resets to 10, and the guesschoices reset
				if (userGuess === computerGuess) {
					wins++;
					numGuesses = 10;
					guessChoices = [];
				}
    
    //if the userGuess does not equal the computerGuess the numberGuesses go down, and the userguess is put into the guessChoices
				if (userGuess != computerGuess) {
					numGuesses --;
					guessChoices.push(userGuess);
				}
    
    //if the numberGuesses runs out the increase the losses by one and reset game
				if (numGuesses === 0) {

				numGuesses = 10;
				losses ++;
				guessChoices = [];

				
			}

    //sets up the javascript with the html tags
			var html = 
			"<h1> The Psychic Game </h1>" +
			"<p>Guess what letter I'm thinking of!</p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>" +
			"<p>Guesses Left: " + numGuesses + "</p>" +
			"<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

			document.querySelector("#game").innerHTML = html;

			
			}
		};
