/* eslint-disable no-continue */
/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d
in nums such that a + b + c + d = target? Find all unique quadruplets in the array which
gives the sum of target.

Notice that the solution set must not contain duplicate quadruplets.
*/

/*
Inputs: array of ints (length: 0 - 200 incl; pos or neg), target integer (pos or neg)
Outputs: array of all unique combinations of four values in input array that sum to target
Constraints: unique combos only
Edge Cases: empty input array or no four sum solution --> [];
Examples: provided, see test file
*/

/*
For large outputs, it is faster to sort nums than track with a hash table
This will be built in essence of k-sums as opposed to just fourSum

Use a recursive function to iterate through array until for all subsequent values from previous call
decrement k with each call until we have a two sum problem.

Call two sum on remaining array.
*/

const fourSum = (nums, target) => {
  nums.sort((a, b) => a - b);

  const k = 4;
  const res = [];

  const twoSum = (twoTarget, startIndex, predVals) => {
    let low = startIndex;
    let high = nums.length - 1;

    const hiDec = () => {
      let decLevel = 1;
      while (nums[high - decLevel] === nums[high]) {
        decLevel += 1;
      }
      high -= decLevel;
    };

    const loInc = () => {
      let incLevel = 1;
      while (nums[low + incLevel] === nums[low]) {
        incLevel += 1;
      }
      low += incLevel;
    };

    while (low < high) {
      const sum = nums[low] + nums[high];

      if (sum < twoTarget) {
        loInc();
      } else if (sum > twoTarget) {
        hiDec();
      } else {
        res.push([...predVals, nums[low], nums[high]]);
        loInc();
        hiDec();
      }
    }
    return null;
  };

  const kDecrementor = (newK, newTarget, startIndex, predVals) => {
    if (newK === 2) {
      twoSum(newTarget, startIndex, predVals);
      return null;
    }

    let moved = false;

    for (let i = startIndex; i <= nums.length - newK; i += 1) {
      const thisVal = nums[i];
      const nextTarget = newTarget - thisVal;
      const nextStart = i + 1;

      if (moved && nums[i] === nums[i - 1]) {
        continue;
      }
      kDecrementor(newK - 1, nextTarget, nextStart, [...predVals, thisVal]);
      moved = true;
    }

    return undefined;
  };

  kDecrementor(k, target, 0, []);

  return res;
};

module.exports = {
  fourSum,
};
