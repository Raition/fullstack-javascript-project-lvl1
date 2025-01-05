import { getRandomNumber } from './utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateRound = () => {
  let progression = '';
  let firstNum = getRandomNumber(1, 20);
  const progressionNum = getRandomNumber(1, 20);
  const space = getRandomNumber(2, 9);

  for (let i = 0; i < 9; i += 1) {
    if (i === space) {
      progression += '.. ';
    }
    firstNum += progressionNum;
    progression += `${firstNum} `;
  }

  const question = progression;
  const correctAnswer = String(progressionNum);
  return [question, correctAnswer];
};

export { gameDescription, generateRound };
