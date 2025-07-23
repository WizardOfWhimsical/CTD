//---------- OVERVIEW AND INSTRUCTIONS ----------

//----------------------------------
// LESSON 2 LOOPS AND ARRAYS
//----------------------------------

//# JavaScript Loops and Arrays
// This is the coding assignment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Simplify Repetitive Tasks with Loops
//   - Working with ‘for’ Loops
//   - Understanding Arrays

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. You'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// Please be sure to check the output of your called functions and console logs in the Console on this screen. Check to make sure that the output you get in your Console is the expected output.

/*
!! I jsut want to state now, because we are doing loops here, i will be trying !! doWhile and while loops, if i dont it means i couldnt get the syntax correct
!! or i was having a problem with scope
*/

// ---------- QUESTION 1 ----------
// Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// EXAMPLE "LOG":
//    repeat(3);
// EXAMPLE OUTPUT:
//    Hello World!
//    Hello World!
//    Hello World!

// PUT YOUR CODE HERE
/*
just figured something funny out. the arrow function (i assume
because it is being declared with "let"), wouldnt let me call it
before declaring it. 
Am I using the proper english explaination for this?
"ReferenceError: Cannot access 'repeat' before initialization" 
funny little things we learn

I choose to do the "while" loop because i havent had alot of practice
using them. thought this would be a good time

note: i forgot the second hypen for incrementationad didnt relize it.
        wasted 20 minutes
*/

let repeat = (n) => {
    while (n>0) {
        console.log("Hi Mom")
        n--
    } 
}

repeat(3)

// ---------- QUESTION 2 ----------
// Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter.

// EXAMPLE LOG:
//    console.log("Q2: ", pyramidCounting(4));
// EXAMPLE OUTPUT:
//    Q2: 10
// The mathematical explanation of this is 0+1+2+3+4 = 10.

//PUT YOUR CODE HERE

// let n = 5;
function pyramidCountin(n) {
    let buildNum = 0;
    while (n >= 0) {
        buildNum = buildNum + n;
        n--
}
console.log(buildNum)
}
pyramidCountin(6)

// ---------- QUESTION 3 ----------
// Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop.

// EXAMPLE LOG:
//    console.log("Q3: ", noVowels(adventurous));
// EXAMPLE OUTPUT:
//    Q3: dvntrs

// PUT YOUR CODE HERE


const answer = noVowels("Something super long with spaces")
console.log(answer)
function noVowels(str) {
    // habbit of handling edge cases, couldnt remeber the reg.Ex for only letter
    // sad part is, i remeber it being super easy [A-z]/g or some stuff. this
    // all coming back from memory in class.
    
    // edgeCase spaceProtection
    str = str.trim().toLowerCase().split("")
    // empty string to store constants, this way i dont have to return an array
    //  back to a string
    let it = "";
    // for.of loop to flip through array
    for (let s of str) {
        // helper function for finding vowels and set to "!" so to return constants
        if(!isVowel(s)){
        it+=s;
        }
    }
    return it;
}
// helper function, might be able to use this else were
    function isVowel(string) {
        switch (string) {
        case "a":
            return true;
        case "e":
            return true;
        case "i":
            return true;
        case "o":
            return true;
        case "u":
            return true;
        default:
        return false;
    }}
    

// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string.

   /*
    i cant make this up, i did not read ahead so as to not confuse my mind with other troubles from the assignment. imagine my excitement for this after making my previous helper function. DUDE!  :-}
    */

// EXAMPLE LOG:
//    console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT:
//    Q4: 6

// PUT YOUR CODE HERE

// sudo: loop through string by reverting into an array.
//        keep count on "true"
// return count
     
let execution = vowelCount("So how long should i make this one?")

console.log("Q4: ", execution)

function vowelCount(str) {
    let counter = 0;
    str.trim().toLowerCase().split()

    for (let s of str) {
        if (isVowel(s)) { counter++ }
    }
    return counter;
}

// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number if it's odd. (Hint: Use the modulo operator)


/*
ok, lets break this down
write a function
takes 1 parameter (number)
returns odd numbers from 0 to n WRONG return the AMOUNT of odds
including n if it is an odd number
*/

let odds = numOfOdds(35);
console.log("Q5: ",odds)

function numOfOdds(n) {
    let count = 0;
    // const numArray=[]
    for (let i = 0; i <= n; i++){
        if (i%2 !== 0){
            // numArray.push(i)
            count++
        } 
    }
    // actually suposed to return number of odds ops
    return count    
}

// PUT YOUR CODE HERE

// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'.  Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable.  Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not.  Check both the 'empty' and 'full' variables to make sure they are returning the expected values.

// EXAMPLE LOGS:
//    console.log("Q6 empty: ", arrayChecker(empty));
//    console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//    Q6 empty: true
//    Q6 not empty: false

// PUT YOUR CODE HERE
// vartibles to hold data
const empty = [], full = ["someString", 420, true];

function arrayChecker(arr) {
    // heres the fun part, numbers can be booleans.
    // i do believe 0 is falsy, so an empty arrays returns 0
    // just wanted to see if i could lol
    // let answer = !arr.length ? true : false;
    // return answer
    if (!arr.length) { return true }
    else{return false}
}

console.log("Q6: empty ", arrayChecker(empty))
console.log("Q6: not empty ", arrayChecker(full))



// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter.  The function should return the element in the array at the given number index or 'null' if it doesn't exist.  Use your 'full' variable from Question 6 to test.


// indexof()

/*
BreakDown
write a function
takes arr param, intiger param
use n to search array
return element in array, null if none
*/
console.log("Q7 : ",getElementAt(full, 2))
console.log("Q7 : ",getElementAt(full, 7))

function getElementAt(arr, n) {
    if (arr[n] === undefined) {
        return null
    }
    
    return arr[n]
}
// EXAMPLE LOGS:
//    console.log("Q7: ", getElementAt(full, 2));
//    console.log("Q7: ", getElementAt(full, 7));
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q7: code
//    Q7: null

// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array.  The function should return the NEW array.  Use your 'full' variable from Question 6 to test.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//    console.log("Q8: ", insertInArray(full));
//    console.log("original array: ", full);
// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//    Q8: ["dream", 0, 19, "code", 24, 180]
//    original array: ["dream", 19, "code", 24, 180]

// PUT YOUR CODE HERE

// so i want to give thanks to God, and then the guy who randomly posted array
//  methods is CTD allstudent convo i think. And you guys really do give all
//  kinds of hints and help. i am a basic knowledge type guy (or so it feels). 

function insertInArray(f) {
    let newArray = f.slice(0);
    newArray.splice(1, 0, 0)
    return newArray
}

console.log("Q8 :",insertInArray(full))
console.log("Q8 original array:",full)
// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those.  To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well.


/*
step 1:write a function takes 2 params
step 2: returns true if they are equal (===) and false if not
step 3: 
 */
// if indexs dont match then its false

// arr1[i]

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//    console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//    Q9 same: true

// EXAMPLE LOG:
//    console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//    Q9 different: false

// EXAMPLE LOG:
//    console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//    Q9 different: false

// PUT YOUR CODE HERE

// me and Joe worked this one, everything after it just kinda fell into place
const compare=["someString",420,true]
let part = ["someString",true]

console.log("Q9: same: ",compareArrays(full, compare))
console.log("Q9: different: ",compareArrays(full,empty))
console.log("Q9: partial: ", compareArrays(full, part))

function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    } 

    for (let i = 0; i > arr1.length; i++){
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true;
}
// ---------- QUESTION 10 ----------
// Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]).  Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements.

// STRETCH GOAL: write another version of calculateTotal (call it calculateTotal2) using the 'reduce()' method

// EXAMPLE LOG:
//    console.log("Q10: ", calculateTotal(numbers));
// EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
//    Q10: 17

// PUT YOUR CODE HERE
const numbers = [4 ** 8, 3 ** 9, 5 ** -10]

console.log("Q10: ",calculateTotal(numbers))
console.log("Q10: ",calculateTotal2(numbers))

function calculateTotal(arr) {
    let hold = 0;
    for (let a of arr) {
        hold += a;
    }
    return hold
}

// notes follow on this one
function calculateTotal2(arr) {
    // let hold = 0;
    let all = arr.reduce((a, h) => {
        return a+h
    })
    return all
}
// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each returns a NEW Array of all the even or odd numbers as indicated.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// STRETCH GOAL: write another version of findEvens or findOdds using the \`filter()\` method

// EXAMPLE LOG:
//    console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//    console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));
// EXAMPLE OUTPUT:
//    Q11 evens: [10,2,6]
//    Q11 odds: [3,19,7,93]

// PUT YOUR CODE HERE
let listNumbers = [10,2,3,19,7,6,93]
console.log("Q11 evens:",findEvens(listNumbers))
console.log("Q11 odds:",findOdds(listNumbers))


function findEvens(array) {
    // create empty array to hold the n
    let hold = [];
    // looping through with a for.of
    for (let arr of array) {
        // and the remainder operator to test if even
        // then push into place holder for return
        if(arr%2 === 0){hold.push(arr)}
    }
    return hold
}
// same as before but with the "!"(not) operator

function findOdds(array) {
     let hold = [];
    for (let arr of array) {
        if(arr%2 !== 0){hold.push(arr)}
    }
    return hold
}




// ---------- QUESTION 12 ----------
// Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers.  NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array.  To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// STRETCH GOAL: write another version makeSquares using the \`map()\` method

// EXAMPLE LOG:
//    console.log("Q12: ", makeSquares([2,5,8]));
// EXAMPLE OUTPUT:
//    Q12: [4,25,64]

// PUT YOUR CODE HERE

let toBeSquared = [2, 4, 6, 8]
/*
 i want to take a second to point out a few things that were tripping me up 
 with these methods that has not been explained to me and i just got the
  revelation after messing with my mentor yesterday.
 when arrow functions are on one line, the return is implied. so looking at
  this arrow function with .map() confused the hell outta me till i was
  reading and that tid-bit flashed in my head. 

let squared = toBeSquared.map((square)=>{
  return square **2 
  })

let squared = toBeSquared.map(s => square(s))
console.log("Q12: ",squared)

  function square(s){
  return s**2
  }
  }

  so knowing that each one needs a return when not on one line, because a new person can forget that or just not know it looking at the material. i feel this might be one of those things that gets over looked and may confuse people. even though the knowledge is in their head they have not connected the dots. or atleast it took me for ever
*/

let squared = toBeSquared.map(square => square **2)


console.log("Q12: ",squared)



// ---------- QUESTION 13 ----------
// Back in the old days, the early 2000s, this was a famous technical interview question. Write a function definition that takes NO parameters. The function will loop from 1 to 15 and return an array of numbers. While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both. If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array. If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array. If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array. If the number isn't divisible by 3, 5, OR both, it will add the number to the array.  The function will return the array of values.

// EXAMPLE LOG:
//    console.log("BONUS: ", fizzBuzz();
// EXAMPLE OUTPUT:
//    BONUS: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

// PUT YOUR CODE HERE


console.log("Q13: ", fizzBuzz())
function fizzBuzz() {
   let hold = []
for (let n = 1; n <= 15; n++){
    switch (true) {
    case n%15 ===0:
        hold.push("fizzBuzz");
        break;
    case n%5===0:
        hold.push("fizz");
        break;
    case n%3===0:
        hold.push("buzz");
        break; 
    default:
        hold.push(n)
}
}
return hold 
}

console.log("As always Noah, have a freat day and if you want to talk about any of this i am more than happy to sir ;p")
// FIZZBUZZ!!  
// i first did this as an exercise in eloquent javascript