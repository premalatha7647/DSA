/**
 * @param {number[]} nums
 * @return {number[]}
 */

// when the element is not n/2
var rearrangeArray = function (nums) {
    let n = nums.length;
    let ansArray = []
    let positiveArray = [];
    let negativeArray = [];

    for (let i = 0; i < n; i++) {
        if (nums[i] < 0)
            negativeArray.push(nums[i])
        else
            positiveArray.push(nums[i])
    }

    if (negativeArray.length < positiveArray.length) {
        for (let i = 0; i < negativeArray.length; i++) {
            nums[2 * i] = positiveArray[i]
            nums[2 * i + 1] = negativeArray[i]
        }

        let index = negativeArray.length * 2
        for (let i = index; i < n; i++) {
            nums[index] = positiveArray[i];
            index++
        }
    } else {
        for (let i = 0; i < positiveArray.length; i++) {
            nums[2 * i] = positiveArray[i]
            nums[2 * i + 1] = negativeArray[i]
        }

        let index = positiveArray.length * 2
        for (let i = index; i < n; i++) {
            nums[index] = negativeArray[i];
            index++
        }
    }

    return nums
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna