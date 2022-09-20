import { it, expect } from 'vitest';
import sum from './app';

it('should add all the numbers', () => {
  const result = sum(1, 2, 3);
  expect(result).toBe(6);
});

it('return 0 if no numbers are passed', () => {
  const result = sum();
  expect(result).toBe(0);
});

it('if single number is passed it should return same number', () => {
  const result = sum(3);
  expect(result).toBe(3);
});
