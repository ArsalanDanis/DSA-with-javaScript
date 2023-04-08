// #Program to Find HCF or GCD of two numbers ;

let num1 = 30;
let num2 = 72;
let hcf;

for (i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}
console.log(`The HCF of ${num1} and ${num2} is ${hcf}`);

// The HCF of 30 and 72 is 6 .

//  #Program to Find HCF or GCD of three numbers ;

let n1 = 30;
let n2 = 12;
let n3 = 20;
let Hcf
for (i = 1; i <= n1, i <= n2 && i <= n3; i++) {
    if (n1 % i == 0 && n2 % i == 0 && n3 % i == 0) {
        Hcf = i;
    }
}
console.log("hcf :", Hcf);

// hcf : 2







