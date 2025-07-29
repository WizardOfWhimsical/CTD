//---------- OVERVIEW AND INSTRUCTIONS ----------

//----------------------------------
// LESSON 4 ARRAY METHODS
//----------------------------------

// ----- Practice JS array methods: forEach -----
//---------- QUESTION 1 ----------

   let names = ["Juan Marcos", "Aleksandra Ivanov", "Zhang Wei", "Bernice King"];
   console.log("Q1 printNames:");
   printNames(names);

function printNames(array) {
    array.forEach(arr => console.log("\t",arr));
}

// if there was a value that needed to be returned i would have to put a return 
// in the {}, but since it is a console.log, dont need one.
// array.forEach((arr) => {
//     console.log(arr)
// })

//---------- QUESTION 2 ----------

  const trees = [
    { type: "oak", height: "30m" },
    { type: "elm", height: "25m" },
    { type: "birch", height: "18m" } ]
  console.log("Q2 logTreeType:");
  logTreeType(trees);


function logTreeType(arrayOfObj) {
    arrayOfObj.forEach(obj=>console.log("\t",obj.type))
}
//---------- QUESTION 3 ----------

  let myNumbers = [1, 3, 7, 5, 8];
  console.log (`Q3 totalPoints [${myNumbers}]:`, "\n\t", totalPoints(myNumbers));

// Try a few different input arrays to verify your code is working.

// PUT YOUR CODE HERE
function totalPoints(addingArray) {
    let total=0;
    addingArray.forEach((addArray) => {
        total+=addArray
    })
    return total;
}
//---------- QUESTION 4 ----------

   let myWords = ["You","can","if","you","think","you","can","!"];
   console.log (`Q4 buildSentence [${myWords}]:`,"\n\t", buildSentence(myWords));

// i just coppied and pasted the last helper
function buildSentence(addingArray) {
    let total = "";
    addingArray.forEach((addArray) => {
       total +=`${addArray} `
    })
    return total;
}
//---------- QUESTION 5 ----------

  let decimals = [0.75, 0.91, 0.2, 1.34];
  console.log("Q5 logPercentages:");
  logPercentages(decimals);

function logPercentages(num) {
    num.forEach(n => console.log("\t", n * 100, "%"));
}
// ----- Practice JS Array Methods - map -----
// ---------- QUESTION 6 ----------

  let startingNums = [107, 97, 7, -3, (7**3)+74, 417 ];
  console.log (`Q6 addThreeToAll [${startingNums}]: `, addThreeToAll(startingNums));

function addThreeToAll(arrayOfNumbers) {
  let arrayOfTotals = arrayOfNumbers.map(numbers => numbers + 3);
  return arrayOfTotals;
}

// ---------- QUESTION 7 ----------

  let baseNums = [4, 41, 832, 72, 89];
  console.log (`Q7 squareAll [${baseNums}]:`, squareAll(baseNums));

function squareAll(arrayOfNumbers) {
  let arrayOfTotals = arrayOfNumbers.map(numbers => numbers*numbers);
  return arrayOfTotals;
}

// ---------- QUESTION 8 ----------

  console.log (`Q8 allGreetings [${names}]:`, allGreetings(names));

function allGreetings(name) {
  let namedGreeting = name.map(n => `Hello, ${n}, nice to meet you!`);
  return namedGreeting;
}
// ---------- QUESTION 9 ----------

  let users = [
  {
    username: "juan.marcos",
    isAdmin: false,
  },
  {
    username: "aleksandra.ivanov",
    isAdmin: false,
  },
  {
    username: "zhang.wei",
    isAdmin: false,
  },
  {
    username: "bernice.king",
    isAdmin: true,
  }
  ];

 console.log (`Q9 getUsernames:`, getUsernames(users));

function getUsernames(arrayOfObj) {
  let name = arrayOfObj.map(obj => obj.username);
  return name
}
// ---------- QUESTION 10 ----------

console.log(`Q10 pluck "isAdmin":`, pluck(users, "isAdmin"));
  
function pluck(user) {
  let isAdmin = user.map(u => u["isAdmin"]);
  return isAdmin
}

// ----- Practice JS methods - filter -----
// ---------- QUESTION 11 ----------
:
  let numberArray = [4, 41, 832, 72, 89, 120, 431, 505, 70];
  console.log (`Q11 evenNumbers [${numberArray}]:`, evenNumbers(numberArray));

