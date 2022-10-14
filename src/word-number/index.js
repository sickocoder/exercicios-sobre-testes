const alphabetDataSet = require('./word-number.data.json');
const { isHappyNumber } = require('../happy-numbers');

const isPrimeNumber = (number, auxNumber = -1, counter = 0) => {
  if (auxNumber < 0) auxNumber = number;

  if (counter > 2) return false;
  if (auxNumber === 0) return true;

  return isPrimeNumber(
    number,
    auxNumber - 1,
    number % auxNumber === 0 ? counter + 1 : counter
  );
};

const getWordValue = (word) => {
  const charArray = word.split('');
  let sum = 0;

  for (const letter of charArray) {
    if (alphabetDataSet[letter] !== undefined) {
      sum += alphabetDataSet[letter];
    }
  }

  return sum;
};

const wordNumber = (input) => {
  const result = {};
  const words = input.split(' ');

  for (const word of words) {
    const wordValue = getWordValue(word);
    const isPrime = isPrimeNumber(wordValue);
    const isHappy = isHappyNumber(wordValue);

    result[word] = {
      wordValue,
      isPrime,
      isHappy,
      isMultiple: wordValue % 3 === 0 || wordValue % 5 === 0,
    };
  }

  return result;
};

module.exports = { isPrimeNumber, getWordValue, wordNumber };
