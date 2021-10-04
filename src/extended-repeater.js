import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  let result = str;

  if (str === null) str = "null";
  if (addition === null) addition = "null";

  if (addition != undefined) {
    let a1 = [];

    for (let i = 0; i < additionRepeatTimes; i++) a1.push(addition);

    a1 = a1.join(additionSeparator);
    result = str + a1;
  }

  let a2 = [];

  for (let i = 0; i < repeatTimes; i++) a2.push(result);

  a2 = a2.join(separator);

  return a2;
}
