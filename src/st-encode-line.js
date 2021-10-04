import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let strResult = '';
  let summa = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      summa += 1;
    } else {
      if (summa > 1) {
        strResult += summa + str[i];
      } else {
        strResult += str[i];
      }
      summa = 1;
    }
  }
  return strResult;
}
