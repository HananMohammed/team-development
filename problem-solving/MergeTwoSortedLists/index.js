/*
                                  The Problem

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dumyNode = new ListNode(-Infinity);
  let prevPointer = dumyNode;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
     // console.log(list1, list2);
      prevPointer.next = list1;
      prevPointer = list1;
      list1 = list1.next;
    } else {
      prevPointer.next = list2;
      prevPointer = list2;
      list2 = list2.next;
    }
  }
 
  if (!list1) prevPointer.next = list2;
  if (!list2) prevPointer.next = list1;
 console.log(dumyNode.next);
  return dumyNode.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

mergeTwoLists([1, 2, 5, 4], [1, 3, 4]);
