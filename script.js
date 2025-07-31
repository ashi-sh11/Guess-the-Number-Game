var randomNumber = parseInt(Math.random() * 100 + 1);
var remainingGuess = document.querySelector(".lastResult");
var guessSlot = document.querySelector(".guesses");
var submit = document.querySelector("#submit");
var input = document.querySelector("#number");
var lowOrHi = document.querySelector(".lowOrHi");
var starOver = document.querySelector("#result");

const p = document.querySelector("p");
let prevGuess = [];
let numGuess = 1;
let playGames = true;

if (playGames) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("PLease Enter the valid number");
  } else if (guess < 1) {
    alert("PLease Enter the number more than 1");
    input.value = "";
  } else if (guess > 100) {
    alert("PLease Enter the number less than 100");
    input.value = "";
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMassage(`Game over Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMassage(`The number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMassage(`The number is TOOO high`);
  }
}

function displayGuess(guess) {
  input.value = "";
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massage) {
  lowOrHi.innerHTML = `<h3>${massage}</h3>`;
}

function endGame() {
  input.innerHTML = '';
  input.setAttribute("disabled",'');
  p.classList.add("button");
  p.innerHTML = `<h2 id="newgame" >newGame</h2>`;
  starOver.appendChild(p);
  p.style.color='red';
  playGames = false;
  newGame();
}

function newGame() {
  const startButton = document.querySelector("#newgame");
  startButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = `${11 - numGuess}`;
    input.removeAttribute("disabled");
    starOver.removeChild(p);
    lowOrHi.innerHTML = ""
    playGames = true;
  });
}
