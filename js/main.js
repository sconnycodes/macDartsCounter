//grabbing mainScore display and currentTurn display
const mainScoreDisplay = document.querySelector("#playerMainCount")
const currentTurnScoreDisplay = document.querySelector("#currentTurnScore")


// Setting up event listeners on buttons.
const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    item.addEventListener("click", event => {
    const {target} = event;
    const {value} = target;
    
    // if (value == "back"){
    //     return to previous playerScore
    // } else if (value == "next") {
    //      deduct current turn score from playerScore
    // } else {
        // add value of button to currentScore
        currentTurnScore.innerText += value
        console.log(value)
    // }
    })
});


// game setup as object
class Game {
    constructor(startNumber) {
        this.mainScore = startNumber || 501,
        this.currentTurn = 0,
        this.prevTurn = 0
    }
    
    //function to run when next is clicked
    next(){
        //sub currentTurn score from mainScore and update display
    }

    //function to run when back is clicked
    back(){
        //add prev turn score back to main and update display
    }
};