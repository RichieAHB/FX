const roundN = (number, n, toFixed = true) => {
  const f = 10 ** n;
  return Math.round(number * f) / f;
}

export {
  roundN,
};
