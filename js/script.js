// reach into the html and grabe the start button
// create a var that holds the html button obj
var startBtn = document.querySelector('#startBtn');
var questionEl = document.querySelector('#question');
var choicesEl = document.querySelector('#choices')
// sanity check console.log
console.log(startBtn)

console.log(questions)
console.log(questions.choices)

//questions[i].title

function startQuiz(){
    for(title = 0; title < questions.length; title++){
        questionEl.innerText = questions[title].title;

        for(choice = 0; choice < 4; choice++){
            var button = document.createElement('button');
            button.setAttribute('value', questions[title].choices[choice]);
            choicesEl.innerText = button;
        }

    }
}





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
