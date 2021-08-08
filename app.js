import { questions } from './questions.js';

const questionEl = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const nextQuestionBtn = document.getElementById('next-question');

let currentQuestionIndex = 0;
let score = 0;
let isAnswerSelected = false;

const renderQuestion = (index) => {
    if (index >= questions.length) {
        questionEl.textContent = `Your Score: ${score} / ${questions.length}`;
        document.querySelector('.options-container').style.display = 'none';
        return;
    }

    questionEl.textContent = questions[index].question;
    
    let optionIndex = 0
    optionButtons.forEach(optionBtn => {
        optionBtn.textContent = questions[index].options[optionIndex];
        optionIndex++;
    });
}
 
const clearOptionClasses = () => {
    optionButtons.forEach(btn => {
        btn.classList.remove('correct', 'wrong');
    });
}

renderQuestion(currentQuestionIndex);

optionButtons.forEach(optionBtn => {
    optionBtn.addEventListener('click', () => {
        if (isAnswerSelected) return;

        let selectedOption = optionBtn.textContent;
        let index = currentQuestionIndex;
        let correctAnswer = questions[index].options[questions[index].correctAnswer];

        if (selectedOption === correctAnswer) {
            score++;
            optionBtn.classList.add('correct');
            questionEl.textContent = 'Correct!!';
        } else {
            optionBtn.classList.add('wrong');
            questionEl.textContent = 'Wrong!!';
            optionButtons[questions[index].correctAnswer].classList.add('correct');
        }

        isAnswerSelected = true
    });
});

nextQuestionBtn.addEventListener('click', () => {
    if (!isAnswerSelected) return;

    clearOptionClasses();
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    isAnswerSelected = false
})

