//---------- OVERVIEW AND INSTRUCTIONS ------

//-------------------------------------------
// LESSON 3 OBJECTS
//-------------------------------------------
// ---------- QUESTION 1 --------------------

let myPet = {};
myPet.name = "Teddy";
myPet.species = "ferret";
myPet.color = "brown";
console.log(myPet)
console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);

// ---------- QUESTION 2 ----------

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

let celsiusTemp = 100;
const convertTemp = (c) => (c*9/5)+32
console.log(`Q9 convertTemp: ${celsiusTemp} : ${convertTemp(celsiusTemp)}`);

// ---------- QUESTION 10 ----------

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
// [X] the "circumference" (which is 2 multiplied by the Math value pi, multiplied by the radius) 
// 
//[x] and the "area" (which is the Math value pi, multiplied by the radius squared).

let diameter = 3;
// if d = 2r then we just divide to get the answer basic math
let radius = diameter / 2
console.log("Q11 circle stuff: ", Math.round(radius));

// if C = 2*PI(3.14)*r then we just pass radius in and vewhlaya
let circumference = 2 * Math.PI * radius;
console.log("Q11 circle stuff: ", Math.round(circumference));

// Circle: Area = π × radius squared (A = πr²) ** operator for power to:
let area = Math.PI*(radius**2)
console.log("Q11 circle stuff: ", Math.round(area));

// ---------- QUESTION 12 ----------
// Let's make a useful math problem - create a tip calculator!
// So that is what i did noah, i feel like that can plug into any POS system
class TipAddedToBill{
    constructor(billTotal, tipPercentage) { 
        this.billTotal = billTotal;
        this.tipPercentage = tipPercentage;
    }
    addTip() {
        let tip = this.billTotal * this.tipPercentage;
        let manipulate = Math.round((this.billTotal + tip) * 100);
        return manipulate / 100
    }

}
let billTotal = 58.76;
let tipPercentage = 0.2
let total = new TipAddedToBill(billTotal,tipPercentage)
console.log("Q12: ",total.addTip())

// ---------- QUESTION 13 ----------

let num1 = 4;
let num2 = 2;
console.log("Q13: ", multiplyThese(num1, num2))

function multiplyThese(a, b) {
    return a*b
}

// ---------- QUESTION 14 ----------

console.log("Q14: ", getAverage(num1, num2));
function getAverage(a, b) {
    let total = a + b
    return total / 2
    
}