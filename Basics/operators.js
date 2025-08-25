"use strict"
// Arithmatic operators
let a = 10
let b = 5

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

// Assignment operators

a += 10
console.log(a)
a -= 2
console.log(a)

// comparison operators

let c = "26"
let d = 26

console.log(c == d) // loose equality = it only compares values
console.log(c === d) // strict equality = it compares values and datatypes
console.log(c > d)
console.log(c < d)
console.log(c >= d)
console.log(c <= d)
console.log(c !== d)
console.log(c != d)

// Ternary operators

let age = 21

let Eligibility = (age > 18) ? "I can vote" : "I cannot vote"
console.log(Eligibility)

// logical operators

let and = (true && true && true)
console.log(and)

let or = (true || true || true)
console.log(or) 

let short = (false || 11 || 24) // In this scenario short circuit happens and it print first true value
console.log(short) 

// Bitwise operators

