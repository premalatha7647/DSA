/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxConsecutive = 0;
    let currentCount = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            currentCount++;
        } else {
            currentCount = 0;
        }
        maxConsecutive = Math.max(currentCount, maxConsecutive);
    }
    return maxConsecutive
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna