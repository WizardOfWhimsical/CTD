/************
 *ALGORITHMS*
 ************/
let thisStr = "this is so done with"
let scaredFaces = stringToCaps(thisStr)
    console.log(scaredFaces)

function stringToCaps(string) {
    let array = string.toUpperCase().split(" ")//to uppercase and put in array 
    let lastCheck = array.length - 1;
    let newStr = array.map((s) => {
        let check = array.indexOf(s)
        console.log(check, lastCheck)
        if (check === lastCheck) {
            
            return s + " !"
        }
       return `${s} \u{1F631} `
    })
   
    console.log(newStr)
return newStr.join(" ")
}
/**
 * NOTES:
 * could have used a for.of loop but i wanted to use map again
 * let hold = ""
 * for(let str of nowStr){
 * hold += str+" \u{1F563} "
 * }
 * return hold
 * 
 *  building a conditional in a for.of loop might have been easier but probably not
 */
