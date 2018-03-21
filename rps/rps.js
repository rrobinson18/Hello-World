
/*
var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R', 'P', or 'S'");

 Computer Choice
var rng = Math.random();
var computerChoice = "R";


if(rng > 0.66) {
  computerChoice = "P";
} else if (rng > 0.33) {
  computerChoice = "S";
}

var userWins = "You Win!";
var computerWins = "The computer wins!";


if(computerChoice !== userChoice){
  if(computerChoice === "R"){
    if (userChoice === "S") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  } else if (computerChoice === "P"){
    if( userChoice === "R") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  }
} else {
  alert('Tie!');
}

var userWins = "You win!";
var computerWins = "The Computer wins!";
var roundCounter = 0;

var gameRound = function(){
  var userChoice = prompt("Choose Rock, Paper, or Scissors by typing 'R,' 'P', or 'S'");
  var computerChoice = "R";
  var rng = Math.random();

  if(rng > 0.66) {
    computerChoice = "P";
  } else if (rng > 0.33) {
    computerChoice = "S";
  }

  if(computerChoice !== userChoice){
    if(computerChoice === "R"){
      if (userChoice === "S") {
        alert(computerWins);
      } else {
        alert(userWins);
      }
    } else if (computerChoice === "P") {
      if( userChoice === "R") {
        alert (computerWins);
      } else {
         alert(userWins);
      }
    }
  } else {
    alert("Tie!");
  }
};

while (roundCounter < 5){
  gameround();
  roundCounter++;
}
*/


        // User choice
        var userChoice = prompt("Do you choose rock, paper or scissors?");
        if (! userChoice) {
            // User choice was undefined
            document.write("<p>Player 1, you cheated! Refresh this screen and fight like a man.</p>");
        } else {
            // Display user choice
            document.write("<p>Player 1:" + " " + userChoice + "</p>");
        }
        // Computer choice
        var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        // Display computer choice
        document.write("<p>Computer:" + " " + computerChoice + "</p>");
        // Compare user choice vs computer choice
        var compare = function(choice1,choice2) {
            if (choice1 === choice2) {
                return "It's a tie!";
            }
            if (choice1 === "rock") {
                if (choice2 === "scissors") {
                    // rock wins
                    return "You win!";
                } else {
                    // paper wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "paper") {
                if (choice2 === "rock") {
                    // paper wins
                    return "You win!";
                } else {
                    // scissors wins
                    return "You lose! Try again.";
                }
            }
            if (choice1 === "scissors") {
                if (choice2 === "rock") {
                    // rock wins
                    return "You lose! Try again.";
                } else {
                    // scissors wins
                    return "You win!";
                }
            }
        };
        // Run the compare function
        var results = compare(userChoice,computerChoice);
        // Display results
        document.write("<br><hr><br>" + results);
