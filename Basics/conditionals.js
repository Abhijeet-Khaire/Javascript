"use strict"
// if 

let age = 25

if (age > 18) {
    console.log("Eligible for vote")
}

// if - else

if (age > 18) {
    console.log("Eligible for vote")
}
else {
    console.log("Not Eligible for vote")
}

// if-else-if

if (age > 18) {
    console.log("Eligible for vote")
}
else if (age < 18) {
    console.log("You are under 18")
}
else {
    console.log("Not Eligible for vote")
}

// switch 
let agee = 17
switch (agee) {
    case 17: console.log("Not Eligible for vote")
        break
    case 25: console.log("Eligible for vote")
}