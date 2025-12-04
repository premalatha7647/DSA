/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let expectedNums = []
    let i = 0;
    let j = 0;
    expectedNums[j] = nums[i]

    while (i < nums.length) {
        if (nums[i] > expectedNums[j]) {
            expectedNums.push(nums[i]);
            j++
        }
        i++
    }
    let k = expectedNums.length
    for (i = 0; i < k; i++) {
        nums[i] = expectedNums[i]
    }
    return k

};