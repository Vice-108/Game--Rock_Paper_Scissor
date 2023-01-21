const choices = {
  rock: "👊",
  paper: "🤚",
  scissor: "✌",
};
//getting the container for the chosen options.
let ybox = document.getElementById("ybox");
let cbox = document.getElementById("cbox");
//getting the emojis.
let orock = document.querySelector("#orock");
let opaper = document.querySelector("#opaper");
let oscissor = document.querySelector("#oscissor");
//getting the points div
let yourscore = document.getElementById("yourscore");
let compscore = document.getElementById("compscore");
// settting the defeault score to 0and incrementing the score by 1 for the winner.
let yourcount = 0,
  compcount = 0;

// setting onclick listener
orock.addEventListener("click", () => {
  ybox.textContent = choices.rock;
  getComputerChoice();
  checkemoji();
});
opaper.addEventListener("click", () => {
  getComputerChoice();
  ybox.textContent = choices.paper;
  checkemoji();
});
oscissor.addEventListener("click", () => {
  getComputerChoice();
  ybox.textContent = choices.scissor;
  checkemoji();
});

// A function that generate random values b/w 0 - 2 with no value same as previous value.
let previousRandomNumber;
function getRandomNumber() {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 3);
  } while (randomNumber === previousRandomNumber);
  previousRandomNumber = randomNumber;
  return randomNumber;
}

// Function that generate random emoji as computer choice.
function getComputerChoice() {
  const choicesKeys = Object.keys(choices);
  const randomIndex = getRandomNumber();
  const randomKey = choicesKeys[randomIndex];
  const randomValue = choices[randomKey];
  // const cbox = document.getElementById("cbox");
  cbox.innerHTML = randomValue;
}

//Function that checks the equaltiy of the emoji of players and increase their points accordingly.
function checkemoji() {
  if (ybox.innerHTML === "" || cbox.innerHTML === "") {
    console.log("choosefirst");
  } else if (ybox.innerHTML === cbox.innerHTML) {
    console.log("its tie");
  } else if (ybox.innerHTML === "👊" && cbox.innerHTML === "✌") {
    ++yourcount;
    yourscore.innerHTML = yourcount;
    console.log("you win");
  } else if (ybox.innerHTML === "👊" && cbox.innerHTML === "🤚") {
    ++compcount;
    compscore.innerHTML = compcount;
    console.log("you lose");
  } else if (ybox.innerHTML === "🤚" && cbox.innerHTML === "👊") {
    ++yourcount;
    yourscore.innerHTML = yourcount;
    console.log("you win");
  } else if (ybox.innerHTML === "🤚" && cbox.innerHTML === "✌") {
    ++compcount;
    compscore.innerHTML = compcount;
    console.log("you lose");
  } else if (ybox.innerHTML === "✌" && cbox.innerHTML === "🤚") {
    ++yourcount;
    yourscore.innerHTML = yourcount;
    console.log("you win");
  } else if (ybox.innerHTML === "✌" && cbox.innerHTML === "👊") {
    ++compcount;
    compscore.innerHTML = compcount;
    console.log("you lose");
  }
  if (yourcount == 5 && compcount < yourcount) {
    alert("you win");
    resetScores();
  }
  if(compcount == 5 && yourcount < compcount){
    alert("you lose");
    resetScores();
  }
}

function resetScores() {
  if (yourcount == 5 || compcount == 5) {
    setTimeout(() => {
      yourcount = 0;
      compcount = 0;
      ybox.innerHTML = "?";
      cbox.innerHTML = "?";
      yourscore.innerHTML = yourcount;
      compscore.innerHTML = compcount;
      // alert("game over");
      console.log("Scores reset!");
    }, 100); // 2000ms = 2s
  }
}
