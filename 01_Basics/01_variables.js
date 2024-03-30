const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// if the variable is left unassigned then it will get the default value of undefined 
let accountState;

// prefer not to use var , because of issue in block scope and functional scope

// accountId = 2
accountEmail = "hitesh@gmail.com"
accountPassword = "212121212"
accountCity = "Bengaluru"

// cannot be re-assigned to a (const)constant variable 
console.log(accountId);
console.log(accountEmail);
// one way is to print all the items using console.log() again and again 
// another way is to use console.table([])
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])