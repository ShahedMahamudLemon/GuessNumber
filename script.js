"use strict";
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScoreShow = 0;

let userInput;
document.querySelector(".checkbtn").addEventListener("click", function () {
  userInput = Number(document.querySelector(".InputField").value);

  if (!userInput) {
    document.querySelector(".message").textContent = "No Number Rendered";
  } else if (userInput === randomNumber) {
    document.querySelector(".message").textContent = "Number Matched ✔";

    document.querySelector(".guessNumber").textContent = randomNumber;

    document.querySelector(".totalScore").textContent = currentScore;

    document.querySelector("body").style.backgroundColor = "lightgreen";

    if (highScoreShow < currentScore) {
      highScoreShow = currentScore;
    }
    document.querySelector(".highScore").textContent = highScoreShow;
  } else if (userInput != randomNumber) {
    currentScore--;
    if (currentScore >= 1) {
      if (userInput > randomNumber) {
        document.querySelector(".message").textContent = "Too HIGH ⬆⬆";

        document.querySelector(".totalScore").textContent = currentScore;
      } else if (userInput < randomNumber) {
        document.querySelector(".message").textContent = "Too LOW ⬇⬇";
        document.querySelector(".totalScore").textContent = currentScore;
      }
    } else if (currentScore === 0) {
      document.querySelector(".message").textContent = "You Lost the game 😢😢";
      document.querySelector(".totalScore").textContent = "0";
    }
  }
});
document.querySelector(".reset").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  currentScore = 20;

  document.querySelector(".InputField").value = "";
  document.querySelector(".message").textContent = "Start Guessing...🤞🤞";
  document.querySelector(".totalScore").textContent = "20";
  document.querySelector("body").style.backgroundColor = "whitesmoke";
  document.querySelector(".guessNumber").textContent = "?";
});
