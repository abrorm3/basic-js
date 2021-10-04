import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const str1Arr = s1.split('');
  const str2Arr = s2.split('');
  let count = 0;

  if (str1Arr.length >= str2Arr.length) {
    for (let i = 0; i < str1Arr.length; i++) {
      let index = str2Arr.indexOf(str1Arr[i]);
      if (index != -1) {
        count++;
        str2Arr[index] = '';
      }
    }
  } else {
    for (let i = 0; i < str2Arr.length; i++) {
      let index = str1Arr.indexOf(str2Arr[i]);
      if (index != -1) {
        count++;
        str1Arr[index] = '';
      }
    }
  }
  return count;
}
