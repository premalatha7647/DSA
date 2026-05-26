/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let maxElement = -Infinity;
    let count = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let tempCount = 0;
        if (nums[i] != maxElement) {
            for (let j = i; j < n; j++) {
                if (nums[i] === nums[j] && nums[j] != maxElement) {
                    tempCount++;
                }
            }
            if (tempCount > count) {
                count = tempCount;
                maxElement = nums[i];
            }
        }
    }
    return maxElement
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna