import { expect, it } from 'vitest';
import lengthOfLongestSubstring from './subString';

it('should get the substring', () => {
  let length = lengthOfLongestSubstring('abcabcbb').length;
  let substring = lengthOfLongestSubstring('abcabcbb').longest;
  expect(substring).toBe('abc');
  expect(length).toBe(3);
});

it('should get the substring', () => {
  let length = lengthOfLongestSubstring('bbbbb').length;
  let substring = lengthOfLongestSubstring('bbbbb').longest;
  expect(substring).toBe('b');
  expect(length).toBe(1);
});

it('should get the substring', () => {
  let length = lengthOfLongestSubstring('pwwkew').length;
  let substring = lengthOfLongestSubstring('pwwkew').longest;
  expect(substring).toBe('pwke');
  expect(length).toBe(4);
});
