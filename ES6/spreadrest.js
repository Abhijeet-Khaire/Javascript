// spread an rest these are same but works in a different conditions differently

// spread
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [...a];
console.log(a);
console.log(b);

//rest
// rest stores remaining value in a single variable  
function array(a, b, c, ...d) {
  console.log(a, b, c, d);
}
array(1, 2, 3, 4, 5, 6, 7);
