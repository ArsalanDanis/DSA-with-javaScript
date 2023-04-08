// #Program to Find the Factors of a Number.

function FactorsOfNumber(num) {
    var factors = [];
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log("factors :",FactorsOfNumber(6));

// factors : [ 1, 2, 3, 4, 6, 12 ] 