// console.log("JavaScript is connected to HTML!");


// nav bar pop ups
function showPopup(message) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    
    popupText.textContent = message;
    popup.classList.add('active');

    setTimeout(() => {
        popup.classList.remove('active');
    }, 40000);
}

// game start screen
const playButton = document.getElementById('play-button');
const gameStartScreen = document.querySelector('.game-start-screen');
const gameContainer = document.querySelector('.game-container');

playButton.addEventListener('click', () => {
  gameStartScreen.style.display = 'none';
  gameContainer.style.display = 'flex';
  displayQuestion();
});


// the game
const questions = [
    {
        type: 'html',
        question: "What does HTML stand for?",
        options: [
            { letter: 'A', text: "Hyper Text Markup Language" },
            { letter: 'B', text: "High Traffic Management Language" },
            { letter: 'C', text: "Home Tool Management Language" }
        ],
        correctAnswer: 'A'
    },
    {
        type: 'html',
        question: "Which HTML element is used to define an unordered list?",
        options: [
            { letter: 'A', text: "<ol>" },
            { letter: 'B', text: "<list>" },
            { letter: 'C', text: "<ul>" }
        ],
        correctAnswer: 'C'
    },
    {
        type: 'html',
        question: "What does the 'target='_blank'' attribute do when used in an '<a>' tag?",
        options: [
            { letter: 'A', text: "Opens the link in a new window or tab" },
            { letter: 'B', text: "Targets the link to the current window or tab" },
            { letter: 'C', text: "Specifies the link's position on the page" }
        ],
        correctAnswer: 'A'
    },
    {
        type: 'css',
        question: "Which CSS property is used to change the text color of an element?",
        options: [
            { letter: 'A', text: "font-color" },
            { letter: 'B', text: "color" },
            { letter: 'C', text: "text-color" }
        ],
        correctAnswer: 'B'
    },
    {
        type: 'css',
        question: "Which CSS property is used to set the background color of an element?",
        options: [
            { letter: 'A', text: "background-color" },
            { letter: 'B', text: "bg-color" },
            { letter: 'C', text: "background" }
        ],
        correctAnswer: 'A'
    },
    {
        type: 'css',
        question: "What does the 'z-index' property in CSS do?",
        options: [
            { letter: 'A', text: "Sets the opacity of an element" },
            { letter: 'B', text: "Determines the order of overlapping elements along the z-axis" },
            { letter: 'C', text: "Specifies the alignment of text within an element" }
        ],
        correctAnswer: 'B'
    },
    {
        type: 'js',
        question: "Which keyword is used to declare variables in JavaScript?",
        options: [
            { letter: 'A', text: "let" },
            { letter: 'B', text: "var" },
            { letter: 'C', text: "const" }
        ],
        correctAnswer: 'B'
    },
    {
        type: 'js',
        question: "What does the 'querySelector()' method in JavaScript do?",
        options: [
            { letter: 'A', text: "Selects the first element that matches a specified CSS selector" },
            { letter: 'B', text: "Returns a list of all elements with a specific class name" },
            { letter: 'C', text: "Finds the last element in the DOM tree" }
        ],
        correctAnswer: 'A'
    },
    {
        type: 'js',
        question: "What does the 'addEventListener()' method do in JavaScript?",
        options: [
            { letter: 'A', text: "Adds an event listener to an HTML element" },
            { letter: 'B', text: "Changes the appearance of an element based on user interaction" },
            { letter: 'C', text: "Executes a function when the page is loaded" }
        ],
        correctAnswer: 'A'
    }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score-value');

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${option.letter}. ${option.text}`;
        button.addEventListener('click', () => checkAnswer(option.letter));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }
    scoreElement.textContent = score;
    goToNextQuestion();
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // End of game
        alert('Game Over! Your final score is ' + score);
    }
}

