const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    answer: 3
  },
  {
    question: "Which tag is used to define a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: 1
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    answer: 2
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["class", "style", "font", "css"],
    answer: 1
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: 2
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "#", "/* */"],
    answer: 1
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
      "getElementByClassName",
      "querySelectorAll",
      "getElementById",
      "getElementsByTag"
    ],
    answer: 2
  },
  {
    question: "Which HTML tag is used to display an image?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answer: 1
  },
  {
    question: "Which CSS property is used to change background color?",
    options: ["color", "bgcolor", "background-color", "background-style"],
    answer: 2
  },
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    options: ["var", "int", "string", "float"],
    answer: 0
  },
  {
    question: "Which event occurs when a user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onload"],
    answer: 2
  },
  {
    question: "Which HTML tag is used to create an unordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: 1
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-style", "font-weight", "text-bold", "weight"],
    answer: 1
  },
  {
    question: "Which function is used to print something in the console?",
    options: ["print()", "log()", "console.log()", "alert()"],
    answer: 2
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["title", "alt", "src", "href"],
    answer: 1
  },
  {
    question: "Which CSS unit is relative to the screen size?",
    options: ["px", "em", "rem", "vw"],
    answer: 3
  },
  {
    question: "Which JavaScript method converts JSON to object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.object()"
    ],
    answer: 0
  },
  {
    question: "Which Bootstrap class makes a button blue?",
    options: [
      "btn-primary",
      "btn-success",
      "btn-info",
      "btn-dark"
    ],
    answer: 0
  },
    {
    question: "Which HTML tag is used to create a table?",
    options: ["<table>", "<tr>", "<td>", "<th>"],
    answer: 0
  },
  {
    question: "Which HTML tag defines a table row?",
    options: ["<table>", "<row>", "<tr>", "<td>"],
    answer: 2
  },
  {
    question: "Which CSS property is used to center a block element?",
    options: [
      "text-align: center",
      "margin: auto",
      "align: center",
      "position: center"
    ],
    answer: 1
  },
  {
    question: "Which CSS property is used to hide an element?",
    options: [
      "visibility: hidden",
      "display: none",
      "opacity: 0",
      "All of the above"
    ],
    answer: 3
  },
  {
    question: "Which JavaScript operator is used to compare both value and type?",
    options: ["==", "=", "===", "!="],
    answer: 2
  },
  {
    question: "Which JavaScript method is used to add an element at the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 0
  },
  {
    question: "Which JavaScript method removes the last element from an array?",
    options: ["shift()", "pop()", "push()", "slice()"],
    answer: 1
  },
  {
    question: "Which HTML tag is used to create a form?",
    options: ["<input>", "<form>", "<fieldset>", "<label>"],
    answer: 1
  },
  {
    question: "Which input type is used for passwords?",
    options: ["text", "hidden", "password", "secure"],
    answer: 2
  },
  {
    question: "Which CSS property is used to change the font?",
    options: ["font-family", "font-style", "font-weight", "text-style"],
    answer: 0
  },
  {
    question: "Which JavaScript keyword stops a loop?",
    options: ["stop", "exit", "break", "return"],
    answer: 2
  },
  {
    question: "Which event fires when the page finishes loading?",
    options: ["onclick", "onload", "onchange", "onready"],
    answer: 1
  },
  {
    question: "Which CSS property controls the space between elements?",
    options: ["margin", "padding", "spacing", "border"],
    answer: 0
  },
  {
    question: "Which Bootstrap class makes text center aligned?",
    options: [
      "text-center",
      "align-center",
      "center-text",
      "text-middle"
    ],
    answer: 0
  },
  {
    question: "Which HTML tag is used to play video files?",
    options: ["<media>", "<video>", "<movie>", "<play>"],
    answer: 1
  },
  {
    question: "Which JavaScript function is used to delay execution?",
    options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    answer: 0
  },
  {
    question: "Which CSS property is used to create rounded corners?",
    options: ["corner-radius", "border-radius", "round", "radius"],
    answer: 1
  },
  {
    question: "Which HTML tag is used to define navigation links?",
    options: ["<navigation>", "<menu>", "<nav>", "<header>"],
    answer: 2
  },
  {
    question: "Which JavaScript method converts an object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.convert()"
    ],
    answer: 1
  },
  {
    question: "Which CSS property controls the stacking order of elements?",
    options: ["position", "z-index", "layer", "order"],
    answer: 1
  }

];


let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const timeEl = document.getElementById("time");
const progressBar = document.getElementById("progressBar");

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timeEl.innerText = timeLeft;
  startTimer();

  const q = quizData[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";
  nextBtn.disabled = true;

  updateProgress();

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.className = "btn btn-outline-primary w-100 option-btn";
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.innerText = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function checkAnswer(index) {
  clearInterval(timer);

  if (index === quizData[currentQuestion].answer) {
    score++;
  }
  nextBtn.disabled = false;
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / quizData.length) * 100;
  progressBar.style.width = progress + "%";
}

function showResult() {
  clearInterval(timer);
  questionEl.innerText = "Quiz Completed 🎉";
  optionsEl.innerHTML = "";
  scoreEl.innerText = `Your Score: ${score} / ${quizData.length}`;
  nextBtn.innerText = "Restart";
}

nextBtn.addEventListener("click", () => {
  if (currentQuestion === quizData.length) {
    restartQuiz();
  } else {
    nextQuestion();
  }
});

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  scoreEl.innerText = "";
  nextBtn.innerText = "Next";
  progressBar.style.width = "0%";
  loadQuestion();
}

loadQuestion();
