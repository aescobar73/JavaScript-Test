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
var answerOne = true;




function setCorrectText() {
    getText.textContent = message;
}

function setWrongText () {
    wrongText.textContent = wrongMessage;
}


answerButton.addEventListener("click", function() {
    if (answerOne) {
        console.log('You are correct');
        setCorrectText();
        showNext.classList.remove('hide');
    
    } else {
        console.log('Incorrect');
        setWrongText();
    }


})

// *second question consist of the same thing as the top, with variables changed. Before we do that://
 // we need the next button to have an evenet listener, so that when click it runs the function of hiding question 1, and showing question 2
 //while disappearing as well (get from code above)

 var questionTwo = document.querySelector('.hide2');
 var questionOne = document.querySelector('.container');
 var answerButton2 = document.querySelector('#right2');
 var getText2 = document.querySelector('#yay2')
 var showNext2 = document.querySelector('.hidedos')

 showNext.addEventListener('click', function() {
    questionTwo.classList.remove('hide2')
    document.querySelector('.container').style.display = 'none';


 })

 function setCorrectText2() {
    getText2.textContent = message;
}

 answerButton2.addEventListener("click", function() {
    if (answerOne) {
        console.log('You are correct');
        setCorrectText2();
        showNext2.classList.remove('hidedos');
    
    } else {
        console.log('Incorrect');
        setWrongText();
    }

 })

 