/**
 * PROBLEM: Two Sum
 *
 * Given an array of integers and a target value,
 * return the indices of the two numbers such that
 * they add up to the target.
 *
 * Constraints:
 * - Exactly one solution exists
 * - You cannot use the same index twice
 *
 * Example:
 * nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 */

/**
 * BRUTE FORCE APPROACH:
 * - Use two nested loops
 * - Check every possible pair
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * Problem:
 * - Inefficient for large inputs
 */

/**
 * OPTIMIZED APPROACH (USING HASH MAP):
 *
 * Idea:
 * - While iterating through the array, for each element
 *   calculate its complement (target - current element).
 * - Store previously seen numbers in a HashMap (Map in JS)
 *   with value as index.
 * - If the complement already exists in the map,
 *   we have found the answer.
 *
 * Why HashMap?
 * - Allows O(1) average-time lookup
 * - Reduces time complexity from O(n^2) to O(n)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSums(arr, target) {
    // Map to store value -> index
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        // Calculate the required complement
        const complement = target - arr[i];

        // Check if complement already exists
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Store current value with its index
        map.set(arr[i], i);
    }

    // As per constraints, this line should never be reached
    return [];
}

// Example usage
const result = twoSums([2, 7, 9, 15], 9);
console.log("The final pairs value are =>", result);
