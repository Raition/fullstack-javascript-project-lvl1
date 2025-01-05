import { getRandomNumber } from './utils.js';

const gameDescription = 'What number is missing in the progression?';

const generateRound = () => {
  let progression = '';
  let firstNum = getRandomNumber(1, 20);
  const progressionNum = getRandomNumber(1, 20);
  const space = getRandomNumber(2, 8);
  let hiddenNum = 0;

  for (let i = 0; i < 9; i += 1) {
    if (i === space) {
      progression += '.. ';
      firstNum += progressionNum;
      hiddenNum = firstNum;
      // eslint-disable-next-line no-continue
      continue;
    }
    firstNum += progressionNum;
    progression += `${firstNum} `;
  }

  const question = progression;
  const correctAnswer = String(hiddenNum);
  return [question, correctAnswer];
};

export { gameDescription, generateRound };
