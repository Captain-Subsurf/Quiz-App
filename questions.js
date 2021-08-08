class Question {
    constructor(question, options, correctAnswer) {
        this.question = question;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }
}

let question1 = 'Who is the richest man in the world?';
let question2 = 'Most popular programming language?';
let question3 = 'Most trending Computer science topic?';
let question4 = 'Best Web Browser?';
let question5 = 'Most difficult programming language?';

export const questions = [
    new Question(question1, ['Elon Musk', 'Bill Gates', 'Jeff Bezos', 'Mark Zuckerberg'], 0),
    new Question(question2, ['JavaScript', 'Python', 'Java', 'C++'], 1),
    new Question(question3, ['Software Dev', 'Web Dev', 'AI', 'Data Science'], 3),
    new Question(question4, ['Chrome', 'Brave', 'Edge', 'FireFox'], 2),
    new Question(question5, ['C#', 'Java', 'JavaScript', 'C++'], 1),
];
