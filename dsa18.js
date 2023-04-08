// Program to Find LCM.

// (#)Method-1 

let num1 = 3;
let num2 = 8;
let num = (num1 > num2) ? num1 : num2;
    while(true){
            if(num % num1 ==0 && num % num2 ==0){
                console.log(`The LCM of ${num1} and ${num2} is equal to ${num} `);
                break;
            }
       num++;    
    }

    // output : The LCM of 3 and 8 is equal to 24 ;

// (#)Method-2

let number1 = 6;
let number2= 9;
let HCF;
for (i=0;i<number1 && i<number2;i++){
    if(number1 % i==0 && number2 % i ==0){
      HCF = i;
    }
}
 let Lcm = (number1 * number2)/HCF ;

 console.log(`The LCM of ${number1} and ${number2} is equal to ${Lcm} `);

//  output :LCM of 6 and 9 is equal to 18 .

