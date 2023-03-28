//variables and querySelector elements
var startBtn = document.querySelector('#startBtn');
var questionEl = document.querySelector('#question');
var choicesEl = document.querySelector('#choices')
var timerEl = document.querySelector('#timer')
var questionSection = document.querySelector('#questionSection')
var endSection = document.querySelector('#endSection')
var questionUserIsOn = 0;
var timer;
var seconds = 59;
var interval;

//function to hide welcome page and show timer and question
function startQuiz() {
    startBtn.classList.add('hide');

    showQuestion()
    onScreenTimer()
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
        console.log('correct')
        questionUserIsOn = questionUserIsOn + 1;
        questionsLeft(questionUserIsOn);
    } else {
            choicesEl.innerHTML = '';
            console.log('wrong')
            questionUserIsOn = questionUserIsOn + 1;
            questionsLeft(questionUserIsOn);
            timeDeduction();
        
        //deduct 10 sec from timer

        console.log(questionUserIsOn)
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

//function that sends user to the end screen
function endQuiz (){

    questionSection.classList.add('hide')
    endSection.innerHTML = 'Quiz Over!';
}

//function that displays the timer when start button is hit! 
function onScreenTimer(){
    timerEl.classList.remove('hide')
    timer = setInterval(() =>{
        timerEl.innerHTML = 'Time Remaining - 00:'+ seconds + ' seconds!';
        seconds --;
    }, 1000)//1 second
}

//function that deducts time from user (called in checkAnswer)
function timeDeduction (){
    //runs if user gets question wrong!
    seconds = seconds - 10;
}

//event listeners - 
startBtn.addEventListener('click', startQuiz);