const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS"

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
        input = prompt("Make a choice: ", "ROCK || PAPER || SCISSORS");
        correctInput = validInput(input);
        if(correctInput === false){
            console.log("Only ROCK, PAPER or SCISSORS are valid inputs");
        }
    } while (!correctInput);

    return input;
}