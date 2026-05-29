/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let profit = 0;
    let n = prices.length;

    for (let i = 0; i < prices.length; i++) {
        let cost = prices[i] - min;
        profit = Math.max(profit, cost);
        min = Math.min(min, prices[i]);
    }
    return profit;
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna