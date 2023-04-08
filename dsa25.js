// #Program to Find LCM .

// # method 1

var num1 = 6;
var num2 = 8;
var min = Math.max(num1, num2);
var lcm;

while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        lcm = min;
        break;
    }
    min++
}

console.log(`lcm of ${num1} and ${num2} is ${lcm}`);

// lcm of 6 and 8 is 24

// # method 2

let n1 = 6;
let n2 = 8;
let hcf;
for (i = 1; i <= n1 && i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
        hcf = i;
    }
}
let LCM = (n1 * n2) / hcf;

console.log(`lcm of ${n1} and ${n2} is ${LCM}`);

// lcm of 6 and 8 is 24