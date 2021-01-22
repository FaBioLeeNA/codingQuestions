// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head, parent = null) {
  if (head === null) {
      return head;
  }

  if (head.next === null) {
    head.next = parent;
    return head;
  }

  let tempNext = head.next;
  let tempParent = head;
  head.next = parent;
  return reverseList(tempNext, tempParent);
};