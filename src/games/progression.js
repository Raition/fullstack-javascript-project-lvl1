import getRandomNumber from './utils.js';
import runGame from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 20);
  const length = 10;

  const progression = generateProgression(start, step, length);

  const hiddenNum = getRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenNum]);
  progression[hiddenNum] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => runGame(gameDescription, generateRound);
