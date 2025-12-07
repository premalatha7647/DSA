/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let x = 0;
    while (x < arr.length) {
        if (arr[x] === 0) {
            for (let j = arr.length - 1; j > x; j--) {
                arr[j] = arr[j - 1]
            }
            x = x + 2
            console.log(arr)
        } else {
            x++
        }
    }
};