// Program to Find the Sum of Natural Numbers (Take inpute from users)!!!

// # first method by using mathmatical formula .

function sumOfNaturalNumbers(num) {
    return num * (num + 1) / 2;
};
console.log(sumOfNaturalNumbers(10));

// Ans = 55.

// # Second method by using recursive function .

function sumOfNaturalNumber(number) {
    if (number === 1) {
        return 1;
    };
    return number + sumOfNaturalNumber(number - 1);
};
console.log(sumOfNaturalNumber(10));

// Ans = 55.

