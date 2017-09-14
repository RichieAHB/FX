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

const charCleaning = str => str.replace(/[^0-9.]/g, '');

const decimalCleaning = (str, dp = 2) => {
  const output = str.split('.');
  const hadDecimal = output.length > 1;
  let pre = output.shift();
  pre = pre ? pre : '0';
  const post = output.join('').split('').slice(0, dp).join('');

  if (hadDecimal) {
    return `${pre}.${post}`;
  }

  return pre;
};

// Does not round as it is for strings
// Todo should probably use FP and pipe all this! UGLY
const sanitizeCurrency = (str, dp = 2) =>
  decimalCleaning(stripLeading(charCleaning(str), '0') || '0', dp);

export {
  sanitizeCurrency,
};
