/*
===========================================
CONTAINER WITH MOST WATER — NOTES
===========================================

Problem:
---------
You are given an array where each value represents
the height of a vertical wall.

Pick TWO walls such that they can store the
maximum water between them.

Water formula:
--------------
water = min(height[left], height[right]) * (right - left)

Why?
- Water level is limited by the SHORTER wall
- Width is the distance between the two walls

------------------------------------------------
BRUTE FORCE APPROACH  — O(n^2)
------------------------------------------------
Try every possible pair and track the maximum.

*/

function maxWaterBrute(arr) {
  let maxWater = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // shorter wall × distance
      const water = Math.min(arr[i], arr[j]) * (j - i);

      // keep the maximum seen so far
      maxWater = Math.max(maxWater, water);
    }
  }

  return maxWater;
}

/*
------------------------------------------------
OPTIMIZED TWO POINTER APPROACH — O(n)
------------------------------------------------

Idea:
- Start with widest container (leftmost & rightmost)
- Move the SHORTER wall inward
- Only increasing the smaller height can increase water
*/

function maxWaterInContainer(arr) {
  let left = 0;                   // left pointer
  let right = arr.length - 1;     // right pointer
  let maxWater = 0;               // stores best result

  while (left < right) {
    // calculate water between current two walls
    const water = Math.min(arr[left], arr[right]) * (right - left);

    // update max water if current is better
    maxWater = Math.max(maxWater, water);

    // move the smaller wall
    // because water is limited by the shorter height
    if (arr[left] < arr[right]) {
      left++;    // try to find a taller left wall
    } else {
      right--;   // try to find a taller right wall
    }
  }

  return maxWater;
}

/*
------------------------------------------------
Example:
------------------------------------------------

const height = [1,8,6,2,5,4,8,3,7]
Result = 49

Why?
Between height 8 (index 1) and 7 (index 8):
min(8,7) * (8 - 1) = 7 * 7 = 49
*/
