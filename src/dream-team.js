import { NotImplementedError } from "../extensions/index.js";

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (members == undefined || members == null) {
    return false;
  }

  let names = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      names.push(members[i].trim().toUpperCase());
    }
  }

  let firstLetter = [];
  for (let i = 0; i < names.length; i++) {
    firstLetter.push(names[i][0]);
  }
  return firstLetter.sort().join("");
}
