export default function lengthOfLongestSubstring(str) {
  let longest = '';
  for (let i = 0; i < str.length; i++)
    if (longest.includes(str[i]) === false) longest += str[i];
  return {
    longest,
    length: longest.length,
  };
}
