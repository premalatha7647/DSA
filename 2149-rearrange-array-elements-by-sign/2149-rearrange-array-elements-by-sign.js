/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
    let i = 0,
        j = 0
    let n = nums.length
    let temp = []
    while (i < n && j < n) {
        if (nums[i] > 0) {
            temp.push(nums[i])
            i++
        } else {
            while (nums[i] < 0) {
                i++
            }
            temp.push(nums[i])
            i++
        }
        if (nums[j] < 0) {
            temp.push(nums[j])
            j++
        } else {
            while (nums[j] > 0) {
                j++
            }
            temp.push(nums[j])
            j++
        }
    }
    return temp
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna