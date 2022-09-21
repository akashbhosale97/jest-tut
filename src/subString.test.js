import { expect, it } from 'vitest';
import lengthOfLongestSubstring from './subString';

it('should get the substring', () => {
  let res = lengthOfLongestSubstring('abcabcbb').length;
  let substring = lengthOfLongestSubstring('abcabcbb').longest;
  expect(substring).toBe('abc');
  expect(res).toBe(3);
});

it('should get the substring', () => {
  let res = lengthOfLongestSubstring('bbbbb').length;
  let substring = lengthOfLongestSubstring('bbbbb').longest;
  expect(substring).toBe('b');
  expect(res).toBe(1);
});

it('should get the substring', () => {
  let res = lengthOfLongestSubstring('pwwkew').length;
  let substring = lengthOfLongestSubstring('pwwkew').longest;
  expect(substring).toBe('pwke');
  expect(res).toBe(4);
});
