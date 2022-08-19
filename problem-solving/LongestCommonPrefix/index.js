/*
                                        The Problem

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs[0] || strs.length ==1 ){

      return strs[0] || "";
    }
    let charcaterPosition = 0;

    while(strs[0][charcaterPosition] && strs.every(str => str[charcaterPosition] === strs[0][charcaterPosition] ))
      charcaterPosition++;

    return strs[0].substr(0, charcaterPosition);
};
longestCommonPrefix( ["flower","flow","flight"] )