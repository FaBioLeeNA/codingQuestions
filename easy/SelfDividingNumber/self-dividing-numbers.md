---
title: 'Sefl Dividing Numbers'
link: 'https://leetcode.com/problems/self-dividing-numbers/'
---


### Prompt
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because `128 % 1 == 0`, `128 % 2 == 0`, and `128 % 8 == 0`.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.




### Examples

#### Input 1
`left = 1, right = 22`
#### Output 1
`[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]`


### Constraints

* `1 <= left <= right <= 10000`


### Solution

```
var selfDividingNumbers = function(left, right) {
    let answer = [];
    
    for (let i = left; i <= right; i++) {
        if (check(i)) {
            answer.push(i);
        }
    }
    
    return answer;
};

const check = (n) => {
    if (n < 10) {
        return n;
    }
    let arr = n.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (n % +arr[i] != 0) {
            return false;
        }
    }
    return true;
}
```
