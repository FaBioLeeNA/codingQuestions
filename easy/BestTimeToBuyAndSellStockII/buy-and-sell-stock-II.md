---
title: 'Best Time to Buy and Sell Stock II'
link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/'
---


### Prompt
You are given an array `prices` for which the `i`th element is the price of a given stock on day `i`.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

**Note:** You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).





### Examples

#### Input 1
`prices = [7,1,5,3,6,4]`
#### Output 1
`7`

#### Explanation
```
Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
```


#### Input 2
`prices = [1,2,3,4,5]`
#### Output 2
`4`
#### Explanation
```
Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
```

### Constraints

* `1 <= prices.length <= 3 * 10^4`
* `0 <= prices[i] <= 10^4`


### Solution

```
var maxProfit = function(prices) {
  var profit = 0;
  for (var i = 0; i < prices.length - 1; i++) {
      if (prices[i] < prices[i + 1]) {
          profit += prices[i + 1] - prices[i];
      }
  }
  return profit;
};
```
