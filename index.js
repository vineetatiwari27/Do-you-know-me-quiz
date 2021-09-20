const readlineSync = require('readline-sync');

console.log('Welcome to the Quiz');
let username = readlineSync.question("What's your Name: \n");
console.log('Hello', username, ", Let's Play the Quiz!!");

var mcqList = [

    {
        array: ['Kajal', 'Tina', 'Gia', 'Bani'],
        question: 'My nick-name?',
        answer: 'Kajal'
    },
    {
        array: ['Red', 'Maroon', 'Burgundy', 'Any color'],
        question: 'My favourite color?: ',
        answer: 'Any color'
    },
    {
        array: ['Taylor Swift', 'Beyonce', 'Rihanna', 'Pink'],
        question: 'Favourite singer?: ',
        answer: 'Taylor Swift'
    },
];

let score = 0;
function quizMcq(listOfAnswers, question, answer) {
    let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
    console.log('\n');
    if (listOfAnswers[userAnswer] === answer) {
        console.log('You are Right.');
        score = score + 1;
    } else {
        console.log('You are Wrong.');
        console.log('The Correct Answer is: ', answer);

    }
    console.log('Score is: ', score);
}
for (var i = 0; i < mcqList.length; i++) {
    console.log('\n');
    quizMcq(mcqList[i].array, mcqList[i].question, mcqList[i].answer);
    console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,', username, 'your Total Score is: ', score);
console.log("Check out the current high score:");
console.log("Name: Vineeta");
console.log("Score:3");
console.log("If you beat this score then send me a screenshot and i'll update it xx");
