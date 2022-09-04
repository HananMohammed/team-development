/*
                                        The Problem

Given a sorted array of distinct integers and a target value, return the index if the target
is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.


*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let current = 0;
    while (nums[current] < target) {
        current++;  
    }
    console.log(current);
    return current;
};

searchInsert([1,3,5,6], 5)