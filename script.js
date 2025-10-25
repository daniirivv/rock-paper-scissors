function getComputerChoice() {
    const intToChoiceMap = new Map([
        [0, rock],
        [1, paper],
        [2, scissors]
    ]);
    const choice = Math.floor(Math.random() * 3);

    return intToChoiceMap.get(choice);
}

function getHumanChoice() {
    return prompt("Make a choice").toUpperCase();
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

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    switch (isWinner(humanChoice, computerChoice)) {
        case 1:
            alert("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
            break;
        case 0:
            alert("It's a tie!");
            break;
        case -1:
            alert("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
            break;
        default:
            alert("idk what happened :)");
            break;
    }
}

const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS"

let humanScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++){
    playRound();
}