function evenNumbers(arrayOfNumbers) {
  const result = arrayOfNumbers.filter((num) => num % 2 === 0);
  return result
}
// ---------- QUESTION 12 ----------

  let numArray = [4,41,832,72,89,120,431,505,70];
  console.log (`Q12 greaterThan100 [${numArray}]:`, greaterThan100(numArray));

function greaterThan100(nums) {
  const result = nums.filter((num) => num > 100);
  return result
}
// ---------- QUESTION 13 ----------

  console.log (`Q13 nonAdminUsers:`, nonAdminUsers(users));

function nonAdminUsers(array) {
  const result = array.filter((obj) => obj.isAdmin === false);
  return result
}

// ---------- QUESTION 14 ----------

  console.log (`Q14 countAdminUsers:`, countAdminUsers(users));

function countAdminUsers(array) {
    const result = array.filter((obj) => obj.isAdmin===true);
  return result.length
}

// ---------- QUESTION 15 ----------

let strings1 = [
  "Four score and seven years ago",
  "our forefathers brought forth on this continent a new nation",
  "conceived in liberty",
  "and dedicated to the proposition that all men are created equal",
  "Now we are engaged in a great civil war",
  "testing whether that nation",
  "or any so conceived and so dedicated",
  "can long endure.",
];

console.log (`Q15 shorterThanX 20:`, shorterThanX(strings1, 20));

console.log (`Q15 shorterThanX 30:`, shorterThanX(strings1, 30));

function shorterThanX(array1,n) {
  return array1.filter(string2 => string2.length < n);
}
// ---------- QUESTION 16 ----------

  let manyTypes = [4, "4", "four score", 80, {age: 80}, ["nations"], {type: "free"}, "states"];
  console.log (`Q16 onlyStrings [${manyTypes}]:`, onlyStrings(manyTypes));

function onlyStrings(array) {
    const result = array.filter((string) => typeof string==="string");
    return result
}

// ----- Practice JS methods - find -----
// ---------- QUESTION 17 ----------

  let array = [4,43141,832,72,89,120,431,505,70]
console.log(`Q17 firstOdd [${array}]:`, firstOdd(array));
  
function firstOdd(array) {
  let result = array.find(arr => arr % 2 !== 0);
  return result
}

// ---------- QUESTION 18 ----------

  let divArray = [4,41,832,72,89,125,431,505,75]
  console.log (`Q18 divisibleByTen [${divArray}]:`, divisibleByTen(divArray));

// If there are no numbers divisible by 10, return undefined.<-find returns undefined when item is not found, already
function divisibleByTen(array) {
  return  array.find(arr => arr % 10  === 0);
}
// ---------- QUESTION 19 ----------

   let numbers = [4,41,832,72,89,120,431,70];

   console.log (`Q19 divisibleByX ([${divArray}], 10):`, divisibleByX(numbers, 10));

   console.log (`Q19 divisibleByX ([${divArray}]. 3):`, divisibleByX(numbers, 3));

   console.log (`Q19 divisibleByX ([${divArray}], 2):`, divisibleByX(numbers, 2));

function divisibleByX(array, x) {
  return  array.find(arr => arr % x === 0);
}

// ---------- QUESTION 20 ----------
// These were all fun and great confidence boosters. It really solidified my understanding with these methods. i cant wait to get to obj methods and classes.
let jokeStrings =
  ["Do you want to hear a joke?",
   "It's about a three-legged dog",
   "The dog walks into a bar",
   "The dog says, ",
   "I'm looking for the man who shot my paw",
   "Get it?"]

// EXAMPLE CALL 1:
   console.log (`Q20 startsWithLetter T:`, startsWithLetter(jokeStrings, "T"));

   console.log (`Q20 startsWithLetter I:`, startsWithLetter(jokeStrings, "I"));

   console.log (`Q20 startsWithLetter i:`, startsWithLetter(jokeStrings, "i"));

   console.log (`Q20 startsWithLetter dog:`, startsWithLetter(jokeStrings, "dog"));

// function startsWithLetter(array, x) {
//   return  array.find(arr => arr[0]===x );
// }
function startsWithLetter(array, x) {
      if (x.length > 1) {
      return "Error: Letter must be a string of length 1"
    }
  return array.find((arr) => arr[0] === x);
}
