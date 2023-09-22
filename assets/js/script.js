// Wait for page to load before running the game
//Get buttons and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game loop that is called after the game loads
 * and when the user's answer has been processed
 */
function runGame(gameType){
    // Create random numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unkown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Well done! You got it right! =)"); 
        incrementScore();      
    } else {
        alert(`Aww, that's wrong. You put ${userAnswer}, but the correct answer is ${calculatedAnswer[0]}.`);
        incrementWrongAnswer();
    }
}

function calculateCorrectAnswer() {
    let opperand1 = parseInt(document.getElementById('opperand1').innerText);
    let opperand2 = parseInt(document.getElementById('opperand2').innerText);
    let opperator = document.getElementById("opperator").innerText;

    if (opperator === "+") {
        return [opperand1 + opperand2, "addition"];
    } else {
        alert(`Unknown opperator type: ${opperator}`);
        throw `Unknown opperator type: ${opperator}. Aborting!`;
    }

}


function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldIncorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldIncorrect;
}

function displayAdditionQuestion(opperand1, opperand2) {
    document.getElementById("opperand1").textContent = opperand1;
    document.getElementById("opperand2").textContent = opperand2;
    document.getElementById("opperator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}