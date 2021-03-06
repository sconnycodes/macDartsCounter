//grabbing mainScore display and currentTurn display
const mainScoreDisplay = document.querySelector("#playerMainCount")
const currentTurnScoreDisplay = document.querySelector("#currentTurnScore")


// Setting up event listeners on buttons.
const buttons = document.querySelectorAll("button");
buttons.forEach(item => {
    item.addEventListener("click", event => {
    const {target} = event;
    const {value} = target;
    //check which button is pressed to trigger relevant function    
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
        mainScoreDisplay.innerText = this.mainScore,
        // keep track of scores in leg & number of darts taken
        this.legScores = [],
        this.legDartTotal = 0,
        // once currentgame is completed (mainscore 0) then add legscores & dartTotal to game data eg. 
        // [ {legsScores, legdartTotal} ] and reset ready for next game.
        this.gameData = []
        // when all games are completed a submit button will then send this gameData to the database to be used for stat tracking
    }

    //function to run when next is clicked
    next(){
        //sub currentTurn score from mainScore and update display
        this.currentTurn = parseInt(currentTurnScoreDisplay.innerText)
        // check number is valid (180 & below but without being more than total remaining or leaving a mainscore of 1)
        if (this.currentTurn > 180 || this.currentTurn > this.mainScore || (this.mainScore - this.currentTurn == 1) || !this.currentTurn){
            this.updateMainScore()
            alert("Invalid score")
        } else {
            // add currentTurn score to array of scores
        this.legScores.push(this.currentTurn)
            //calc mainscore
        this.mainScore -= this.currentTurn
        }
        //check if main is 0 and end game
        this.gameEndCheck()
    }

    //function to run when back is clicked
    back(){
        //add prev turn score back to main and update display
        if (this.mainScore < 501){
            this.mainScore += this.legScores.pop()
        }
        this.legDartTotal -= 3
        this.updateMainScore()
    }

    //update score displays during turns
    updateMainScore(){
        currentTurnScoreDisplay.innerText = ""
        mainScoreDisplay.innerText = this.mainScore
    }

    // check if score is 0 and push current game to gameData if so.
    gameEndCheck(){
        if (this.mainScore == 0){
            // last turn may take fewer than 3 darts so prompt for this & number of darts attempted on double
            let turnDarts = +prompt("How many darts used for checkout?")
            let doubleDarts = +prompt("How many darts used on double?")
            this.legDartTotal += turnDarts
            this.gameData.push({
                legScores: this.legScores.map(x => x), 
                legDartTotal: this.legDartTotal, 
                doubleDarts: doubleDarts 
                })
            this.updateMainScore()
            // this.restartGame()
            this.restartGame()
            
            // in here add in post to send gameData once game is complete (best of 11 legs for test build)

        } else {
            //each score that doesn't result in mainscore 0 will add 3 darts to total
            this.legDartTotal += 3
            this.currentTurn = 0
            this.updateMainScore()
        }
    }

    // restart game function resets scores and clear legscores and leg dart totals
    restartGame(){
        let restart = confirm("Start new game?")
        if (restart){
        this.mainScore = 501
        this.currentTurn = 0
        this.legDartTotal = 0
        this.legScores.splice(0, this.legScores.length)
        this.updateMainScore()
        }
        
    }
};

let testGame = new Game()