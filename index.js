// console.log("JavaScript is connected to HTML!");

// nav bar pop ups--------------------------------------------------------
function showNavPopup(message) {
    const popup = document.getElementById('navpopup');
    const popupText = document.getElementById('navpopupText');

    navpopupText.textContent = message;
    navpopup.classList.add('active');

    setTimeout(() => {
        navpopup.classList.remove('active');
    }, 13000);
}

// narration container ------------------------------------------------------

function typeEffect(element, text, speed = 50) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

function showPopup(message) {
  // hide the game container
  gameStartScreen.style.display = "none";
  // gameContainer.style.display = 'none';
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");

  // clear previous text and start typing new message
  popupText.textContent = '';
  typeEffect(popupText, message, 50); // Adjust speed as needed

  // bring back the game container
  popup.classList.add("active");
  setTimeout(() => {
    popup.classList.remove("active");
    displayQuestion();
  }, 33000); // Adjust time as needed for the length of the message
  // gameContainer.style.display = 'flex';
}

// screen displays 
const playButton = document.getElementById("play-button");
const gameStartScreen = document.querySelector(".game-start-screen");
const gameContainer = document.querySelector(".game-container");

playButton.addEventListener("click", () => {
  showPopup(
    "Welcome to Pixel Coder! Join David's journey to secure a coding job by studying hard. Every 3 correct answers bring him closer to being fully prepared for his full stack development interview. With more correct answers, his chance of landing a better job increases, as there are different job tiers. Read each question carefully, select the right answer, and watch as David's professional attire grows with each correct response. But remember, a wrong answer means staying at that level. Your goal? Dress David for success and ace that interview!"
  );
});

// the game ------------------------------------------------------
const questions = [
  {
    type: "html",
    question: "What does HTML stand for?",
    options: [
      { letter: "A", text: "Hyper Text Markup Language" },
      { letter: "B", text: "High Traffic Management Language" },
      { letter: "C", text: "Home Tool Management Language" },
    ],
    correctAnswer: "A",
  },
  {
    type: "html",
    question: "Which HTML element is used to define an unordered list?",
    options: [
      { letter: "A", text: "<ol>" },
      { letter: "B", text: "<list>" },
      { letter: "C", text: "<ul>" },
    ],
    correctAnswer: "C",
  },
  {
    type: "html",
    question:
      "What does the 'target='_blank'' attribute do when used in an '<a>' tag?",
    options: [
      { letter: "A", text: "Opens the link in a new window or tab" },
      { letter: "B", text: "Targets the link to the current window or tab" },
      { letter: "C", text: "Specifies the link's position on the page" },
    ],
    correctAnswer: "A",
  },
  {
    type: "html",
    question: "What does the 'meta' tag do in HTML?",
    options: [
      {
        letter: "A",
        text: "Defines metadata about an HTML document",
      },
      {
        letter: "B",
        text: "Specifies the character encoding for the document",
      },
      {
        letter: "C",
        text: "Creates a hyperlink to another web page",
      },
    ],
    correctAnswer: "A",
  },
  {
    type: "html",
    question: "What does the <img> tag in HTML stand for?",
    options: [
      { letter: "A", text: "Image" },
      { letter: "B", text: "Input" },
      { letter: "C", text: "Insert" },
    ],
    correctAnswer: "A",
  },
  {
    type: "html",
    question: "Which tag is used to define a hyperlink in HTML?",
    options: [
      { letter: "A", text: "<a>" },
      { letter: "B", text: "<link>" },
      { letter: "C", text: "<url>" },
    ],
    correctAnswer: "A",
  },
  {
    type: "html",
    question: "What does the <div> tag represent in HTML?",
    options: [
      { letter: "A", text: "Definition" },
      { letter: "B", text: "Division" },
      { letter: "C", text: "Description" },
    ],
    correctAnswer: "B",
  },
  {
    type: "html",
    question: "What is the purpose of the <span> tag in HTML?",
    options: [
      { letter: "A", text: "Group inline elements" },
      { letter: "B", text: "Create a new paragraph" },
      { letter: "C", text: "Insert an image" },
    ],
    correctAnswer: "A",
  },
  {
    type: "html",
    question: "Which HTML tag is used to create a numbered list?",
    options: [
      { letter: "A", text: "<ul>" },
      { letter: "B", text: "<li>" },
      { letter: "C", text: "<ol>" },
    ],
    correctAnswer: "C",
  },
  {
    type: "html",
    question: "What is the purpose of the alt attribute in the <img> tag?",
    options: [
      { letter: "A", text: "Define the alignment of the image" },
      { letter: "B", text: "Specify the alternate text for the image" },
      { letter: "C", text: "Set the image source" },
    ],
    correctAnswer: "B",
  },
  {
    type: "html",
    question: "What does the HTML acronym DOCTYPE stand for?",
    options: [
      { letter: "A", text: "Document Text Type" },
      { letter: "B", text: "Document Type Declaration" },
      { letter: "C", text: "Document Typing" },
    ],
    correctAnswer: "B",
  },
  {
    type: "html",
    question: "Which HTML tag is used to create a line break?",
    options: [
      { letter: "A", text: "<line>" },
      { letter: "B", text: "<break>" },
      { letter: "C", text: "<br>" },
    ],
    correctAnswer: "C",
  },
  // CSS-------------
  {
    type: "css",
    question:
      "Which CSS property is used to change the text color of an element?",
    options: [
      { letter: "A", text: "font-color" },
      { letter: "B", text: "color" },
      { letter: "C", text: "text-color" },
    ],
    correctAnswer: "B",
  },
  {
    type: "css",
    question: "What is the 'box-model' in CSS?",
    options: [
      {
        letter: "A",
        text: "Defines the layout of an element on the page",
      },
      {
        letter: "B",
        text: "Describes the padding, border, margin, and content of an element",
      },
      {
        letter: "C",
        text: "Specifies the order of floating elements",
      },
    ],
    correctAnswer: "B",
  },
  {
    type: "css",
    question: "What does the 'z-index' property in CSS do?",
    options: [
      { letter: "A", text: "Sets the opacity of an element" },
      {
        letter: "B",
        text: "Determines the order of overlapping elements along the z-axis",
      },
      {
        letter: "C",
        text: "Specifies the alignment of text within an element",
      },
    ],
    correctAnswer: "B",
  },
  {
    type: "css",
    question: "Which CSS property is used to change the background color of an element?",
    options: [
      { letter: "A", text: "background-color" },
      { letter: "B", text: "color" },
      { letter: "C", text: "text-color" },
    ],
    correctAnswer: "A",
  },
  {
    type: "css",
    question: "What does the CSS property 'float' do?",
    options: [
      { letter: "A", text: "Aligns the text within an element" },
      { letter: "B", text: "Specifies whether an element should be floated to the left or right" },
      { letter: "C", text: "Sets the opacity of an element" },
    ],
    correctAnswer: "B",
  },
  {
    type: "css",
    question: "What is the purpose of the 'margin' property in CSS?",
    options: [
      { letter: "A", text: "Adds space between the border and content of an element" },
      { letter: "B", text: "Defines the layout of an element on the page" },
      { letter: "C", text: "Specifies the order of floating elements" },
    ],
    correctAnswer: "A",
  },
  {
    type: "css",
    question: "What does the CSS property 'position: absolute;' do?",
    options: [
      { letter: "A", text: "Positions an element relative to its normal position" },
      { letter: "B", text: "Positions an element relative to its first positioned (not static) ancestor element" },
      { letter: "C", text: "Removes an element from the normal document flow" },
    ],
    correctAnswer: "C",
  },
  {
    type: "css",
    question: "What does the CSS property 'transform: rotate(45deg);' do?",
    options: [
      { letter: "A", text: "Rotates an element 45 degrees clockwise" },
      { letter: "B", text: "Flips an element vertically" },
      { letter: "C", text: "Skews an element horizontally" },
    ],
    correctAnswer: "A",
  },
  {
    type: "css",
    question: "What does the '@media' rule in CSS do?",
    options: [
      { letter: "A", text: "Defines a media query that applies styles based on the device's screen size or other properties" },
      { letter: "B", text: "Specifies the media type of the stylesheet" },
      { letter: "C", text: "Applies styles only to printed documents" },
    ],
    correctAnswer: "A",
  },
  // js -----------------
  {
    type: "js",
    question: "Which keyword is used to declare variables in JavaScript?",
    options: [
      { letter: "A", text: "let" },
      { letter: "B", text: "var" },
      { letter: "C", text: "const" },
    ],
    correctAnswer: "B",
  },
  {
    type: "js",
    question: "What does the 'querySelector()' method in JavaScript do?",
    options: [
      {
        letter: "A",
        text: "Selects the first element that matches a specified CSS selector",
      },
      {
        letter: "B",
        text: "Returns a list of all elements with a specific class name",
      },
      { letter: "C", text: "Finds the last element in the DOM tree" },
    ],
    correctAnswer: "A",
  },
  {
    type: "js",
    question: "What does the 'addEventListener()' method do in JavaScript?",
    options: [
      { letter: "A", text: "Adds an event listener to an HTML element" },
      {
        letter: "B",
        text: "Changes the appearance of an element based on user interaction",
      },
      { letter: "C", text: "Executes a function when the page is loaded" },
    ],
    correctAnswer: "A",
  },
  {
    type: "js",
    question: "What does the JavaScript method 'Array.prototype.map()' do?",
    options: [
      { letter: "A", text: "Modifies the original array by removing specified elements" },
      { letter: "B", text: "Creates a new array populated with the results of calling a provided function on every element in the calling array" },
      { letter: "C", text: "Concatenates two arrays together" },
    ],
    correctAnswer: "B",
  },
  {
    type: "js",
    question: "What is the purpose of the JavaScript method 'Array.prototype.filter()'?",
    options: [
      { letter: "A", text: "Modifies the original array by removing specified elements" },
      { letter: "B", text: "Creates a new array with all elements that pass the test implemented by the provided function" },
      { letter: "C", text: "Sorts the elements of an array in place and returns the sorted array" },
    ],
    correctAnswer: "B",
  },
  {
    type: "js",
    question: "What is the difference between '==' and '===' operators in JavaScript?",
    options: [
      { letter: "A", text: "They both perform strict equality comparison" },
      { letter: "B", text: "'==' performs type coercion, while '===' does not" },
      { letter: "C", text: "They are aliases and can be used interchangeably" },
    ],
    correctAnswer: "B",
  },
  {
    type: "js",
    question: "What does the JavaScript 'async' keyword do?",
    options: [
      { letter: "A", text: "Marks a function as asynchronous, allowing it to use 'await' to pause execution until a promise is settled" },
      { letter: "B", text: "Defines a block of code that will be executed asynchronously" },
      { letter: "C", text: "Creates a new thread to execute a function concurrently with other code" },
    ],
    correctAnswer: "A",
  },
  {
    type: "js",
    question: "What is a closure in JavaScript?",
    options: [
      { letter: "A", text: "A way to prevent modification of a variable's value" },
      { letter: "B", text: "A function that has access to the outer function's variables, even after the outer function has finished executing" },
      { letter: "C", text: "A method to define private variables in JavaScript classes" },
    ],
    correctAnswer: "B",
  },
  {
    type: "js",
    question: "What is the purpose of the JavaScript 'use strict' directive?",
    options: [
      { letter: "A", text: "Enforces strict mode, which helps catch common coding errors and 'unsafe' actions" },
      { letter: "B", text: "Defines a block of code that will be executed in strict mode" },
      { letter: "C", text: "Specifies that a JavaScript file should be loaded in strict mode" },
    ],
    correctAnswer: "A",
  }
];

