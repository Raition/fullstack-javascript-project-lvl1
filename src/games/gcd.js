import getRandomNumber from './utils.js';
import runGame from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2, i) => {
  if (num1 % i === 0 && num2 % i === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const maxNum = Math.max(num1, num2);
  const stack = [];
  const question = `${num1} ${num2}`;

  for (let i = 1; i <= maxNum; i += 1) {
    if (findGcd(num1, num2, i)) {
      stack.push(i);
    }
  }

  const correctAnswer = String(stack.pop());

  return [question, correctAnswer];
};

export default () => runGame(gameDescription, generateRound);
