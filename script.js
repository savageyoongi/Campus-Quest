
const startButton = document.querySelector("#start-button");
const answerButtons = document.querySelectorAll(".answer-button");


const feedback = document.querySelector("#feedback");
const scoreDisplay = document.querySelector("#score");
const discoveriesDisplay = document.querySelector("#discoveries");

// Game state: information the game remembers
let score = 0;
let discoveries = 0;
let gameStarted = false;
let questionCompleted = false;

// Start the game when the player clicks the button
startButton.addEventListener("click", function () {

    gameStarted = true;

    feedback.textContent = "Adventure started! Choose an answer below.";

    startButton.textContent = "Adventure Started";
    startButton.disabled = true;
});

// Handle clicks on each answer button
answerButtons.forEach(function (button) {

    button.addEventListener("click", function() {

        // Don't allow answers before the game starts
        if(!gameStarted) {
            feedback.textContent = "Click Start Exploring first"
            return;
        }

         // Don't allow repeated rewards for the same question
        if (questionCompleted) {
            return;
        }

        // Check whether this button represents the correct answer
        const isCorrect = button.dataset.correct === "true";

        if (isCorrect) {

            //update the game state
            score +=10;
            discoveries +=1;
            questionCompleted = true;

            // Update the numbers displayed on the page
            scoreDisplay.textContent = score;
            discoveriesDisplay.textContent = discoveries;

            // Show success feedback
            feedback.textContent = "Correct! You discovered the Chemistry Department New Building.";
        

        // Disable all answers after completing the question
         answerButtons.forEach(function (answerButton) {
                answerButton.disabled = true;
            });
        }

        else {
            feedback.textContent =
                "Not quite! Try another answer.";

        }
    });
});