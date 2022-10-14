const { getWordValue, isPrimeNumber, wordNumber } = require('./index');

describe('Prime number', () => {
  test('should return true if a given number is prime', () => {
    const isPrime = isPrimeNumber(3);

    expect(isPrime).toBeTruthy();
  });

  test('should return false if a given number is prime', () => {
    const isPrime = isPrimeNumber(9);

    expect(isPrime).toBeFalsy();
  });
});

describe('Word counter', () => {
  test('should return the sum of values of each letter on a given word', () => {
    const sumOfLetterValues = getWordValue('hello');

    // h = 8, e = 5, l = 12, o = 15
    // 8 + 5 + 12 + 12 + 15 = 52
    expect(sumOfLetterValues).toBe(52);
  });

  test('should ignore non alphabetic symbols on words', () => {
    const sumOfLetterValues = getWordValue('}ell[');

    // 5 + 12 + 12 = 27
    expect(sumOfLetterValues).toBe(29);
  });
});

describe('Word number check', () => {
  test('should return the right values', () => {
    const resultObject = wordNumber('g world');

    expect(Object.keys(resultObject).length).toBe(2);
    expect(resultObject).toEqual({
      g: {
        wordValue: 7,
        isPrime: true,
        isHappy: true,
        isMultiple: false,
      },
      world: {
        wordValue: 72,
        isPrime: false,
        isHappy: false,
        isMultiple: true,
      },
    });
  });
});
