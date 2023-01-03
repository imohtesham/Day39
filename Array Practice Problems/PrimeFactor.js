const prompt = require("prompt-sync")();

const primeFactArray = [];

// take input from the user
let userNumber = parseInt(prompt("Enter the number to find prime factor : "));

// for loop iterate till the number which is entered by the user.
for (let i = 2; i <= userNumber; i++) {
  
  while (userNumber % i == 0) {
    console.log(i);
    userNumber = userNumber / i;
    primeFactArray.push(i);
  }
}

console.log(
  `Prime factors of an given number ${userNumber} is : ` + primeFactArray
);