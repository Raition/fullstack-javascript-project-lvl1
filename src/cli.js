import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
};
