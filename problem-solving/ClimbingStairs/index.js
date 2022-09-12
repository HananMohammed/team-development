/*
                                        The Problem

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n === 1 || n === 2) {
        return n;
    } else {
        let waysToclimb1 = 1;
        let waysToclimb2 = 2;
        let waysToclimb;
        let i = 1;

        while (n - 1 > i) {
            waysToclimb = waysToclimb2 + waysToclimb1;
            waysToclimb1 = waysToclimb2;
            waysToclimb2 = waysToclimb;
            i++;
        }
        return waysToclimb;
    }
};

console.log(climbStairs(5))