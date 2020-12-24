let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if(guessCount === 1) {
        guesses.textContent = 'Previous guesses: '
    }
    guesses.textContent += userGuess + ', ';

    if(userGuess === randomNumber) {
        lastResult.textContent = 'Congrats, You guessed the right number! Please feel free to play again.'
        lastResult.style.backgroundColor = 'green'
        lowOrHi.textContent = '';
        setGameOver();
    } else if(guessCount === 10) { 
        lastResult.textContent = 'GAME OVER!!! Please try again.'
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!'
        lastResult.style.backgroundColor = 'red'
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'That number was too low!'
        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'That number was too high!'
        }
    } 

guessCount++;
guessField = ' ';
guessField.focus();

}
guessSubmit.addEventListener('click', checkGuess);
