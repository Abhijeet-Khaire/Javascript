// function sayHello() {
//     for (var i=0; i<5; i++) {
//         console.log(i);
//     }
//     console.log(i);
// }

// sayHello();

start();

function start() {
  let name = "Abhii";
  let age = 21;

  happyBirthday(name,age);
}

function happyBirthday(name,age) {
  console.log("Happy Birthday to you!");
  console.log("Happy Birthday to you!");
  console.log("Happy Birthday dear", name);
  console.log(`You are now ${age} years old.`); // used template literals using symbol called backtick
}

//need to use function keyword

