// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
//
// Examples
//  toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
//  toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
//  toArray({}) ➞ []
// Notes
//  Return an empty array if the object is empty.
function toArray(obj) {
  const entries = Object.entries(obj) 
  return entries
}

// Create the function that takes an array with objects and returns the sum of people's budgets.
//
// Examples
// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700
// getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600
function getBudgets(arr) {
  const sum = arr.map(money => money.budget).reduce((moreMoney, money) => money + moreMoney);
  return sum
}

// Create a function to check whether the given parameter is an Object or not.
//
// Examples
//  isObject(function add(x,y) {return x + y}) ➞ true
//  isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) ➞ true
//  isObject(null) ➞ false
//  isObject("") ➞ false

// Notes
//  Inputs may be null, primitive wrapper types, dates.
function isObject(value) {
  if (typeof value === 'object' && value !== null) {
    return true 
  } else {
    return false
  }
}

// Create a function that takes a string of name and checks how much good is the given name. A preloaded dictionary of alphabet scores is available in the Code tab. Add up the letters of your name to get the total score.
//
//   const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
//   "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
//   "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
//   "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}
//
// Return your result as per the following rules:
//   score <= 60:   "NOT TOO GOOD"
//   61 <= score <= 300:  "PRETTY GOOD"
//   301 <= score <= 599:  "VERY GOOD"
//   score >= 600:  "THE BEST"

// Examples
//  nameScore("MUBASHIR") ➞ "THE BEST"
//  nameScore("YOU") ➞ "VERY GOOD"
//  nameScore("MATT") ➞ "THE BEST"
//  nameScore("PUBG") ➞ "NOT TOO GOOD"
const scores = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
  'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
  'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
  'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23};

  function nameScore(name) {     
    let fullName = name.replace(/\s/g, '');  
    let array = fullName.split('').map(item => scores[item])
    let score = array.reduce((a, b) => a + b)
    
  switch(true) {
  case (score <= 60):
   return "NOT TOO GOOD"
    break;

  case (61 <= score && score <= 300):
   return "PRETTY GOOD"
    break;

case (301 <= score && score <= 599):
   return "VERY GOOD"
    break;

case (score >= 600):
   return "THE BEST"
   break;
  }
  }

// Given an object of people and their ages, return how old the people would be after n years have passed. Use the absolute value of n.
//
// Examples
// afterNYears({
//   "Joel" : 32,
//   "Fred" : 44,
//   "Reginald" : 65,
//   "Susan" : 33,
//   "Julian" : 13
// }, 1) ➞ {
//   "Joel" : 33,
//     "Fred" : 45,
//     "Reginald" : 66,
//     "Susan" : 34,
//     "Julian" : 14
// }
//
// afterNYears({
//   "Baby" : 2,
//   "Child" : 8,
//   "Teenager" : 15,
//   "Adult" : 25,
//   "Elderly" : 71
// }, 19) ➞ {
//   "Baby" : 21,
//     "Child" : 27,
//     "Teenager" : 34,
//     "Adult" : 44,
//     "Elderly" : 90
// }
//
// afterNYears({
//   "Genie" : 1000,
//   "Joe" : 40
// }, 5) ➞ {
//   "Genie" : 1005,
//     "Joe" : 45
// }

// Notes
//  Assume that everyone is immortal (it would be a bit grim if I told you to remove names once they reached 75).
//  n should be a positive number because last time I checked, people don't tend to age backwards. Therefore, use the absolute value of n.
function afterNYears(names, n) {
  const newObj = Object.fromEntries(Object.entries(names).map(([key, value]) => [key, value + Math.abs(n)]))
  return newObj;
}

//
// Create a function that checks to see if two object arguments are equal to one another. Return true if the objects are equal, otherwise, return false.
function isEqual(objOne, objTwo) {
  return JSON.stringify(objOne) === JSON.stringify(objTwo);
}

// Write a function that inverts the keys and values of an object.
//
// Examples
//  invert({ "z": "q", "w": "f" })
//  ➞ { "q": "z", "f": "w" }
//
//  invert({ "a": 1, "b": 2, "c": 3 })
//  ➞ { 1: "a", 2: "b", 3: "c" }
//
//  invert({ "zebra": "koala", "horse": "camel" })
//  ➞ { "koala": "zebra", "camel": "horse" }
function invert(o) {
  return Object.entries(o).reduce((acc, [value,key]) => {
    acc[key] = value;
    return acc;
}, {})
}

// You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
//
// Examples
// mostExpensive ({
//   "Diamond Earrings": 980,
//   "Gold Watch": 250,
//   "Pearl Necklace": 4650
// }) ➞  "The most expensive one is the Pearl Necklace"
//
// mostExpensive({
//   "Silver Bracelet": 280,
//   "Gemstone Earrings": 180,
//   "Diamond Ring": 3500
// }) ➞ "The most expensive one is the Diamond Ring"

// Notes
//  There will always be at least one item in the object.
//  There will always be only one highest priced item (i.e. there will not be two items with the joint highest value).
function mostExpensive(obj) {
  let maxPrice = 0;
  let mostExpensiveJewelry;
  for(let i in obj) {
    if (maxPrice <= obj[i]) {
      maxPrice = obj[i]
      mostExpensiveJewelry = i
    } 
   }
  return `The most expensive one is the ${mostExpensiveJewelry}`
}

// Write a function that transforms an array of characters into an array of objects, where:
// The keys are the characters themselves.
// The values are the ASCII codes of those characters.

// Examples
//  toObj(["a", "b", "c"]) ➞ [{a: 97}, {b: 98}, {c: 99}]
//  toObj(["z"]) ➞ [{z: 122}]
//  toObj([]) ➞ []
function toObj(arr) {
  throw new Error('Not implemented');
}

// In this challenge, you have to find the distance between two points placed on a Cartesian plane. Knowing the coordinates of both the points, you have to apply the Pythagorean theorem to find the distance between them.
// Two points on a Cartesian plane
// Given two object literals a and b being the two points coordinates (x and y), implement a function that returns the distance between the points, rounded to the nearest thousandth.
//
// Examples
//  getDistance({x: -2, y: 1}, {x: 4, y: 3}) ➞ 6.325
//  getDistance({x: 0, y: 0}, {x: 1, y: 1}) ➞ 1.414
//  getDistance({x: 10, y: -5}, {x: 8, y: 16}) ➞ 21.095

// Notes
//  Take a look at the Resources tab if you need a refresher on the geometry related to this challenge.
//  The "distance" is the shortest distance between the two points, or the straight line generated from a to b.
function getDistance(a, b) {
  throw new Error('Not implemented');
}

module.exports = {
  toArray,
  getBudgets,
  isObject,
  nameScore,
  afterNYears,
  isEqual,
  invert,
  mostExpensive,
  toObj,
  getDistance
};
