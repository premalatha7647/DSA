/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length;
    let count = 0;
    let i = 0;
    for (let j = 0; j < n; j++) {
        if (nums[j] != 0) {
            nums[i] = nums[j];
            i++;
        }
    }

    for (let j = i; j < n; j++) {
        nums[j] = 0;
    }


};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna