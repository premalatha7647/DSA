/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let ele,
        count = 0;
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (count === 0) {
            count = 1;
            ele = nums[i];
        } else if (nums[i] === ele) {
            count++;
        } else {
            count--;
        }
    }
    return ele
};

// only if the majority not confirmed
// var majorityElement = function (nums) {
//     let ele,
//         count = 0;
//     let n = nums.length;
//     for (let i = 0; i < n; i++) {
//         if (count === 0) {
//             count = 1;
//             ele = nums[i];
//         } else if (nums[i] === ele) {
//             count++;
//         } else {
//             count--;
//         }
//     }
//     let count1 = 0;
//     for (let i = 0; i < n; i++) {
//         if (ele === nums[i]) {
//             count1++;
//         }
//     }
//     if (count1 > Math.floor(n / 2)) {
//         return ele;
//     }
//     return -1;
// };

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna