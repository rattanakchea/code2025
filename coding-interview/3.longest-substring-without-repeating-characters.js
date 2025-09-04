/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  let set = new Set();
  for (; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]); // !important, delete from the left, continuous substring
      left++;
    }

    set.add(s[right]);
    // substringt with unique characters
    let size = right - left + 1;
    maxLength = Math.max(maxLength, size);
    // Optional: save the left index to remember starting index
  }

  return maxLength;
};
// @lc code=end

let s = "abcabcbb";
lengthOfLongestSubstring(s);
