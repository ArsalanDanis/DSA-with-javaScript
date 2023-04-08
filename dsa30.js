// #Program to Find Factorial of Number Using Recursion 

function FactorialOfNumbers(Number){
    if (Number < 0){
        return "factorial of negative no is not possible ."
    }
    if (Number == 1 || Number == 0){
        return 1;
    }
    return Number * FactorialOfNumbers(Number-1);    
}
console.log(FactorialOfNumbers(-8));

// Ans : factorial of negative no is not possible .

console.log(FactorialOfNumbers(0));
console.log(FactorialOfNumbers(1));

// Ans : 1 
console.log(FactorialOfNumbers(5));

// Ans : 120


