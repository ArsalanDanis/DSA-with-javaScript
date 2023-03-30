// Program to check prime number !!!

function checkPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true;
}
console.log(checkPrimeNumber(7));

// Ans : true 


