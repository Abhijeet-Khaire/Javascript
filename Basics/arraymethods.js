let arr = [1, 2, 3, 4, 5, 6, 7]
arr.push(); // adds value in array
arr.pop(); // removes last value from the array
arr.unshift(0); // adds value in starting
arr.shift(); // removes value from start
arr.splice(2, 1) // removes value with index reference
console.log(arr);

const items = [
    { name: 'Bike', Price: 100 },
    { name: 'tv', Price: 250 },
    { name: 'car', Price: 2000 },
    { name: 'Book', Price: 20 },
    { name: 'Phone', Price: 75 },
    { name: 'computer', Price: 99 }
]
console.log(items)
// fliter method
const filterdItems = items.filter((items) => {
    return items.Price <= 100
})
console.log(filterdItems)

// map method
const itemnames = items.map((items) => {
    return items.name
})
console.log(itemnames)
// find method
const finditem = items.find((items) => {
    return items.name === 'tv'
})
console.log(finditem)
// some method
// Checks if at least one element in the array meets the condition.
// Returns true if any item satisfies the condition.
// Returns false if none do.
const inexpensiveItems = items.some((items) => {
    return items.Price <= 0
})
console.log(inexpensiveItems)
// every method
// Checks if all elements in the array meet the condition.
// Returns true only if every item satisfies the condition.
// Returns false as soon as one item doesn’t.
const allinexpensiveItems = items.every((items) => {
    return items.Price <= 2000
})
console.log(allinexpensiveItems)
// reduce
// It goes through the array and combines all items into a single value.
// reduce always returns one value.
// Useful for sums, averages, max/min, grouping, etc.
// initialValue is important (prevents errors on empty arrays).
const total = items.reduce((currentTotal,items) => {
    return items.Price + currentTotal
}, 0)
console.log(total)
// includes
// Works with strings and arrays.
// Case-sensitive for strings.
// More readable alternative to indexOf().
// it returns true value if includes value is present in array or string
const items1 = [1,2,3,4,5]
const includesTwo = items1.includes(2)
console.log(includesTwo)