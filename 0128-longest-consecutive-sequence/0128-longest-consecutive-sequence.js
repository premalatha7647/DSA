/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length
    if (!n)
        return n

    nums = nums.sort((a, b) => a - b)
    let longest = 1;
    let currentCount = 0;
    let lastSmaller = nums[0] - 1
    for (let i = 0; i < n; i++) {
        if (nums[i] - 1 === lastSmaller) {
            currentCount += 1;
            lastSmaller = nums[i]
        } else if (nums[i] != lastSmaller) {
            currentCount = 1;
            lastSmaller = nums[i]
        }
        longest = Math.max(longest, currentCount)
    }
    return longest
};



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna