/* ==========================================
   DOM ELEMENTS
========================================== */

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const resultScreen = document.getElementById("resultScreen");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const question = document.getElementById("question");

const answerButtons = [
    document.getElementById("answer0"),
    document.getElementById("answer1"),
    document.getElementById("answer2"),
    document.getElementById("answer3")
];

const currentMoney = document.getElementById("currentMoney");
const timer = document.getElementById("timer");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");

const fiftyBtn = document.getElementById("fiftyBtn");
const audienceBtn = document.getElementById("audienceBtn");
const friendBtn = document.getElementById("friendBtn");

const prizeLadder = document.getElementById("prizeLadder");

const milestoneModal = document.getElementById("milestoneModal");
const milestonePrize = document.getElementById("milestonePrize");
const continueBtn = document.getElementById("continueBtn");
const walkAwayBtn = document.getElementById("walkAwayBtn");

const resultTitle = document.getElementById("resultTitle");
const resultMessage = document.getElementById("resultMessage");
const finalPrize = document.getElementById("finalPrize");


/* ==========================================
   AUDIO
========================================== */

const startSound = document.getElementById("startSound");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const timerSound = document.getElementById("timerSound");
console.log(timerSound);
const moneySound = document.getElementById("moneySound");
const lifelineSound = document.getElementById("lifelineSound");
const winnerSound = document.getElementById("winnerSound");
const applauseSound = document.getElementById("applauseSound");


/* ==========================================
   GAME VARIABLES
========================================== */

let currentQuestion = 0;
let score = 0;
let countdown = 30;
let timerInterval = null;

let fiftyUsed = false;
let audienceUsed = false;
let friendUsed = false;


/* ==========================================
   PRIZE LADDER
========================================== */

const prizes = [
    "₵100",
    "₵200",
    "₵300",
    "₵500",
    "₵700",
    "₵1,000",
    "₵2,000",
    "₵4,000",
    "₵8,000",
    "₵16,000",
    "₵32,000",
    "₵64,000",
    "₵125,000",
    "₵250,000",
    "₵500,000",
    "₵1,000,000",
    "₵2,000,000",
    "₵4,000,000",
    "₵8,000,000",
    "₵16,000,000",
    "₵25,000,000",
    "₵35,000,000",
    "₵45,000,000",
    "₵55,000,000",
    "₵65,000,000",
    "₵75,000,000",
    "₵85,000,000",
    "₵95,000,000",
    "₵99,000,000",
    "₵100,000,000"
];


/* ==========================================
   QUESTIONS (1–15)
========================================== */

const questions = [

{
    question: "What does HTML stand for?",
    answers: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
    ],
    correct: 0
},

{
    question: "Which tag creates the largest heading?",
    answers: [
        "<h6>",
        "<head>",
        "<h1>",
        "<heading>"
    ],
    correct: 2
},

{
    question: "Which HTML tag is used to insert an image?",
    answers: [
        "<picture>",
        "<image>",
        "<img>",
        "<src>"
    ],
    correct: 2
},

{
    question: "Which CSS property changes text color?",
    answers: [
        "font-color",
        "text-color",
        "color",
        "background"
    ],
    correct: 2
},

{
    question: "Which symbol is used for an ID selector in CSS?",
    answers: [
        ".",
        "#",
        "*",
        "@"
    ],
    correct: 1
},

{
    question: "Which property makes a Flexbox container?",
    answers: [
        "display:flex",
        "flex:on",
        "position:flex",
        "layout:flex"
    ],
    correct: 0
},

{
    question: "Which keyword declares a variable in JavaScript?",
    answers: [
        "variable",
        "let",
        "define",
        "make"
    ],
    correct: 1
},

{
    question: "Which function prints to the browser console?",
    answers: [
        "print()",
        "echo()",
        "console.log()",
        "display()"
    ],
    correct: 2
},

{
    question: "Which company developed JavaScript?",
    answers: [
        "Microsoft",
        "Netscape",
        "Google",
        "Apple"
    ],
    correct: 1
},

{
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
        "//",
        "**",
        "##",
        "<!--"
    ],
    correct: 0
},

{
    question: "Which keyword creates a function?",
    answers: [
        "method",
        "function",
        "define",
        "create"
    ],
    correct: 1
},

{
    question: "Which operator compares value and type?",
    answers: [
        "==",
        "=",
        "===",
        "!="
    ],
    correct: 2
},

{
    question: "Which loop repeats while a condition is true?",
    answers: [
        "repeat",
        "for",
        "while",
        "loop"
    ],
    correct: 2
},

{
    question: "Which method adds an item to the end of an array?",
    answers: [
        "append()",
        "push()",
        "add()",
        "insert()"
    ],
    correct: 1
},

{
    question: "Which DOM method selects an element by its ID?",
    answers: [
        "querySelectorAll()",
        "getElementById()",
        "getElements()",
        "findElement()"
    ],
    correct: 1
}

];

/* ==========================================
   QUESTIONS (16–30)
========================================== */

questions.push(

{
    question: "Which keyword stops a loop?",
    answers: ["stop", "break", "exit", "return"],
    correct: 1
},

{
    question: "Which method removes the last item of an array?",
    answers: ["pop()", "remove()", "delete()", "shift()"],
    correct: 0
},

{
    question: "Which HTML tag creates a hyperlink?",
    answers: ["<a>", "<link>", "<href>", "<url>"],
    correct: 0
},

{
    question: "Which CSS property changes the background color?",
    answers: ["bgcolor", "background-color", "color", "fill"],
    correct: 1
},

{
    question: "Which JavaScript method displays a popup message?",
    answers: ["message()", "alert()", "popup()", "show()"],
    correct: 1
},

{
    question: "Which keyword declares a constant?",
    answers: ["fixed", "const", "constant", "final"],
    correct: 1
},

{
    question: "Which operator means 'NOT' in JavaScript?",
    answers: ["!", "~", "?", "%"],
    correct: 0
},

{
    question: "Which HTML element contains JavaScript?",
    answers: ["<javascript>", "<script>", "<js>", "<code>"],
    correct: 1
},

{
    question: "Which CSS property makes text bold?",
    answers: ["font-style", "font-weight", "text-weight", "bold"],
    correct: 1
},

{
    question: "Which JavaScript method converts JSON into an object?",
    answers: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.object()",
        "JSON.convert()"
    ],
    correct: 0
},

{
    question: "Which method converts an object into JSON?",
    answers: [
        "JSON.parse()",
        "JSON.stringify()",
        "JSON.convert()",
        "JSON.text()"
    ],
    correct: 1
},

{
    question: "Which symbol begins a template literal?",
    answers: ['"', "'", "`", "#"],
    correct: 2
},

{
    question: "Which keyword skips the current loop iteration?",
    answers: ["continue", "skip", "next", "pass"],
    correct: 0
},

{
    question: "Which event occurs when a button is clicked?",
    answers: ["onhover", "onclick", "onfocus", "onchange"],
    correct: 1
},

{
    question: "Tech4Girls focuses on helping girls learn...",
    answers: [
        "Cooking",
        "Technology",
        "Medicine",
        "Accounting"
    ],
    correct: 1
}
);

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

    return array;

}

/* ==========================================
   BUILD PRIZE LADDER
========================================== */

function buildPrizeLadder() {

    prizeLadder.innerHTML = "";

    for (let i = prizes.length - 1; i >= 0; i--) {

        const item = document.createElement("li");

        item.textContent = `${i + 1}. ${prizes[i]}`;

        if (i === 9 || i === 19 || i === 29) {
            item.classList.add("safe-level");
        }

        if (i === 29) {
            item.classList.add("grand-prize");
        }

        prizeLadder.appendChild(item);
    }
}


/* ==========================================
   UPDATE PRIZE LADDER
========================================== */

function updatePrizeLadder() {

    const items = prizeLadder.querySelectorAll("li");

    items.forEach(item => item.classList.remove("active"));

    const activeIndex = prizes.length - 1 - currentQuestion;

    if (items[activeIndex]) {
        items[activeIndex].classList.add("active");
    }
    items[activeIndex].scrollIntoView({
    behavior: "smooth",
    block: "center"
});

    currentMoney.textContent = prizes[currentQuestion];
}


/* ==========================================
   START GAME
========================================== */

function startGame() {

    startSound.play();

    currentQuestion = 0;

    score = 0;

    fiftyUsed = false;
    audienceUsed = false;
    friendUsed = false;

    fiftyBtn.disabled = false;
    audienceBtn.disabled = false;
    friendBtn.disabled = false;

    startScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    startScreen.classList.add("hidden");
resultScreen.classList.add("hidden");
gameScreen.classList.remove("hidden");

 shuffleArray(questions);



    buildPrizeLadder();

    loadQuestion();

}


/* ==========================================
   LOAD QUESTION
========================================== */

function loadQuestion() {

    clearInterval(timerInterval);

    countdown = 30;
timer.classList.remove("danger");
    timer.textContent = countdown;

    questionCounter.textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    updatePrizeLadder();

    const current = questions[currentQuestion];

question.textContent = current.question;

// Build answer objects
let shuffledAnswers = current.answers.map((answer, index) => ({
    text: answer,
    correct: index === current.correct
}));

// Shuffle them
shuffleArray(shuffledAnswers);

// Save for checking answers
current.shuffledAnswers = shuffledAnswers;

// Display them
answerButtons.forEach((button, index) => {

    button.disabled = false;

    button.classList.remove("correct", "wrong");

    button.style.visibility = "visible";

    button.textContent = shuffledAnswers[index].text;

});

    startTimer();

}

/* ==========================================
   TIMER
========================================== */

function startTimer() {

    timerInterval = setInterval(() => {

        countdown--;

        timer.textContent = countdown;

        // Last 5 seconds
        if (countdown === 5) {

            timer.classList.add("danger");

            timerSound.currentTime = 0;

            timerSound.play();

        }

        if (countdown <= 0) {

            clearInterval(timerInterval);

            timerSound.pause();

            timerSound.currentTime = 0;

            gameOver("⏰ Time's Up!");

        }

    }, 1000);

}



