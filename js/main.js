//grabbing mainScore display and currentTurn display
const mainScoreDisplay = document.querySelector("#playerMainCount")
const currentTurnScoreDisplay = document.querySelector("#currentTurnScore")


// Setting up event listeners on buttons.
const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    item.addEventListener("click", event => {
    const {target} = event;
    const {value} = target;
    
    if (value == "back"){
    //     return to previous playerScore
        testGame.back()
    } else if (value == "next") {
    //      deduct current turn score from playerScore
        testGame.next()
    } else {
        // add value of button to currentScore
        currentTurnScoreDisplay.innerText += value
    }
    })
});


// game setup as object
class Game {
    constructor(startNumber) {
        this.mainScore = startNumber || 501,
        this.currentTurn = 0,
        this.prevTurn = 0
        mainScoreDisplay.innerText = this.mainScore
    }

    //function to run when next is clicked
    next(){
        //sub currentTurn score from mainScore and update display
        this.currentTurn = parseInt(currentTurnScoreDisplay.innerText)
        // check number is valid (180 and under)
        if (this.currentTurn > 180 || this.currentTurn > this.mainScore){
            this.updateMainScore()
            alert("Invalid score")
        } else {
        // parseInt(currentTurnScore.innerText)
        this.prevTurn = this.currentTurn
        this.mainScore -= this.currentTurn
        this.currentTurn = 0
        this.updateMainScore()
        
        }
    }

    //function to run when back is clicked
    back(){
        //add prev turn score back to main and update display
        
        this.mainScore += this.prevTurn
        this.updateMainScore()
    }

    updateMainScore(){
        currentTurnScoreDisplay.innerText = ""
        mainScoreDisplay.innerText = this.mainScore
    }
};

let testGame = new Game()