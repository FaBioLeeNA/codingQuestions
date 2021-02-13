const link = 'https://leetcode.com/problems/rotate-list/';
const level = 'medium'

// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]
 
var rotateRight = function(head, k) {
  if (head == null) {
      return null
  }
  let node = head;
  let length = 1;
  while (node.next !== null) {
      node = node.next;
      length++;
  }
  node.next = head;
  let limit = length - (k % length)
  let prev = node;
  for (let i = 0; i < limit + 1; i++) {
      prev = node
      node = node.next
  }
  prev.next = null;
  return node;
};