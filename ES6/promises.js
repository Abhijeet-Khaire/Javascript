/* var ans = new Promise((res, rej) => {
  var n = Math.floor(Math.random() * 10);

  if (n < 5) {
    return res();
  } else {
    return rej();
  }
});

ans
  .then(function () {
    console.log("Below");
  })
  .catch(function () {
    console.log("Above");
  });  */

let ans = new Promise(function (res, rej) {
  return res("Develop Basic skills first,")
})
let ans1 = ans.then(function (data) {
  console.log(data)
  return new Promise(function (res, rej) {
    return res("Find a good paying job,")
  })
})
let ans2 = ans1.then(function (data) {
  console.log(data)
  return new Promise(function (res, rej) {
    return res("Start trading from basics,")
  })
})
let ans3 = ans2.then(function (data) {
  console.log(data)
  return new Promise(function (res, rej) {
    return res("Become a millionaire, make your parents proud,")
  })
})
let ans4 = ans3.then(function (data) {
  console.log(data)
  return new Promise(function (res, rej) {
    return res("Invest in mutiple business and found a business group")
  })
})
let ans5 = ans4.then(function (data) {
  console.log(data)
  return new Promise(function (res, rej) {
    return res("Now You are a Billionaire")
  })
})
ans5.then(function (data) {
  console.log(data)
})