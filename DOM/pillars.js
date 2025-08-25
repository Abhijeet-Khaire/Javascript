
let a = document.querySelector("h1")
addEventListener("click", function () { //Event listener
    a.innerHTML = "hello" // for changing html
    a.style.color = "red" // for changing css
})

let b = document.querySelector("#circle")
let c = document.querySelector("button")

let flag = 0

c.addEventListener("click", function () {
    if (flag == 0) {
        circle.style.backgroundColor = "yellow"
        flag = 1
        c.innerHTML = "Off"
    }
    else {
        circle.style.backgroundColor = "transparent"
        flag = 0
        c.innerHTML = "On"
    }
})

//  All querySelector
let d = document.querySelectorAll("h1")
console.log(d)

