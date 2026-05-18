/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let n = nums.length;
    let count = 0;
    let i = 0;
    while (i < n - count) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < n - count; j++) {
                nums[j - 1] = nums[j];
            }
            nums[n - 1 - count] = 0;
            count++;
        }
        if (nums[i] != 0) {
            i++;
        }
       
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna