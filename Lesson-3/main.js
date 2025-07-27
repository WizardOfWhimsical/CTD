//---------- OVERVIEW AND INSTRUCTIONS ------

//-------------------------------------------
// LESSON 3 OBJECTS
//-------------------------------------------
// ---------- QUESTION 1 --------------------


// PUT YOUR CODE HERE
let myPet = {};
myPet.name = "Teddy";
myPet.species = "ferret";
myPet.color = "brown";
console.log(myPet)
console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);

// ---------- QUESTION 2 ----------

// PUT YOUR CODE HERE
let aboutPet = `${myPet.name} is a ${myPet.color} ${myPet.species}`;
console.log("Q2: ",aboutPet);
// ---------- QUESTION 3 ----------

/*
THESE WORK
didnt use the .this keyword tho
myPet.age = ()=>{
console.log(7)
}
myPet.age()


as always the wording is what gets me. if this one is wrong please i would love
 to talk about it.
*/

// PUT YOUR CODE HERE
 
myPet.years = 7;
myPet.age = function (){
    return this.years = 7;
}
console.log("Q3: ", myPet.age())

// ---------- QUESTION 4 ----------

// PUT YOUR CODE HERE
// myPet.species = "dog"

function isDog(obj) {
    if (obj.species === "dog") { return true }
    return false
}

console.log("Q4: ",isDog(myPet))
// ---------- QUESTION 5 ----------

// PUT YOUR CODE HERE
function month() {
    let prac = Date();
let practice = prac.split(" ") ;

    let today = practice[1];
//did the switch to get full name
    switch (today) {
        case "Jan":
            return "January"
        case "Feb":
            return "Febuary"
        case "Mar":
            return "March"
        case "Apr":
            return "April"
        case "May":
            return "Duh!"
        case "Jun":
            return "June"
        case "Jul":
            return "July"
        case "Aug":
            return "August"
        case "Sep":
            return "September"
        case "Oct":
            return "October"
        case "Nov":
            return "November"
        case "Dec":
            return "December"
            default:
                return today;
    }

}


console.log("Q5: ", month())

// ---------- QUESTION 6 ----------

// PUT YOUR CODE HERE
// thank you MDN-> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


/**
  // 2025-10-13T04:00:00.000Z
    let birthday = new Date(bday)
    console.log(birthday)
    const today = new Date()
    // could recieve the year of birth not current
    // failsafe .set
    birthday.setFullYear(today.getFullYear())
    // checking if today is past bday
    if (today > birthday) {
        birthday.setFullYear(today.getFullYear()+1)
    }
    let time = birthday.getTime() - today.getTime();
    time = Math.ceil(time/1000/60/60/24)
    console.log("Test: ",time)
 */

let birthday = dayFormatting("1985-10-13");
console.log("Q6: ",birthdayCountdown(birthday))

function birthdayCountdown(bday) {
    let today = new Date();
     // could recieve the year of birth not current
    // failsafe .set ^^^ty Jo(mentor)^^^
    bday.setFullYear(today.getFullYear())
    // checking if today is past bday
    if (today > bday) {
        bday.setFullYear(today.getFullYear()+1)
    }
    let timeLeft = bday - today;
    timeLeft = timeLeft / 1000 / 60 / 60 / 24
    timeLeft = Math.ceil(timeLeft);
    return timeLeft;
}
//to handle some stupid edge cases, tbh i spent 2 days doing this
function dayFormatting(date) {
    // if they put n instead of string
    if (typeof date === "number") {
        // console.log("first IF: ", date)
        console.log("Needs to be in string format YYYY-MM-DD")
    } else if (typeof date === "string") {
        const birthday = new Date(`${date}T00:00:00`);
        if (isNaN(birthday.getTime())) {//MDN notes this is most reliable way to check, tho i can get it from .getYear() if i remeber correctly
            console.log("YYYY-MM-DD format will hyphens and make sure you put quotes around it...")
        }else if(birthday instanceof Date){return birthday}
    } else{console.log("IDK what you did but you broke it good!!")}
}

// ---------- QUESTION 7 ----------

