/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let n = nums.length;
    let tempP = [],
        tempN = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] >= 0) tempP.push(nums[i]);
        else tempN.push(nums[i]);
    }
    let i = 0;
    while (i < n / 2) {
        nums[i + i] = tempP[i];
        nums[i + i + 1] = tempN[i];
        i++;
    }
    return nums
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna