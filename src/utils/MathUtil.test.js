import { roundN } from './MathUtils';

test('roundN properly rounds', () => {
  expect(roundN(2.23, 5)).toBe(2.23);
  expect(roundN(2.23, 0)).toBe(2);
  expect(roundN(2.235, 2)).toBe(2.24);
  expect(roundN(2.234, 2)).toBe(2.23);
  expect(roundN(2, 100)).toBe(2);
});
