/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */



var rotate = function (nums, k) {

    let n = nums.length
    let d = k % n

    reverse(nums, 0, n - d - 1)
    reverse(nums, n - d, n - 1)
    reverse(nums, 0, n - 1)

};

function reverse(nums, start, end) {
    while (start < end) {
        ;[nums[start], nums[end]] = [nums[end], nums[start]]
        start++
        end--
    }
}


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna