/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
*/

/*
Input: string containing only different styles of parentheses/brackets
Output: boolean indicating if input string is a valid set of parenthesis as described above
Constraints: None provided
Edge Cases: None, no empty strings provided
Examples: See test file

Using a stack
  create stack as empty array
  create object holding closing brackets as keys, their openers as values

  iterate through string
    if current character is a key in object
      if its value is top of stack, pop from stack
      else, return false
    else, add character to stack
  if stack is empty
    return true
  return false
*/

const isValid = (s) => {
  const stack = [];
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < s.length; i += 1) {
    if (brackets[s[i]]) {
      if (stack[stack.length - 1] === brackets[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return (stack.length === 0);
};

module.exports = {
  isValid,
};
