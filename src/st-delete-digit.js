import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const arr = [];
  let newStr = String(n);

  for (let i = 0; i < newStr.length; i++) {
    arr.push(Number(newStr.slice(0, i) + newStr.slice(i + 1)));
  }

  return Math.max(...arr);
}