// image cycle -------------------------------

const gameImages = [
  'assets/game_start_img.png', // Initial image
  'assets/html-1.png',   // Image after 3 correct answers
  'assets/html-2.png',    // Image after 6 correct answers etc
  'assets/html-3.png',
  'assets/html-4.png',
  'assets/css-1.png',
  'assets/css-2.png',
  'assets/css-3.png',
  'assets/js-1.png',
  'assets/js-2.png',
  'assets/js-3.png',
  
];

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
    // Update the score display
    scoreElement.textContent = score;
    // Change the background image every 3 correct answers
    if (score % 3 === 0) {
      const imageIndex = (score / 3) % gameImages.length; // Cycle through images
      document.querySelector('.game-container').style.backgroundImage = `url('${gameImages[imageIndex]}')`;
    }
  }
  goToNextQuestion();
}


// --------------------------
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score-value");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  gameContainer.style.display = "flex";
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = `${option.letter}. ${option.text}`;
    button.addEventListener("click", () => checkAnswer(option.letter));
    optionsElement.appendChild(button);
  });
}
// End of game 
function goToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Show Game Over screen
    gameContainer.style.display = 'none'; // Hide game container
    const gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.style.display = 'flex'; // Show game over screen
    document.getElementById('final-score').textContent = score; // Display final score
  }
}
