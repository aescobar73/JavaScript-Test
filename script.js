// start game with question: Do you want to play a game? Yes or no? Clickable
/* create some variable to pull from the html
hide the questions at first. First prompt should be, if you want to play a game.
*/

// var startGame = confirm("Do you want to play a game?"); 


// 1) Write a question and have you click the answer, if wrong you will be prompt that it is the wrong answer, if it is correct itll display correct.
var message = "You are correct!"
var wrongMessage = "Incorrect"
var answerButton = document.querySelector('#right');
var showNext = document.querySelector('.hide')
var getText = document.querySelector('#yay')
var wrongText = document.querySelector('#nay')
var answerOne = document.querySelectorAll('.button')

function setCorrectText() {
    getText.textContent = message;
}

function setWrongText () {
    wrongText.textContent = wrongMessage;
}

answerButton.addEventListener("click", function() {

    if (answerOne = "Answer2") {
        console.log('You are correct');
        setCorrectText();
        showNext.classList.remove('hide');

    } else {
        console.log('Incorrect');
        setWrongText();
    }
   
    
})