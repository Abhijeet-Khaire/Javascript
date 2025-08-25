// destructuring means taking out data from arrays and objects in variables

// arrys
let a = [1, 2, 3];
let [b, , c] = a;
console.log(a, b, c);

// objects
let obj = { name: "Abhi", age: 21 }
let {age} = obj
console.log(age)