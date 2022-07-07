var startGame = confirm("Do you want to play a game?"); 
// timer start 30 seconds
var timer = document.querySelector('.time');

var secondsLeft = 30;

function setTime() {
    var countDown = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds "
    if(secondsLeft === 0) {
        clearInterval(countDown);
        sendMessage()
    }
    
    }, 1000)
    console.log('countDown', countDown)
}

function sendMessage(){
    timer.textContent = " Game Over ";
    
    
}

setTime()



var message = "You are correct!"
var wrongMessage = "Incorrect"
var answerButton = document.querySelector('#right');
var showNext = document.querySelector('#nxtbtn')
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

 var questionTwo = document.querySelector('.container2');
 var questionOne = document.querySelector('.container');
 var answerButton2 = document.querySelector('#right2');
 var getText2 = document.querySelector('#yay2')
 var showNext2 = document.querySelector('.hidedos')
 var showButton = document.querySelector('#nxtbtn')

 showButton.addEventListener('click', function() {
    questionTwo.classList.remove('hide2');
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
 

//  third question. 

// We need to make sure that when we click the next button it
// clears the second question, and then brings up the third question
// when we click the right answer (3) the 

var questionThree = document.querySelector('.container3');
var questionDos = document.querySelector('.container2');
var showButton2 = document.querySelector('#nxtbtn2')
var answerButton3 = document.querySelector('#right3');
 var getText3 = document.querySelector('#yay3');
 var showNext3 = document.querySelector('.hidetres');



showButton2.addEventListener('click', function() {
    questionThree.classList.remove('hide3')
    document.querySelector('.container2').style.display = 'none';

})

function setCorrectText3() {
    getText3.textContent = message;
}

 

 answerButton3.addEventListener("click", function() {
    if (answerOne) {
        console.log('You are correct');
        setCorrectText3();
        showNext3.classList.remove('hidetres');
    
    } else {
        console.log('Incorrect');
        setWrongText();
    }

 })


// question 4. Create variables to pull question 4 and hide question 3 when the next button is clicked.

var questionFour = document.querySelector('.container4');
var question3 = document.querySelector('.container3');
var showButton3 = document.querySelector('#nxtbtn3');
var answerButton4 = document.querySelector('#right4');
var getText4 = document.querySelector('#yay4');
var showNext4 = document.querySelector('.hidecuatro');

showButton3.addEventListener('click', function() {
    questionFour.classList.remove('hide4')
    document.querySelector('.container3').style.display = 'none';

})

function setCorrectText4() {
    getText4.textContent = message;
}

answerButton4.addEventListener("click", function() {
    if (answerOne) {
        console.log('You are correct');
        setCorrectText4();
        showNext4.classList.remove('hidecuatro');
    
    } else {
        console.log('Incorrect');
        setWrongText();
    }

 })


// question 5. Create variables to pull question 5 and hide question 4 when the next button is clicked.

var questionFive = document.querySelector('.container5');
var question4 = document.querySelector('.container4');
var showButton4 = document.querySelector('#nxtbtn4');
var answerButton5 = document.querySelector('#right5');
var getText5 = document.querySelector('#yay5');
var showNext5 = document.querySelector('.hidecinco');
 
showButton4.addEventListener('click', function() {
    questionFive.classList.remove('hide5')
    document.querySelector('.container4').style.display = 'none';

})

function setCorrectText5() {
    getText5.textContent = message;
}

answerButton5.addEventListener("click", function() {
    if (answerOne) {
        console.log('You are correct');
        setCorrectText5();
        showNext5.classList.remove('hidecinco');
    
    } else {
        console.log('Incorrect');
        setWrongText();
    }

 })


//  when finish button is clicked, it hides question 5, and then has a prompt come up that allows you to enter you name and then it 
// show back on the screen
var finalInput = document.querySelector('.container6');
var question5 = document.querySelector('.container5');
var showButton6 = document.querySelector('#nxtbtn5');


showButton6.addEventListener('click', function() {
    finalInput.classList.remove('hide6')
    document.querySelector('.container5').style.display = 'none'
})