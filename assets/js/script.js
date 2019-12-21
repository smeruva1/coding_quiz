// create variables to reference all DOM elements we're working with

// time-left
var timeLeftSpanEl = document.querySelector("#time-left");

// show current score
var currentScoreSpanEl = document.querySelector("#current-score");

// start game button
var startBtnEl = document.querySelector("#start-game-btn");
// start-screen element
var startScreenDivEl = document.querySelector("#start-screen");
// quiz-content
var quizContentDivEl = document.querySelector("#quiz-content");

// post-game-screen
var pstGameScreenDivEl = document.querySelector("#post-game-screen");
// user-score
var userScoreSpanEl = document.querySelector("#user-score");
// play-again-btn
var playAgainBtnEl = document.querySelector("#play-again-btn");

// create variables for game logic
// timerIntervalId
var timerIntervalId;
// score
var score = 0;
// secondsLeft
var secondsLeft = 0;

startScreenDivEl.classList.remove("hide");


// create function to start game
function startBtnHandler() {

  console.log("hi from Start Button");
  // prevent a timer running twice
  clearInterval(timerIntervalId);

  // set secondsLeft variable starting time (300 seconds = 5 minutes)
  var secondsLeft = 300;
  console.log(secondsLeft);

  // write secondsLeft to the page
  timeLeftSpanEl.textContent = secondsLeft;
  // reset score to 0
  score = 0;
  console.log(score);

  // write score to the page (optional)
  currentScoreSpanEl.textContent = score;

  // hide start-screen element && post-game-screen
  startScreenDivEl.classList.add("hide");
  pstGameScreenDivEl.classList.add("hide");
  // show quiz-content element
  quizContentDivEl.classList.remove("hide");

  
  // set timerIntervalId to setInterval function that decrements secondsLeft every second
  timerIntervalId = setInterval(function () {
    secondsLeft--;
    // write secondsLeft to the page
  timeLeftSpanEl.textContent = secondsLeft;
  
    if (secondsLeft <= 0) {
      stopGame();
    }
  }, 1000);

  // display first question
displayQuestion(0);

}

// create function to display a question and possible choices
function displayQuestion(questionIndex) {
  // check if questionIndex in questions array doesn't exist
  if (!questions[questionIndex]) {
    // stop game, we've hit last question
    return stopGame();
  }

  // get questions[questionIndex]
  // print question to the page
  // use data attribute to know which index the question is
  // loop through choices and print out choices to the page (make them buttons)

}

// create function to handle users answering
// use event delegation to make sure button was clicked
// read data attribute of what question we answered (index)
// check to see if choice picked is same as questions correct answer
// if yes, increase score++
// if no, subtract time from secondsLeft

// get index of next question (this question's index + 1)
// run displayQuestion(nextQuestionIndex)



// create a function to stop the game (either by answering all the questions or time has run out)
function stopGame() {
  // clearInterval() to stop the timer
  clearInterval(timerIntervalId);
  // hide quiz-content element
  quizContentDivEl.classList.add("hide");
  // show post-game-screen
  pstGameScreenDivEl.classList.remove("hide");
  // print out user score
  userScoreSpanEl.textContent = score;
}


// add event listeners
// start game button (for starting the game)
startBtnEl.addEventListener('click', startBtnHandler);
// quizcontent (for answering a question) -> use event delegation
quizContentDivEl.addEventListener('click', displayQuestion);
  // play again button (for starting the game)

