// sorting array to find second largest and second minimum value
let numArray = new Array();

for (index = 1; index <= 10; index++) {
  let num = Math.floor(Math.random() * 999) + 100;
  numArray.push(num);
}
console.log("Array is " + numArray);
let secondMin_num= numArray.sort()[1];
let secondMax_num = numArray.sort()[numArray.length - 2];

console.log("With Sorting ");
console.log(
  "Second Maximum : " + secondMax_num + "  Second Minimum : " + secondMin_num
);