document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const scoreElement = document.getElementById('score');

    function loadQuestion() {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option'; 
            button.addEventListener('click', () => {
                if (option === question.answer) {
                    score++;
                }
                nextButton.disabled = false;
            });
            optionsElement.appendChild(button);
        });
    }

    function showScore() {
        questionElement.textContent = '';
        optionsElement.innerHTML = '';
        nextButton.classList.add('hidden');
        scoreElement.textContent = `Congratulations! Your score is ${score} out of ${questions.length}.`;
        scoreElement.classList.remove('hidden');

        
        const restartButton = document.createElement('button');
        restartButton.id = 'score-button';
        restartButton.textContent = 'Start New Quiz';
        restartButton.className = 'next'; // Use the same class for consistent styling
        restartButton.addEventListener('click', () => {
            location.reload(); // Reload the page to start a new quiz
        });

        
        const container = document.querySelector('.container');
        container.appendChild(restartButton);
    }

    nextButton.className = 'next'; // Assign next button class
    nextButton.textContent = 'Next';

    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            nextButton.disabled = true;
        } else {
            showScore();
        }
    });

    loadQuestion();
});
