/*
PROBLEM:
Check if a string is a palindrome considering only alphanumeric characters
and ignoring case.

---------------------------------------------------
BRUTE FORCE APPROACH (EXPLANATION ONLY):

1. Create an empty string.
2. Traverse the original string.
3. Keep only alphanumeric characters.
4. Convert them to lowercase.
5. Reverse the cleaned string.
6. Compare cleaned string with reversed string.

Time Complexity: O(n)
Space Complexity: O(n)

---------------------------------------------------
OPTIMIZED APPROACH (TWO POINTER TECHNIQUE):

- Use two pointers: left (start) and right (end)
- Skip non-alphanumeric characters
- Compare characters ignoring case
- Move pointers inward

Time Complexity: O(n)
Space Complexity: O(1)
---------------------------------------------------
*/

// Helper function to check if a character is alphanumeric
function isAlphaNumeric(chr) {
  if (chr >= "a" && chr <= "z") return true;
  if (chr >= "A" && chr <= "Z") return true;
  if (chr >= "0" && chr <= "9") return true;
  return false;
}

// Optimized palindrome check using two pointers
function validPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {

    // Skip non-alphanumeric characters from left
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from right
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    // Compare characters ignoring case
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    // Move both pointers inward
    left++;
    right--;
  }

  return true;
}

// Test case
const s = "A man, a plan, a canal: Panama";
console.log(validPalindrome(s)); // true
