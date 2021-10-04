import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  console.log(String(date))
  if (Object.prototype.toString.call(date) !== '[object Date]' || typeof date !== 'object' || Object.keys(date).length > 0 || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }



  const month = date.getMonth();

  switch(month) {
    case 0:
    case 1:
    case 11:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    default: return 'autumn';
  }
}
