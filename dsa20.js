// Program to Check Armstrong Number.

let number = 153;
let n =number.toString().length;
let sum=0;
let temp =number;
let reaminder;
while(temp > 0){
    reaminder = temp % 10 ;
    sum += reaminder ** n;
    temp=parseInt(temp/10);
}
if(sum == number) {
    console.log(`${number} is an Armstrong number`)
}
else {
    console.log(`${number} is not an Armstrong number`)
}

// output : 153 is an Armstrong number

