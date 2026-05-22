/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let n = nums.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        let rem = target - nums[i];

        if (map.has(rem)) {
            return ([map.get(rem), i]);
        }

        if (!map.has(nums[i])) {
            map.set(nums[i], i);
        }
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna