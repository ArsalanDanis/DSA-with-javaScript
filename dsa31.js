// Program to Convert Decimal to Binary.

// # for positive number
let num1= 1258;
const binary1 =num1.toString(2);
console.log(binary1);

// output:10011101010

// # for negative number
let num2 = -1258;
const binary2 = (num2>>>0).toString(2);
console.log(binary2)

// output:11111111111111111111101100010110