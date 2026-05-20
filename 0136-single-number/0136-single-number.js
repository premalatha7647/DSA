/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let n = nums.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (const [key, value] of map) {
        if (value === 1) {
            return key
        }
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna