import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let arrCopy = [...arr];
  arrCopy = arrCopy.sort((a, b) => a - b);

  const arrCopy2 = [];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] !== -1) {
      arrCopy2.push(arrCopy[i]);
    }
  }

  const arrResult = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrResult.push(arr[i]);
    } else {
      arrResult.push(arrCopy2[count]);
      count += 1;
    }
  }
  return arrResult;
}
