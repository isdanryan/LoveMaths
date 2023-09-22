// Wait for page to load before running the game
//Get buttons and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked subimt!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game loop that is called after the game loads
 * and when the user's answer has been processed
 */
function runGame(){
    // Create random numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num1 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}