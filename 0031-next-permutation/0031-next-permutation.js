/**
 * @param {number[]} nums
  * @return {void} Do not return anything, modify nums in-place instead.
   */
var nextPermutation = function (nums) {

    let n = nums.length;
    let index = -1;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            index = i
            break
        }
    }

    if (index === -1) {
        reverse(0, n - 1, nums)
        return nums
    }

    for (let i = n - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]]
            break
        }
    }

    reverse(index + 1, n - 1, nums)
    return nums

};

function reverse(i, j, nums) {
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++;
        j--
    }
} 

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna