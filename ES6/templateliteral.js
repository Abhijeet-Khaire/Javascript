// we use backtick symbol for template literal to perform mathematical operations inside a string
// ` backtick symbol

console.log(`Addition of 2+2 is ${2 + 2} `);

// default parameter
/* in default parameters we define by default value to paar so that it doesn't shows undefined 
value when we don't pass the value */

function para(a=17, b=18, c=19) {
  console.log(a, b, c);
}
para(10, 12, 13);
para(14, 15, 16);
para(17);
