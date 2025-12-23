/**
 * Problem: 3Sum
 * ----------------
 * Given an array of numbers, find all unique triplets [a, b, c] in the array
 * such that a + b + c = 0.
 *
 * Example:
 * Input: [-1, 0, 1, 2, -1, -4]
 * Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 * Approach:
 * 1. Sort the array to make duplicate handling and two-pointer scanning easier.
 * 2. Loop through the array with index `i` to fix the first element of the triplet.
 * 3. Use two pointers (`left` and `right`) to find the other two numbers such that sum = 0.
 * 4. Skip duplicates to ensure unique triplets.
 * 5. Time Complexity: O(n^2), Space Complexity: O(1) extra (excluding output).
 *
 * YouTube Reference: https://www.youtube.com/watch?v=cRBSOz49fQk
 */

function threeSum(nums) {
  // Step 1: Sort the array in ascending order
  nums = nums.sort((a, b) => a - b);

  const result = [];

  // Step 2: Loop through each number to fix the first element
  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicates for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;              // Start pointer
    let right = nums.length - 1;   // End pointer

    // Step 3: Use two pointers to find remaining two numbers
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        // Found a valid triplet
        result.push([nums[i], nums[left], nums[right]]);

        // Step 4: Skip duplicates for left and right
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // Move to next new values
        left++;
        right--;
      } else if (sum < 0) {
        // Sum too small → move left pointer to larger values
        left++;
      } else {
        // Sum too large → move right pointer to smaller values
        right--;
      }
    }
  }

  return result;
}

// Test cases
let nums1 = [-1, 0, 1, 2, -1, -4];   // Output: [[-1, -1, 2], [-1, 0, 1]]
let nums2 = [0, 0, 0, 0];            // Output: [[0, 0, 0]]
let nums3 = [-2, 0, 1, 1, 2];        // Output: [[-2, 0, 2], [-2, 1, 1]]
let nums4 = [0, 1];                  // Output: [] → fewer than 3 elements
let nums5 = [1, 2, -2, -1];          // Output: [] → no triplet sums to 0

console.log(threeSum(nums1));
console.log(threeSum(nums2));
console.log(threeSum(nums3));
console.log(threeSum(nums4));
console.log(threeSum(nums5));

/**
 * Notes / Explanation:
 * --------------------------------
 * 1. Sorting the array is crucial for:
 *    - Efficient two-pointer scanning.
 *    - Handling duplicates easily.
 *
 * 2. Duplicate handling:
 *    - For the first element (i), skip if it's the same as the previous.
 *    - For left and right pointers, after finding a triplet, skip duplicates in one linear jump.
 *
 * 3. Time Complexity:
 *    - Outer loop over `i` → O(n)
 *    - Two-pointer scan inside → O(n) per `i`
 *    - Total → O(n^2)
 *
 * 4. Space Complexity:
 *    - Only extra space is for the output array → O(1) extra otherwise.
 *
 * 5. Why pointers do not increase complexity:
 *    - Each element is visited at most once by left and right.
 *    - Skipping duplicates is just “jumping” in the same linear pass.
 *
 * Reference / Tutorial: https://www.youtube.com/watch?v=cRBSOz49fQk
 */
