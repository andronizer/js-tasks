// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
//   Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
//   Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
//
// Examples
//  removeLeadingTrailing("230.000") ➞ "230"
//  removeLeadingTrailing("00402") ➞ "402"
//  removeLeadingTrailing("03.1400") ➞ "3.14"
//  removeLeadingTrailing("30") ➞ "30"

// Notes
//  Return a string.
//  If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
//  If the number is 0, 0.0, 000, 00.00, etc... return "0".
function removeLeadingTrailing(n) {
  const answer = parseFloat(n).toString();
  return answer;
}

// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//
// Examples
//  removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//  removeABC("hello world!") ➞ null
//  removeABC("") ➞ null

// Notes
//  If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
  const res = str.split(/a|b|c/g).join("")
  return str.length === res.length ? null : res; 
}

// Given a string of numbers separated by a comma and space, return the product of the numbers.
//
// Examples
//  multiplyNums("2, 3") ➞ 6
//  multiplyNums("1, 2, 3, 4") ➞ 24
//  multiplyNums("54, 75, 453, 0") ➞ 0
//  multiplyNums("10, -2") ➞ -20

// Notes
//  Bonus: Try to complete this challenge in one line!
function multiplyNums(nums) {
  return nums.split(',').reduce((a,b) => a*b , )  
}

// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.
//   If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
//   If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
//   If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
//
// Examples
//  evenOrOdd("22471") ➞ "Even and Odd are the same"
//  evenOrOdd("213613") ➞ "Even and Odd are the same"
//  evenOrOdd("23456") ➞ "Even is greater than Odd"

// Notes
//  The input will be a string of numbers.
function evenOrOdd(str) {
  let even = [];
  let odd = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      even.push(str[i]);
    } else {
      odd.push(str[i]);
    }
  }

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < even.length; i++) {
    sum1 += Number(even[i]);
  }

  for (let i = 0; i < odd.length; i++) {
    sum2 += Number(odd[i]);
  }

  if (sum1 > sum2) {
    return "Even is greater than Odd";
  } else if (sum1 < sum2) {
    return "Odd is greater than Even";
  } else if (sum1 === sum2) {
    return "Even and Odd are the same";
  }
}
// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
//
//  To illustrate:
//    123
//    We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
//
// Examples
//  reverseAndNot(123) ➞ 321123
//  reverseAndNot(152) ➞ 251152
//  reverseAndNot(123456789) ➞ 987654321123456789
//
// Notes
// i is a non-negative integer.
function reverseAndNot(i) {
  const str = '' + i;
  return str.split('').reverse().join('') + str;
}


// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
//   When "x" and "o" are not in the string, return true.
//
// Examples
//  XO("ooxx") ➞ true
//  XO("xooxx") ➞ false
//  XO("ooxXm") ➞ true
//  XO("zpzpzpp") ➞ true
//    Returns true if no x and o.
//  XO("zzoo") ➞ false

// Notes
//  Remember to return true if there aren't any x's or o's.
//  Must be case insensitive.
function XO(str) {
  let x = [];
  let o = [];
  let arr1 = str.toLowerCase();
  arr1.split('');
  for (let i=0; i < arr1.length; i++) {
    if (arr1[i].includes("x"))
  {
    x.push(arr1[i])
  	
  }
}
let arr2 = str.split('');
for (let i=0; i < arr2.length; i++) {
  if (arr2[i].includes("o"))
{
  o.push(arr2[i])
 
}
}
if (x.length == o.length) {
  return true
}
if (x.length > o.length || x.length < o.length) {
  return false
}
}

// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
//
// Examples
//  makeTitle("This is a title") ➞ "This Is A Title"
//  makeTitle("capitalize every word") ➞ "Capitalize Every Word"
//  makeTitle("I Like Pizza") ➞ "I Like Pizza"
//  makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
//
// Notes
//  You can expect a valid string for each test case.
//  Some words may contain more than one uppercase letter (see example #4).
function makeTitle(str) {
  const arr = str.split(/\s+/)
    .map(word => word[0]
    .toUpperCase() + word.substring(1))
    .join(' ')
  return arr;
}

// Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.
//
// Examples
//  doubleLetters("loop") ➞ true
//  doubleLetters("yummy") ➞ true
//  doubleLetters("orange") ➞ false
//  doubleLetters("munchkin") ➞ false
function doubleLetters(word) {
  for(let i = 0; i <= word.length; i++) {
    if(word[i] === word[i-1]) {
      return true;
          } 
}
return false;
}

// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//   When positives and positives interact, they remain positive.
//   When negatives and negatives interact, they remain negative.
//   But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Examples
//  neutralise("--++--", "++--++") ➞ "000000"
//  neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"
//  neutralise("-++-", "-+-+") ➞ "-+00"
//
// Notes
// The two strings will be the same length.
function neutralise(s1, s2) {
  let arr = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] == s2[i]) {
      arr.push(s1[i])
    } else { 
      arr.push(0)
    }
  } return arr.join('');
}

// Create a function that takes a string str and modifies the given string as per the below examples:
//
// Examples
//  mumbling("MubAshIr") ➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
//  mumbling("maTT") ➞ "M-Aa-Ttt-Tttt"
//  mumbling("EdaBit") ➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"
function mumbling(str) {
  const strArr = str.split('');
  const newArr = strArr.map((letter, index) => {
    const str = letter.repeat(index + 1).toLowerCase();
    const formatedFirstLetter = str.charAt(0).toUpperCase() + str.slice(1);
    if (index !== strArr.length - 1) {
      return formatedFirstLetter + '-';
    } else {
      return formatedFirstLetter;
    }
  });
  return newArr.join('');
}

module.exports = {
  removeLeadingTrailing,
  removeABC,
  multiplyNums,
  evenOrOdd,
  reverseAndNot,
  XO,
  makeTitle,
  doubleLetters,
  neutralise,
  mumbling
};
