let numArray = [];
//Generates 10 random 3 digit values
for (index = 1; index < 10; index++) {
  let num = Math.floor(Math.random() * 999) + 100;
  numArray.push(num);
}
// Store into an array
console.log("Array is " + numArray); 

//Find The Second largest and Second smallest
let firstMax_num = numArray[0]; 
let secondMax_num= numArray[0];
let firstMin_num= numArray[0];
let secondMin_num = numArray[0];

for (let number of numArray) {
  if (number > firstMax_num) {
    secondMax_num = firstMax_num;
    firstMax_num = number;
  } else if (number > secondMax_num) {
    secondMax_num = number;
  }
  if (number < firstMin_num) {
    secondMin_num = firstMin_num;
    firstMin_num = number;
  } else if (number < secondMin_num) {
    secondMin_num = number;
  }
}
console.log(
  "Second Maximum : " + secondMax_num+ "  Second Minimum : " + secondMin_num
);