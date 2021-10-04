import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const result = {};
    
  for (let i = 0; i < domains.length; i++) {
    const dom = domains[i].split('.').reverse();
    let itog = '';
    for (let j = 0; j < dom.length; j++) {
      itog += `.${dom[j]}`;
      if (result[itog] === undefined) {
        result[itog] = 1;
      } else {
        result[itog] += 1;
      }
    }
  }
return result;
}
