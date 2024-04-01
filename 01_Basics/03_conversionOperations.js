let score = 33
// const {score} = req.body // in this if we are taking and assignin the value from the web , then it is difficult to say which datatype value is coming inside the variable

// to check the data type of any variable
console.log(typeof score);
console.log(typeof(score));
// both the ways are correct and works well
let sc = "33"
console.log(typeof sc);
let valueInNumber = Number(sc)
console.log(valueInNumber);
console.log(typeof valueInNumber);

// but if this would be the situation
// the value after conversion will become NaN (i.e not a number)
// but the datatype of the variable stroing this value will be set to number
let a = "33abc"
valueInNumber = Number(a)
// NOTE: this method converts the null to 0
//                     and undefined to NaN
                        // true to 1
                        // false to 0
console.log("Value of a is " + valueInNumber);
console.log(typeof valueInNumber);


let isLoggedIn = 1
let boolenIsLogged = Boolean(isLoggedIn)
console.log(boolenIsLogged);

let string = String(33)
console.log(typeof string)
console.log(string)