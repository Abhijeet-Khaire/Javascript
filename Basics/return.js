let area;
let width;
let height;

width = prompt("enter width");
height = prompt("enter height");

area = getarea(width, height);

console.log("The area is", area);

function getarea(width, height) {
    return width * height;
}
