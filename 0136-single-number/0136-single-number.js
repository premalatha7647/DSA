/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let xor = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        xor = xor ^ nums[i];
    }
    return xor
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna