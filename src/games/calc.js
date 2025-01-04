import getRandomNumber from './utils.js';

const gameDescription = 'What is the result of the expression?';

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const operation = operations[getRandomNumber(0, operations.length - 1)];

  let question;
  let correctAnswer;

  switch (operation) {
    case '+':
      question = `${num1} + ${num2}`;
      correctAnswer = String(num1 + num2);
      break;
    case '-':
      question = `${num1} - ${num2}`;
      correctAnswer = String(num1 - num2);
      break;
    case '*':
      question = `${num1} * ${num2}`;
      correctAnswer = String(num1 * num2);
      break;
    default:
      console.log('raition)');
  }

  return [question, correctAnswer];
};

export { gameDescription, generateRound };
