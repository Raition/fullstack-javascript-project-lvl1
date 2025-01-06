const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const findMax = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

export { getRandomNumber, findMax };
