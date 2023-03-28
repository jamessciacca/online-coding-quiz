// reach into the html and grabe the start button
// create a var that holds the html button obj
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
// sanity check console.log
console.log(startBtn)


console.log(questions)
console.log(questions)
console.log(questions[questionUserIsOn])

//creating timer element 
function onScreenTimer(){
    timerEl.classList.remove('hide')
    timer = setInterval(() =>{
        timerEl.innerHTML = 'Time Remaining - 00:'+ seconds + ' seconds!';
        seconds --;
    }, 1000)//1 second
}

function timeDeduction (){
    //runs if user gets question wrong!
    seconds = seconds - 10;
}

function startQuiz() {
    startBtn.classList.add('hide');
    //used title as i to represent the index!
    // for(title = 0; title < questions.length; title++){
    //setting the inner text of HTML id question to the title of the question
    // }

    showQuestion()
    onScreenTimer()
}

function showQuestion() {
    questionEl.innerText = questions[questionUserIsOn].title;
    for (choice = 0; choice < 4; choice++) {
        var choiceBtn = document.createElement('button');
        choiceBtn.innerHTML = questions[questionUserIsOn].choices[choice];
        //pushing the created button elements to the screen
        //listening for a button click and running check Answer function
        choiceBtn.addEventListener('click', checkAnswer)
        choicesEl.append(choiceBtn);

        //check to see if there are questions left
    }

}

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

function questionsLeft (questionUserIsOn){
    if(questionUserIsOn < 5){
        showQuestion();
    }else{
        endQuiz();
    }
}

function endQuiz (){
    
    questionSection.classList.add('hide')
    endSection.innerHTML = 'Quiz Over!';
}
console.log(questionUserIsOn)
// function endQuiz (){
//     //send user to the end of the quiz with a page to enter initials 
// }
//i need to check the users answer by comparing the selected button with the answer in the questions array
//i need to figure out which button is selected and compare it to the correct answer

//create if statement comparing user answer with correct answer












// listen for a click
// addeventlistener ???
// when the click is heard
startBtn.addEventListener('click', startQuiz)
    // alert('bacon'); // sanity check
    // the button (section)
//     var startSection = document.querySelector('#startSection');
//     // console.log(startSection)
//     // console.dir(startSection)
//     startSection.style.display='none'
//     // ** question section (div)
//     // ** put a question on the screen
//     // create the element
//     var questionEl = document.createElement('h2')
//     console.dir(questionEl) // sanity check
//     // add some content to the element
//     questionEl.textContent = 'What is the best food?'
//     // grab the section you want to add the element to
//     // append the element to that parent section
//     document.querySelector('#questionSection').append(questionEl)


//     var choiceBtn1 = document.createElement('button')
//     var choiceBtn2 = document.createElement('button')
//     var choiceBtn3 = document.createElement('button')


//     console.log(choiceBtn1)
//     console.log(choiceBtn2)
//     console.log(choiceBtn3)


//     document.querySelector('#questionSection').append(choiceBtn1)
//     document.querySelector('#questionSection').append(choiceBtn2)
//     document.querySelector('#questionSection').append(choiceBtn3)


//     // add event listeners to each of those buttons (w/ named function?)
//     choiceBtn1.addEventListener('click', checkAnswer)
//     choiceBtn2.addEventListener('click', checkAnswer)
//     choiceBtn3.addEventListener('click', checkAnswer)
// })






//use a for loop to create button elements based on the array of questions and answers!






// function checkAnswer(event) {
//     // find out out which button was clickded
//     var buttons = document.getElementsByTagName('button')
//     var buttonsCount = buttons.length;
//     for (var i = 0; i <= buttonsCount; i += 1){
//         buttons[i].onclick = function(e){
//             alert(this.id);
//             //how do I get this to compare to a question array
//         };
//     }
    // grab the textcontent of that button
    // compare it to the correct answer


    // clear the questions section and buuild a new quest section