/*
                                        The Problem

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  var words = s.split(" ");
  const result = words.filter(word => word != "");
  console.log(result);
  var lastword = result[result.length-1]
  console.log(lastword.length);
  return lastword.length;
};
lengthOfLastWord("   fly me   to   the moon  ")