const muliplo35 = (number, type) => {
  if (number === 0) return 0;

  switch (type) {
    case 'or':
      if (number % 3 === 0 || number % 5 === 0)
        return number + muliplo35(number - 1, type);
      break;
    case 'and':
      if (number % 3 === 0 && number % 5 === 0)
        return number + muliplo35(number - 1, type);
      break;

    case 'orAnd':
      if ((number % 3 === 0 || number % 5 === 0) && number % 7 === 0)
        return number + muliplo35(number - 1, type);
      break;

    default:
      return 0;
  }

  return muliplo35(number - 1, type);
};

module.exports = { muliplo35 };
