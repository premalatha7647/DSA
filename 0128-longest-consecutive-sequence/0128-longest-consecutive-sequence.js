/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let n = nums.length;
    if (!n) return 0;
    let longest = 1;
    let st = new Set(nums);

    for (let it of st) {
        if (!st.has(it - 1)) {
            let count = 1;
            let x = it;
            while (st.has(x + 1)) {
                x += 1;
                count += 1;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest
};



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna