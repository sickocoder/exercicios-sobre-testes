const sumPowDigits = (number) => {
  if (number === 0) return 0;
  return Math.pow(number % 10, 2) + sumPowDigits(Math.floor(number / 10));
};

const isHappyNumber = (number, trackerMap = {}) => {
  if (number === 1) return true;

  const sumPow = sumPowDigits(number);

  if (trackerMap[sumPow]) return false;

  trackerMap[sumPow] = sumPow;
  return true && isHappyNumber(sumPow, trackerMap);
};

module.exports = { sumPowDigits, isHappyNumber };
