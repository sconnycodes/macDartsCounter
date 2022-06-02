const playerScore = document.querySelector("#playerMainCount")

const buttons = document.querySelectorAll("button");

buttons.forEach(item => {
    item.addEventListener("click", event => {
    const {target} = event;
    const {value} = target;
    
    if (!target.matches("button")){
        return
    } else {
        // calculator.parseInput(value)
        console.log(value)
    }
    })
})

const currentTurn = document.querySelector("#currentTurnScore")

