const roundN = (number, n, toFixed = true) => {
  const f = 10 ** n;
  const r = Math.round(number * f) / f;
  return toFixed ? r.toFixed(2) : r.toString();
}

export {
  roundN,
};
