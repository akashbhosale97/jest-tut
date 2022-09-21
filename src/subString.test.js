import { expect, it } from 'vitest';
import lengthOfLongestSubstring from './subString';

it('should get the substring', () => {
  let res = lengthOfLongestSubstring('abcabcbb');
  expect(res).toBe(3);
});

it('should get the substring', () => {
  let res = lengthOfLongestSubstring('bbbbb');
  expect(res).toBe(1);
});

it('should get the substring', () => {
  let res = lengthOfLongestSubstring('pwwkew');
  expect(res).toBe(4);
});
