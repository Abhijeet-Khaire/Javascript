const accountId = 123
// accountId = 23  cannot make same const variable

let accountEmail = "abhijeetkhaire@gmail.com"
// accountEmail = "abhikhaire@gmail.com"  it overwrites the data

var accountPassword = 123456789
// accountPassword = 987654321

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)

console.table([accountId,accountEmail,accountPassword])

// Prefer not to use var beacause issue in block scope and functional scope
// let and const are block scoped means cannot accesible outside the braces or scope