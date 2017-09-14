import { sanitizeCurrency } from './StringUtils';

test('sanitizeCurrency performs correctly', () => {
  expect(sanitizeCurrency('01.222.3.2')).toBe('1.22');
  expect(sanitizeCurrency('.1.2')).toBe('0.12');
  expect(sanitizeCurrency('1.')).toBe('1.');
  expect(sanitizeCurrency('1.2')).toBe('1.2');
  expect(sanitizeCurrency('123')).toBe('123');
  expect(sanitizeCurrency('123.45783')).toBe('123.45');
  expect(sanitizeCurrency('0.01')).toBe('0.01');
  expect(sanitizeCurrency('0.01454', 3)).toBe('0.014');
});
