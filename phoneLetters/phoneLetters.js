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
recursive option: for each character aligning with first letter, append all returned
  values from thisfunction(input string less first character), to current character
  issue: this has extra loops through output options.
  overcome this with closure scope output and an input of preceeding values
    for each option in first character, call thisFunction(adjust input, current string)
  stop case: if string is empty return [].

  Result: 60ms faster than 100% of js.

*/

const numberLets = {
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
    const chars = numberLets[firstNum];

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
