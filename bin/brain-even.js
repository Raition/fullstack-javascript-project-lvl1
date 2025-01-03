#!/usr/bin/env node

import readlineSync from 'readline-sync';
import sayHello from '../src/cli.js';

const name = sayHello();

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const brainMath = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const rnd = Math.floor(Math.random() * 20);
    console.log(`Question: ${rnd}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === 'yes' && isEven(rnd)) {
      console.log('Correct!');
    } else if (answer === 'no' && !isEven(rnd)) {
      console.log('Correct!');
    } else if (answer === 'yes' && !isEven(rnd)) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLets try again, ${name}!`);
      return false;
    } else if (answer === 'no' && isEven(rnd)) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLets try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
brainMath();
