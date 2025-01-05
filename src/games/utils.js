const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findMax = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

export { getRandomNumber, findMax, isPrime };
