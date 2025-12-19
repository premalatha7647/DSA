/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim();
    let res = "";
    let temp = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] != " ") {
            temp = temp + s[i];
        } else if (temp != '') {
            res = temp + " " + res;
            temp = "";
        }
    }
    res = temp + " " + res;
    return res.trim();
};