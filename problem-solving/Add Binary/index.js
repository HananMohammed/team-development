/*
                                        The Problem
Given two binary strings a and b, return their sum as a binary string.
*/

function reverseString(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");   
  return joinArray;
}
 

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  aLength = a.length;
  bLength = b.length;

  if(bLength > aLength){
    for (let i = 0; i < (bLength-aLength); i++) {
      a = '0'.concat(a)
    }
  }
  if(aLength > bLength){
    for (let i = 0; i < (aLength-bLength); i++) {
      b = '0'.concat(b)
    }
  }
  
  let result = [], carryOver = 0, sum='';
 
  for (let i = a.length-1 ; i >=0 ; i--) {
    let lastSum = parseInt(a.at(i)|| 0) + parseInt(b.at(i) || 0) +carryOver;
   // console.log(lastSum);
    if(lastSum === 2){
      lastSum = 0;
      carryOver = 1
    }else if(lastSum === 3){
      lastSum = 1;
      carryOver = 1;
    }else{
      carryOver = 0;
    }
    sum = sum + String(lastSum)
  }
  if(carryOver){
    sum = sum + carryOver
  }
  
console.log( reverseString(sum));
  return reverseString(sum);
};

addBinary("100", "110010")


