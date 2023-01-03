let number = new Array();
//for loop
for (let i = 1; i < 100; i++) {
  if (i % 11 == 0) {
    number.push(i);
  }
}
//display output
console.log("Double digit repeated numbers are : " + number);