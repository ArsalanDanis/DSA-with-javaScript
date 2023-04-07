// Program to Print All Prime Numbers in an Interval !!!

function primeNumbersInInterval(num1, num2) {
    let min = (num1 < num2) ? num1 : num2;
    let max = (num1 > num2) ? num1 : num2;

    for (i = min; i < max; i++) {
        flag = 0;
        for (j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }

}
primeNumbersInInterval(1, 13);

// Ans : 2,3,5,7,11
