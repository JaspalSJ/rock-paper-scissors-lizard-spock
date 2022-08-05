/**
 * Create game variables
 */
let userscore = 0;
let computerscore = 0;
const userscoreS = document.getElementById("score");
const computerscoreS = document.getElementById("incorrect");

const rockD = document.getElementById("rock");
const paperD = document.getElementById("paper");
const scissorsD = document.getElementById("scissors");
const lizardD = document.getElementById("lizard");
const spockD = document.getElementById("spock");

/**
 * Random choice generator for computer player
 */
const getCompChoice = () => {
    let choices = ["rock", "paper", "scissors", "lizard", "spock"];
    let randNum = Math.floor(Math.random() * 5);
    return choices[randNum];
}

var compare = function(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return("Draw");
    }
}

//If the player chose rock...
if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
        alert("Rock wins!");
    } else if (computerChoice === "paper") {
        alert("Paper wins!");
    } else if (computerChoice === "lizard") {
        alert("Rock wins!");
    } else {
        alert("Spock wins!");
    }
}

//If the player chose paper...
else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
        alert("Scissors wins!");
    } else if (computerChoice === "rock") {
        alert("Paper wins!");
    } else if (computerChoice === "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}

//If the player chose scissors...
else if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
        alert("Scissors wins!");
    } else if (computerChoice === "rock") {
        alert("Rock wins!");
    } else if (computerChoice === "lizard") {
        alert("Scissors wins!");
    } else {
        alert("Spock wins!");
    }
}

//If the player chose lizard...
else if (playerChoice === "lizard") {
    if (computerChoice === "scissors") {
        alert("Scissors wins!");
    } else if (computerChoice === "rock") {
        alert("Rock wins!");
    } else if (computerChoice === "paper") {
        alert("Lizard wins!");
    } else {
        alert("Lizard wins!");
    }
}

//If the player chose spock...
else if (playerChoice === "spock") {
    if (computerChoice === "scissors") {
        alert("Spock wins!");
    } else if (computerChoice === "rock") {
        alert("Spock wins!");
    } else if (computerChoice === "lizard") {
        alert("Lizard wins!");
    } else {
        alert("Paper wins!");
    }
}
compare(playerChoice, computerChoice);