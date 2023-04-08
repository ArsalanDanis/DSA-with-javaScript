// #Program to Make a Simple Calculator (Take inpute from users).

let num1 = 9;
let num2 = 5;
var res;
let oprands = "*"
switch (oprands) {
    case "+":
        res = num1 + num2;
        // console.log("Addition");
        break;
    case "-":
        res = num1 - num2;
        // console.log("Substractions");
        break;
    case "*":
        res = num1 * num2;
        // console.log("Multiplications");
        break;
    case "/":
        res = num1 / num2;
        // console.log("Division");
        break;
    case "%":
        res = num1 % num2;
        // console.log("Percentage")
        break;
}
console.log("result :", res);

// result : 45