/* ==========================================
   CHECK ANSWER
========================================== */

function checkAnswer(selectedIndex) {

    clearInterval(timerInterval);
timerSound.pause();
timerSound.currentTime = 0;
    const current = questions[currentQuestion];

const correctAnswer =
    current.shuffledAnswers.findIndex(answer => answer.correct);

    answerButtons.forEach(button => button.disabled = true);

    if (selectedIndex === correctAnswer) {

        correctSound.pause();
correctSound.currentTime = 0;
correctSound.play();

        answerButtons[selectedIndex].classList.add("correct");

        score++;

        setTimeout(nextQuestion, 1500);

    } else {

        wrongSound.play();

        answerButtons[selectedIndex].classList.add("wrong");

        answerButtons[correctAnswer].classList.add("correct");

        setTimeout(() => {

            gameOver("❌ Wrong Answer!");

        }, 1500);

    }

}

function playLifelineSound() {
    lifelineSound.pause();
    lifelineSound.currentTime = 0;
    lifelineSound.play();
}
fiftyBtn.addEventListener("click", () => {

    playLifelineSound();

    // Your 50:50 code here

});
audienceBtn.addEventListener("click", () => {

    playLifelineSound();

    // Your audience code here

});
friendBtn.addEventListener("click", () => {

    playLifelineSound();

    // Your phone friend code here

});


/* ==========================================
   NEXT QUESTION
========================================== */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion === questions.length) {

        winner();

        return;

    }

    if (currentQuestion === 10 || currentQuestion === 20) {

        milestonePrize.textContent = prizes[currentQuestion - 1];

        milestoneModal.classList.remove("hidden");

        return;

    }

    loadQuestion();

}


/* ==========================================
   GAME OVER
========================================== */

function gameOver(title) {

    clearInterval(timerInterval);

    gameScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    resultTitle.textContent = title;

    resultMessage.textContent =
        "Better luck next time!";

    if (currentQuestion >= 20) {

    finalPrize.textContent = prizes[19];

} else if (currentQuestion >= 10) {

    finalPrize.textContent = prizes[9];

} else {

    finalPrize.textContent = "₵0";

}

}


/* ==========================================
   WINNER
========================================== */

function winner() {

    clearInterval(timerInterval);

    winnerSound.play();

    gameScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    resultTitle.textContent =
        "🏆 Congratulations!";

    resultMessage.textContent =
        "You answered all 30 questions correctly!";

    finalPrize.textContent =
        prizes[prizes.length - 1];

}


/* ==========================================
   RESTART
========================================== */

function restartGame() {

    startGame();

}


/* ==========================================
   50 : 50
========================================== */

fiftyBtn.addEventListener("click", () => {

    if (fiftyUsed) return;

    fiftyUsed = true;

    fiftyBtn.disabled = true;

    const correct = questions[currentQuestion].correct;

    let wrongAnswers = [];

    answerButtons.forEach((button, index) => {

        if (index !== correct) {

            wrongAnswers.push(index);

        }

    });

    wrongAnswers.sort(() => Math.random() - 0.5);

    answerButtons[wrongAnswers[0]].style.visibility = "hidden";

    answerButtons[wrongAnswers[1]].style.visibility = "hidden";

});


/* ==========================================
   ASK THE AUDIENCE
========================================== */

audienceBtn.addEventListener("click", () => {

    if (audienceUsed) return;

    audienceUsed = true;

    audienceBtn.disabled = true;

    const correct = questions[currentQuestion].correct;

    alert(
`Audience Poll

A: ${correct===0?70:10}%

B: ${correct===1?70:10}%

C: ${correct===2?70:10}%

D: ${correct===3?70:10}%`
    );

});


/* ==========================================
   PHONE A FRIEND
========================================== */

friendBtn.addEventListener("click", () => {

    if (friendUsed) return;

    friendUsed = true;

    friendBtn.disabled = true;

    const correct = questions[currentQuestion].correct;

    alert(
        `📞 Your friend thinks the correct answer is "${questions[currentQuestion].answers[correct]}".`
    );

});


/* ==========================================
   WALK AWAY
========================================== */

walkAwayBtn.addEventListener("click", () => {

    clearInterval(timerInterval);

    milestoneModal.classList.add("hidden");

    gameScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");

    resultTitle.textContent = "👏 You Walked Away!";

    resultMessage.textContent =
        "A wise decision. You keep your winnings.";

    finalPrize.textContent = prizes[currentQuestion - 1];

});


/* ==========================================
   CONTINUE PLAYING
========================================== */

continueBtn.addEventListener("click", () => {

    milestoneModal.classList.add("hidden");

    loadQuestion();

});


/* ==========================================
   ANSWER BUTTONS
========================================== */

answerButtons.forEach((button, index) => {

    button.addEventListener("click", () => {

        checkAnswer(index);

    });

});


/* ==========================================
   BUTTON EVENTS
========================================== */

startBtn.addEventListener("click", startGame);

restartBtn.addEventListener("click", restartGame);


/* ==========================================
   INITIALIZE
========================================== */

buildPrizeLadder();