/**
 * create 2 varibles startTime and endTime
 * assign 2 different dates to each
 * create function called timeDifference
 * timeDifference figures out (in hours and minutes) its funct name 
 * use previously made helper funtion
 */
// PUT YOUR CODE HERE
const startTime = dayFormatting("2025-10-13")
const endTime = dayFormatting("2027-10-13")

timeDifference(startTime, endTime)

function timeDifference(start, end) {
    let difference = end.getTime() - start.getTime()
    console.log("1st ",difference)
    let hoursDiff = difference / 1000 / 60 / 60
    console.log("2nd ", hoursDiff / 24)
    return `Q7: ${hoursDiff} hours is 2 years in hours`

}

// ---------- QUESTION 8 ----------

// this was so easy it confused me, forgot that these arent hoisted
const absDiff = (a, b) => {
        // console.log("1st")
       return Math.abs(a-b)
}

console.log("Q8 first larger: ", absDiff(29, 5));
console.log("Q8 second larger: ", absDiff(3, 16));
console.log("Q8 same nums: ", absDiff(5, 5));
console.log("Q8 neg num: ", absDiff(-6, 5));


// ---------- QUESTION 9 ----------
// i put {} on it thinking the return was implied, but realized that
// the {} makes it block, so id have to "return". learned somethign new 
// yes i am aware teplate literal turns n into string

// PUT YOUR CODE HERE
let celsiusTemp = 100;
const convertTemp = (c) => (c*9/5)+32
console.log(`Q9 convertTemp: ${celsiusTemp} : ${convertTemp(celsiusTemp)}`);

// ---------- QUESTION 10 ----------
// PUT YOUR CODE HERE

let inputString = "Im riding my bike with no hadle bars"

console.log("Q10 reverseString: ", inputString, reverseString(inputString));

function reverseString(str) {
    let hold = [];
    // let counter = 0;
    for (let i = 0; i <= str.length; i++){
        hold.push(str[str.length-i])
    }
    return hold.join("")
}
// ---------- QUESTION 11 ----------
//[X] Declare a variable named "diameter" and assign it an integer value. 
// 
//[x] Through a series of math calculations and variables, calculate the "radius" (which is half the diameter), 
//
// [] the "circumference" (which is 2 multiplied by the Math value pi, multiplied by the radius) 
// 
// and the "area" (which is the Math value pi, multiplied by the radius squared).

// PUT YOUR CODE HERE

let diameter = 3;
// if d = 2r then we just divide to get the answer basic math
let radius = diameter / 2
console.log(radius)
// if C = 2*PI(3.14)*r then we just pass radius in and vewhlaya
let circumference = 2 * Math.PI * radius;
console.log(circumference)
// Circle: Area = π × radius squared (A = πr²) ** operator for power to:
let area = Math.PI*(radius**2)
console.log(area)

// ---------- QUESTION 12 ----------
// Let's make a useful math problem - create a tip calculator! Declare two variables called "billTotal" and "tipPercentage". Assign billTotal a floating point number with two decimal places. Assign tipPercentage a floating point number between 0.1 and 0.9. Create a third variable called "tip" that will multiply tipPercentage and billTotal then use the addition assignment operator to add that amount back to billTotal. Example: if our bill 35.75 and we want to leave a 20% tip (0.2) our new billTotal should come out to 42.90.

// PUT YOUR CODE HERE

// Don't forget your console.logs!

// ---------- QUESTION 13 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product  of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//    console.log("Q13: ", multiplyThese(num1, num2));
// EXAMPLE OUTPUT: (if num1 and num2 are 2 and 5 respectively))
//    Q13: 10

// PUT YOUR CODE HERE

// ---------- QUESTION 14 ----------
// Building on the last question, create a function called 'getAverage' that takes 2 parameters and returns their average (hint: there is no built-in average operator in JavaScript).  Use the variables (num1 and num2) you created in Question 6 to test your function.  NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result.  We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//    console.log("Q14: ", getAverage(num1, num2));
// EXAMPLE OUTPUT: (based on num1 and num2 above)
//    Q14: 3.5

// PUT YOUR CODE HERE
// Create the function to calculate the average