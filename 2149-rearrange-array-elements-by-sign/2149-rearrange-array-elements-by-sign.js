/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let n = nums.length;
    let ansArray = []
    let positiveIndex = 0;
    let negativeIndex = 1;

    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            ansArray[negativeIndex] = nums[i];
            negativeIndex += 2;
        }
        else {
            ansArray[positiveIndex] = nums[i];
            positiveIndex += 2;
        }
    }

    return ansArray
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna