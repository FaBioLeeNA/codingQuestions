---
title: 'Best Time to Buy and Sell Stock'
link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/'
---


### Prompt
You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day** in the future to sell that stock.

Return the `maximum profit` you can achieve from this transaction. If you cannot achieve any profit, return `0`.




### Examples

#### Input 1
`prices = [7,1,5,3,6,4]`
#### Output 1
`5`

#### Explanation
```
Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```


#### Input 2
`prices = [7,6,4,3,1]`
#### Output 2
`0`
#### Explanation
`In this case, no transactions are done and the max profit = 0.`

### Constraints

* `1 <= prices.length <= 10^5`
* `0 <= prices[i] <= 10^4`


### Solution

```
var maxProfit = function(prices) {
    let min = Number.POSITIVE_INFINITY;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
    }
    return maxProfit;
};
```
