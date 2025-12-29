/**
 * Problem: Remove Duplicates from Sorted Array
 * -------------------------------------------
 * Given a sorted array `nums`, remove the duplicates in-place such that
 * each unique element appears only once.
 *
 * Return the number of unique elements `k`.
 * The first `k` elements of `nums` should contain the unique values.
 * The remaining elements do not matter.
 *
 * Example:
 * Input:  [0,0,1,1,1,2,2,3,3,4]
 * Output: 5
 * Array:  [0,1,2,3,4,_,_,_,_,_]
 *
 * Approach (Two Pointer / In-place overwrite):
 * 1. Since the array is sorted, all duplicates are adjacent.
 * 2. Use one pointer `i` to scan the array.
 * 3. Use another pointer `k` to track where the next unique value should be written.
 * 4. When nums[i] is different from nums[i - 1], it is a new unique number.
 *    → Write it at nums[k] and increment k.
 * 5. Duplicates are skipped automatically.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function removeDuplicatesFromSortedArray(nums) {
  // If array is empty, no unique elements exist
  if (nums.length === 0) return 0;

  // k is the write pointer.
  // It represents where the next unique value should be stored.
  let k = 1;

  // Start scanning from second element
  for (let i = 1; i < nums.length; i++) {

    // If current element is different from the previous one,
    // it means we found a new unique value
    if (nums[i] !== nums[i - 1]) {

      // Overwrite the element at position k with this new unique value
      nums[k] = nums[i];

      // Move the write pointer forward
      k++;
    }
    // If same as previous, it's a duplicate → skip
  }

  // k is the count of unique elements
  return k;
}

// Test cases
let nums1 = [0,0,1,1,1,2,2,3,3,4];  // Expected: 5 → [0,1,2,3,4]
let nums2 = [1,1,2];              // Expected: 2 → [1,2]
let nums3 = [];                   // Expected: 0
let nums4 = [1];                  // Expected: 1

console.log(removeDuplicatesFromSortedArray(nums1));
console.log(removeDuplicatesFromSortedArray(nums2));
console.log(removeDuplicatesFromSortedArray(nums3));
console.log(removeDuplicatesFromSortedArray(nums4));

/**
 * Notes / Explanation:
 * --------------------------------
 * 1. Why `k` is used:
 *    - `k` is NOT just a counter.
 *    - It is the index where the next unique value should be written.
 *    - All elements before index `k` are already deduplicated.
 *
 * 2. Why overwriting works:
 *    - We don't remove elements physically.
 *    - We simply overwrite duplicates by shifting unique values forward.
 *
 * 3. Why sorted array helps:
 *    - Duplicates are always next to each other.
 *    - We only need to compare nums[i] with nums[i-1].
 *
 * 4. Time Complexity:
 *    - Single loop → O(n)
 *
 * 5. Space Complexity:
 *    - No extra array used → O(1)
 */
