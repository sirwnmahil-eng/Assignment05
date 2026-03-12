// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// Our code will break the game into 3 phases:

// User makes a choice. How will we collect the user’s choice?
// Computer makes a choice. How will we collect the computer’s choice?
// A conditional that determines who wins.
// You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

// Begin by prompting the user for their choice.
// Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
// Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
// Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
// What if the result ends in a tie? Figure out how to handle that as well.
// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.

let userChoice = prompt("Please enter your choice: rock, paper, or scissors.");

let computerChoice = Math.floor(Math.random() * 3);

if (computerChoice === 0) {
  computerChoice = "rock";
} else if (computerChoice === 1) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  alert("Invalid input! Please enter rock, paper, or scissors.");
}

if (userChoice === computerChoice) {
  alert("It's a tie!");
} else if (
  (userChoice === "rock" && computerChoice === "scissors") ||
  (userChoice === "paper" && computerChoice === "rock") ||
  (userChoice === "scissors" && computerChoice === "paper")
) {
  alert("You win!");
} else {
  alert("Computer wins!");
}
