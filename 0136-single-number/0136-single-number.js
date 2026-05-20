/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let singleNum = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let count = 0;
        singleNum = nums[i];
        for (let j = 0; j < n; j++) {
            if (singleNum === nums[j]) count++;
        }
        if (count === 1) {
            return singleNum
        }
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna