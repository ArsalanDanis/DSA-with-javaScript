// # Find the largest number among three numbers !!

function greatestNumbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("num1 is the gratest amongs num1,num2 and num3.")
    }
    else if (num2 > num1 && num2 > num3) {
        console.log("num2 is the gratest amongs num1,num2 and num3.")
    }
    else {
        console.log("num3 is the gratest amongs num1,num2 and num3.")
    }
}
greatestNumbers(999, 0, 85)
greatestNumbers(10, 780, 258);
greatestNumbers(100, 5, 199);

// num1 is the gratest amongs num1,num2 and num3.
// num2 is the gratest amongs num1,num2 and num3.
// num3 is the gratest amongs num1,num2 and num3.
