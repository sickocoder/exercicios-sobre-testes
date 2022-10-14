const { muliplo35 } = require('./index');

describe('Multiplo de 3, 5 e/ou 7', () => {
  test('should return the sum of multiples of 3 or 5 under 10', () => {
    const sumOfMultiplesOf3or5 = muliplo35(9, 'or');

    // 3 + 5 + 6 + 9 = 23
    expect(sumOfMultiplesOf3or5).toBe(23);
  });

  test('should return the sum of multiples of 3 and 5 under 1000', () => {
    const sumOfMultiplesOf3or5 = muliplo35(1000, 'and');

    expect(sumOfMultiplesOf3or5).toBe(33165);
  });

  test('should return the sum of multiples of 3 or 5 at the same time multiple of 7 under 1000', () => {
    const sumOfMultiplesOf3or5 = muliplo35(1000, 'orAnd');

    expect(sumOfMultiplesOf3or5).toBe(33173);
  });
});
