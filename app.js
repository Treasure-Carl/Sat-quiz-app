let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container-mid");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");

let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

// 10 questions with option and answer aray
const quizArray = [
  {
    id: "0",
    question: "Greek yogurt business have found many methods of controlling and eliminating most environmental threats Given these solutions as well as the many health benefits of the food, the advantages of Greek yogurt outdo the potential drawbacks of its production",
    options: [
      "",
      " NO CHANGE",
      "defeat",
      "outperform",
      "Outweigh"
    ],
    correct: "No CHANGE",
  },
  {
    id: "1",
    question:
      "Logical Comparism questions; There are others worse off than___",
    options: ["Them", "We", "Us", "They"],
    correct: "them",
  },
  {
    id: "2",
    question:
      "You gave them more cookies than you ____?",
    options: ["we", "us", "they", "You wanted to",],
    correct: "us",
  },
  {
    id: "3",
    question:
      "Johnson was more gifted in languages than ___",
    options: ["they", "them", "we", "us"],
    correct: "they",
  },
  {
    id: "4",
    question: "This is the School_____ owner died",
    options: [
      "whose",
      "which",
      "that",
      "whom",
    ],
    Correct: "Which",
  },
  {
    id: "5",
    question: "No sooner the rain begun ___ the Students left",
    options: [
      "who",
      "than",
      "that",
      "before",
    ],
    Correct: "than",
  },
  {
    id: "6",
    question: "Thay are trilled as ____ by the news",
    options: [
      "we",
      "us",
      "we are",
      "anything",
    ],
    Correct: "we",
  },
  {
    id: "7",
    question: "Kati is as tall as ___:",
    options: [
      "we",
      "him",
      "she",
      "them",
    ],
    correct: "we",
  },
  {
    id: "8",
    question: "The thon of event pleases Nina as much as ___",
    options: ["me", "I", "them", "i'd"],
    correct: "me",
  },
  {
    id: "9",
    question: "The complaint was meant for you more than ____",
    options: [
      "them",
      "they",
      "I",
      "us",
    ],
    correct: "them",
  },
  {
    id: "10",
    question: "They will hurt you more than ____",
    options: [
      "them",
      "me",
      "I",
      "us",
    ],
    correct: "me",
  },
];
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;

    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      userScore.innerHTML =
        "Your Score is " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + "Question";

      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};
function quizCreater() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    countOfQuestion.innerHTML = 1 + " 0f " + quizArray.length + " Question";

    let question_Div = document.createElement("p");
    question_Div.classList.add("question");
    question_Div.innerHTML = i.question;
    div.appendChild(question_Div);

    div.innerHTML += `
            <button class="option_div" onclick="checker(this)">
            ${i.options[0]}</button>
            <button class="option_div" onclick="checker(this)">
            ${i.options[1]}</button>
            <button class="option_div" onclick="checker(this)">
            ${i.options[2]}</button>
            <button class="option_div" onclick="checker(this)">
            ${i.options[3]}</button>
            `;

    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll("option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");

    options.forEach((element) => {
      if ((element.innerText = quizArray[questionCount].correct)) {
        element.classList.add("correct");
      }
    });
  }
  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreater();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
