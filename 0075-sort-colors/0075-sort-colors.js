/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    sort(nums, 0, nums.length - 1);
    return nums
};

function sort(nums, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);

    sort(nums, low, mid);
    sort(nums, mid + 1, high);
    merge(nums, low, mid, high);
}

function merge(nums, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;

    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(nums[left]);
        left++;
    }
    while (right <= high) {
        temp.push(nums[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        nums[i] = temp[i - low];
    }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna