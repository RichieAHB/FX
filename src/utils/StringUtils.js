const stripLeading = (str, stripChar = ' ') => {
  const chars = str.split('');

  let i = 0;

  for (i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    if (char !== stripChar) {
      break;
    }
  }

  return chars.slice(i).join('');
};

const decimalCleaning = (str) => {
  const output = str.split('.');
  const hadDecimal = output.length > 1;
  const pre = output.shift();
  const post = output.join('').split('').slice(0, 2).join('');

  if (hadDecimal) {
    return `${pre}.${post}`;
  }
  return pre;
};

const sanitizeCurrency = (str) =>
  decimalCleaning(stripLeading(str, '0') || '0');

export {
  sanitizeCurrency,
};
