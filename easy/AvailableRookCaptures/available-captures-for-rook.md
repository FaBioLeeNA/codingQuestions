---
title: 'Available Captures for Rook'
link: 'https://leetcode.com/problems/available-captures-for-rook/'
---




### Prompt
On an `8 x 8` chessboard, there is one white rook `'R'`. There also may be empty squares `'.'`, white bishops `'B'`, and black pawns `'p'`. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite-colored pawn by moving to the same square it occupies. Also, rooks cannot move into the same square as other friendly bishops.

Return the `number of pawns the rook can capture in one move`.



### Examples

#### Input 1
```
board = 
[[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".","R",".",".",".","p"],
[".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","."],
[".",".",".","p",".",".",".","."],
[".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","."]]
```
#### Output 1
`3`

#### Explanation
`In this example, the rook is able to capture all the pawns.`


#### Input 2
```
board = 
[[".",".",".",".",".",".",".","."],
[".","p","p","p","p","p",".","."],
[".","p","p","B","p","p",".","."],
[".","p","B","R","B","p",".","."],
[".","p","p","B","p","p",".","."],
[".","p","p","p","p","p",".","."],
[".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".","."]]
```
#### Output 2
`0`
#### Explanation
`Bishops are blocking the rook to capture any pawn.`


### Constraints

* `board.length == 8`
* `board[i].length == 8`
* `board[i][j] is either 'R', '.', 'B', or 'p'`
* `There is exactly one cell with board[i][j] == 'R'`


### Solution

```
var numRookCaptures = function(board) {
  let x;
  let y;
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 'R') {
              x = i;
              y = j;
          }
      }
  }

  let row = [];

  for (let i = 0; i < board.length; i++) {
      row.push(board[i][y]);
  }


  const checkArray = (arr, x) => {
      let ans = 0;
      let left = x - 1;
      while (left >= 0) {
          if (arr[left] === 'p') {
              ans++;
              break;
          } else if (arr[left] === 'B') {
              break;
          }
          left--;
      }
      let right = x + 1;
      while(right < arr.length) {
          if (arr[right] === 'p') {
              ans++;
              break;
          } else if (arr[right] === 'B') {
              break;
          }
          right++;
      }
      return ans;
  }

  answer += checkArray(board[x], y);
  answer += checkArray(row, x);
  return answer;
};
```
