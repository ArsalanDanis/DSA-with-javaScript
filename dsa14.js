// Program to Find the Factorial of a Number!!!

function factorialOfNumbers(num) {
    if (num < 0) {
        return `Factorial of a negative number can't be calculated.`

    }
    else if (num == 0 || num == 1) {
        return 1;
    }

    return num * factorialOfNumbers(num - 1);

};
console.log("The factorial of 5 is equal to", factorialOfNumbers(5), '.');

// The factorial of 5 is equal to 120 .
