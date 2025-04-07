// Quiz questions, answers, and correct answer indices
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2 // Paris
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1 // 4
    },
    {
        question: "Which programming language is used for web development?",
        answers: ["Python", "JavaScript", "C++", "Java"],
        correct: 1 // JavaScript
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2 // Jupiter
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        correct: 1 // William Shakespeare
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM elements
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

// Display the current question and answers
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false; // Re-enable buttons for the new question
        button.onclick = () => selectAnswer(index);
    });
    nextButton.style.display = 'none'; // Hide the "Next" button initially
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
    // Disable all buttons after an answer is selected
    answerButtons.forEach(button => (button.disabled = true));
    nextButton.style.display = 'block'; // Show the "Next" button
}

// Move to the next question or end the quiz
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // End of the quiz
        questionElement.textContent = "Quiz Completed!";
        document.getElementById('answers').style.display = 'none';
        nextButton.style.display = 'none';
        scoreElement.textContent += " - Well done!";
    }
}

// Event listener for the "Next Question" button
nextButton.addEventListener('click', nextQuestion);

// Initialize the quiz
showQuestion();