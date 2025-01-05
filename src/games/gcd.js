import { getRandomNumber, findMax } from './utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const maxNum = findMax(num1, num2);
  const stack = [];
  const question = `${num1} ${num2}`;

  for (let i = 1; i <= maxNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      stack.push(i);
    }
  }

  const correctAnswer = String(stack.pop());

  return [question, correctAnswer];
};

export { gameDescription, generateRound };
