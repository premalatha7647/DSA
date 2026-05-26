/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let maxElement = -Infinity;
    const n = nums.length;
    const maxCount = Math.floor(n / 2)
    for (let i = 0; i < n; i++) {
        if (nums[i] != maxElement) {
            let count = 0;
            for (let j = i; j < n; j++) {
                if (nums[i] === nums[j] && nums[j] != maxElement) {
                    count++;
                }
            }
            if (count > maxCount) {
                maxElement = nums[i];
            }
        }
    }
    return maxElement
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna