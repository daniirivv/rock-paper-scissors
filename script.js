function getComputerChoice(){
    const intToChoiceMap = new Map([
        [0, "rock"],
        [1, "paper"],
        [2, "scissors"]
    ]);
    const choice = Math.floor(Math.random() * 3);
    
    return intToChoiceMap.get(choice);
}