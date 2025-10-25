const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS"

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const intToChoiceMap = new Map([
        [0, rock],
        [1, paper],
        [2, scissors]
    ]);
    const choice = Math.floor(Math.random() * 3);

    return intToChoiceMap.get(choice);
}

function validInput(input){
    return (input === rock) || (input === paper) || (input === scissors)
}

function getHumanChoice() {
    let correctInput;
    let input;
    do {
        input = String.prototype.toUpperCase(prompt("Make a choice: ", "ROCK || PAPER || SCISSORS"));
        correctInput = validInput(input);
        if(correctInput === false){
            console.log("Only ROCK, PAPER or SCISSORS are valid inputs");
        }
    } while (!correctInput);

    return input;
}

function isWinner(humanChoice, computerChoice){
    const beatingRules = new Map([
        [rock, scissors],
        [paper, rock],
        [scissors, paper]
    ]);

    switch (computerChoice) {
        case beatingRules.get(humanChoice):
            return 1;
        case humanChoice:
            return 0;
        default:
            return -1;
    }
}

function playRound(humanChoice, computerChoice){
    switch (isWinner(humanChoice, computerChoice)) {
        case 1:
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
            break;
        case 0:
            console.log("It's a tie!");
            break;
        case -1:
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
            break;
        default:
            console.log("idk what happened :)");
            break;
    }
}