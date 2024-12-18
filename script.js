// Initialize game variables
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// DOM elements
const guessForm = document.getElementById('guessForm');
const userGuess = document.getElementById('userGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');

// Event listener for the form submission
guessForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const guess = Number(userGuess.value);
    attempts++;

    // Check if the guess is correct
    if (guess === secretNumber) {
        feedback.textContent = `thanks for playing ${attempts} attempts.`;
        feedback.style.color = 'green';
        attemptsDisplay.textContent = '';
        resetButton.classList.remove('hidden');
    } else if (guess > secretNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'red';
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    userGuess.value = '';
    userGuess.focus();
});

// Event listener for the reset button
resetButton.addEventListener('click', function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = '';
    attemptsDisplay.textContent = '';
    resetButton.classList.add('hidden');
    userGuess.value = '';
    userGuess.focus();
});
