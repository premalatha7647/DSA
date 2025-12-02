/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rev = 0;
    let xCopy = Math.abs(x)
    while (xCopy > 0) {
        rev = rev * 10 + (xCopy % 10);
        xCopy = Math.floor(xCopy / 10);
    }
    let max32 = 2 ** 31 // Math.pow(2,31)
    if (rev < - max32 || rev > max32 - 1) {
        return 0
    }
    return x < 0 ? -rev : rev
};