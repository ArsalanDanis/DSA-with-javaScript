// #Program to Find Sum of Natural Numbers Using Recursion

function sumOfNaturalNumbers(num) {
    if (num < 0) {
        return ` ${num} is not a natural number. `
    }
    if (num == 0) {
        return 0;
    }
    return num + sumOfNaturalNumbers(num - 1);
}
console.log(sumOfNaturalNumbers(10));

// Ans : 55 