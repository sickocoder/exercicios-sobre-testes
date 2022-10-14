const { isHappyNumber, sumPowDigits } = require('./index');

describe('Happy Numbers', () => {
  test('should return the sum of the digits of the number', () => {
    const sumPowOfDigits = sumPowDigits(49);

    // 4^2 + 9^2 = 97
    expect(sumPowOfDigits).toBe(97);
  });

  test('should return true if a given number is happy', () => {
    const isHappy = isHappyNumber(7);

    expect(isHappy).toBeTruthy();
  });

  test('should return false if a given number is not happy', () => {
    const isHappy = isHappyNumber(8);

    expect(isHappy).toBeFalsy();
  });
});
