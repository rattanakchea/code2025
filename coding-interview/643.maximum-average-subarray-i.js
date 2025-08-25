/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let windowSum = 0;
  let maxSum = -Infinity;

  // step 1 sum of first windown
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;

  // Step2: slide the window
  for (let i = k; i < nums.length; i++) {
    // substract the element going out, add the new one coming in
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
};
// @lc code=end
