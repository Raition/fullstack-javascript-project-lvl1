import readlineSync from 'readline-sync';
import sayHello from './cli.js';

const name = sayHello();

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const brainEven = () => {
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
    } else { return false; }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

const brainCalc = () => {
  console.log('What is the result of the expression?');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const operations = ['+', '-', '*'];
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];
    const num1 = Math.floor(Math.random() * 25);
    const num2 = Math.floor(Math.random() * 25);
    let result = 0;
    switch (randomOperation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      default:
        return false;
    }
    console.log(`Question: ${num1} ${randomOperation} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === result) {
      console.log('Correct!');
    } else if (Number(answer) !== result) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export { brainCalc, brainEven };
