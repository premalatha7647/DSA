/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    let n = nums.length
    let d = k % n
    let temp = []
    for (let i = n - d; i < n; i++) {
        temp[i - (n - d)] = nums[i]
    }

    for (let i = n - d - 1; i >= 0; i--) {
        nums[i + d] = nums[i]
    }

    for (let i = 0; i < d; i++) {
        nums[i] = temp[i]
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna