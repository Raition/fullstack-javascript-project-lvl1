import readlineSync from 'readline-sync';

const maxRounds = 3;

const brainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < maxRounds; i++) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is the wrong answer ;(. The correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const brainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < maxRounds; i++) {
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
        console.log('Unknown operation!');
        return;
    }

    console.log(`Question: ${num1} ${randomOperation} ${num2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is the wrong answer ;(. The correct answer was ${result}. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export { brainCalc, brainEven };
