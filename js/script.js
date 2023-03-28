//variables and querySelector elements
var startBtn = document.querySelector('#startBtn')
var startSection = document.querySelector('#startSection');
var questionEl = document.querySelector('#question');
var choicesEl = document.querySelector('#choices')
var timerEl = document.querySelector('#timer')
var questionSection = document.querySelector('#questionSection')
var endSection = document.querySelector('#endSection')
var correctOrWrong = document.querySelector('#correctorwrong')
var timerDiv = document.querySelector('.timerDiv')
var scorecardDiv = document.querySelector('#scorecard')
var scoreEl = document.querySelector('#score')
var finalScore = document.querySelector('#finalscore')
var questionUserIsOn = 0;
var timer;
var seconds = 59;
var interval;
var score = -1;

//function to hide welcome page and show timer and question
function startQuiz() {
    startSection.classList.add('hide');

    showQuestion()
    onScreenTimer()
    keepScore()
}

//function that creates both the title and choices to screen
function showQuestion() {
    questionEl.innerText = questions[questionUserIsOn].title;
    for (choice = 0; choice < 4; choice++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.innerHTML = questions[questionUserIsOn].choices[choice];
        //pushing the created button elements to the screen
        //listening for a button click and running check Answer function
        choiceBtn.addEventListener('click', checkAnswer)
        choicesEl.append(choiceBtn);
    }
}

//function that checks users answer and returns wrong or correct to screen!
function checkAnswer(event) {
    //compare the users selection with the actual answer from the question
    var userChoice = event.srcElement.innerText;

    if (userChoice === questions[questionUserIsOn].answer) {
        choicesEl.innerHTML = '';
        //prints correct to screen
        correctOrWrong.innerText = 'Correct!'
        questionUserIsOn = questionUserIsOn + 1;
        questionsLeft(questionUserIsOn);
        //if user gets the question right I call keepScore
        keepScore();
    } else {
        choicesEl.innerHTML = '';
        //prints wrong to screen
        correctOrWrong.innerText = 'Wrong!'
        questionUserIsOn = questionUserIsOn + 1;
        questionsLeft(questionUserIsOn);
        //deducts 10 sec from timer
        timeDeduction();
    }
}

//function that checks if there are any questions left, if not it will call end quiz!
function questionsLeft (questionUserIsOn){
    if(questionUserIsOn < 5){
        showQuestion();
    }else{
        endQuiz();
    }
}

//a function that ads a point when the user answers the question right, also displays the current score to the screen!
function keepScore(){
    scorecardDiv.classList.remove('hide')
    score = score + 1;
    scoreEl.innerHTML = score;
}


//function that sends user to the end screen
function endQuiz(){
    questionSection.classList.add('hide')
    endSection.classList.remove('hide')
    //prints final score
    finalScore.innerHTML = score;
}

//function that displays the timer when start button is hit! 
function onScreenTimer(){
    timerDiv.classList.remove('hide')
    timer = setInterval(() =>{
        timerEl.innerHTML = seconds;
        seconds --;

        //if user runs out of time I want to stop timer and send user to end screen!
        if(seconds <= 0){
            clearInterval(timer);
            endQuiz();
        }

    }, 1000)//1 second
}

//function that deducts time from user (called in checkAnswer)
function timeDeduction (){
    //runs if user gets question wrong!
    seconds = seconds - 10;
}

//event listeners - 
startBtn.addEventListener('click', startQuiz);