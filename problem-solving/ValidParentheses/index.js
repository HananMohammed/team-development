/*
                                        The Problem

    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:

    1- Open brackets must be closed by the same type of brackets.
    2- Open brackets must be closed in the correct order.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let leftSymbolsStack = [];
     // Loop for each character of the string
    for (let i = 0; i < s.length; i++) {
        // If left symbol is encountered
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            leftSymbolsStack.push(s[i]);
        }
        // If right symbol is encountered
        else if ( s[i] === ")" && leftSymbolsStack.length > 0 && leftSymbolsStack[leftSymbolsStack.length - 1] === "(") {
            leftSymbolsStack.pop()
        }
        else if ( s[i] === "]" && leftSymbolsStack.length > 0 && leftSymbolsStack[leftSymbolsStack.length - 1] === "[") {
            leftSymbolsStack.pop()
        }  
        else if (s[i] === "}" && leftSymbolsStack.length > 0 && leftSymbolsStack[leftSymbolsStack.length - 1] === "{") {
            leftSymbolsStack.pop();
        } 
        // If none of the valid symbols is encountered
        else {
            return false;
        }
    }

    return leftSymbolsStack.length === 0;
};

isValid("{[]}");