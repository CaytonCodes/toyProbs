/* eslint-disable max-len */
/*
Letter Combinations of a phone number

Given a string containing digits from 2-9 inclusive, return all possible
  letter combinations that the number could represent.
Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below.
  Note that 1 does not map to any letters.
*/

/*
Input: string containing digits 2-9 inclusive. Length between 0 and 4, inclusive.
Output: All possible letter combinations that input could represent. Array of strings.
Constraints: None provided
Edge Cases: empty input string --> [];
*/

/*
  Closure scope output array
  Handle edge case, empty input

  Helperfunc -- accepts input string and current running string.
    STOP CASE: if input string is empty,
      Add current running string to output array
      return null to force the stop

    assign next input string as current input string less first letter.
      --this lets us advance through the string with each call
    assign chars as array of characters available for the first number in current input string

    Iterate through chars
      recursively call helper function with next input string and the running string with current char appended at end

    return undefined to close out recursive function in way that appeases eslint, not necessary for functionality

  call helper function with original input and empty running string

  return output array

  Result: 60ms. faster than 100% of js.

*/

const numberLetters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

const letterCombinations = (digits) => {
  const output = [];
  if (digits === '') { return output; }

  const helperFunc = (inputString, runningString) => {
    // STOP CASE
    if (inputString === '') {
      output.push(runningString);
      return null;
    }

    const firstNum = inputString[0];
    const nextInput = inputString.slice(1);
    const chars = numberLetters[firstNum];

    for (let i = 0; i < chars.length; i += 1) {
      helperFunc(nextInput, runningString + chars[i]);
    }

    return undefined;
  };

  helperFunc(digits, '');

  return output;
};

module.exports = {
  letterCombinations,
};
