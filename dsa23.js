// Program to Check if the Numbers Have Same Last Digit;
let res1,res2,res3 ;

function numbersHaveSameLastDigit(num1,num2,num3) {
      res1 = num1 % 10;
      res2 = num2 % 10;
      res3 = num3 % 10;

     if(res1==res2 && res1==res3){
        console.log(`${num1},${num2} and ${num3} have the same last digit.`)
     }
     else{
        console.log(`${num1},${num2} and ${num3} have not the same last digit.`)
     }
}
numbersHaveSameLastDigit(159,299,869);

// output:159,299 and 869 have the same last digit.