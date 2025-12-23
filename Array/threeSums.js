function threeSum(nums) {
  //First sort the array
  nums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum == 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

let nums1 = [-1, 0, 1, 2, -1, -4];

let nums2 = [0, 0, 0, 0];

let nums3 = [-2, 0, 1, 1, 2];

// Edge cases
let nums4 = [0, 1];

let nums5 = [1, 2, -2, -1];

console.log(threeSum(nums1));
