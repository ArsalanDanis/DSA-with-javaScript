// Program to Reverse a String.

let str= "abcdefghijklmnopqrstuvwxyz";
// # Method-1.
let str1="";
for(i=str.length-1;i>=0;i--){
   str1+=str[i];
}
console.log(str1);

// zyxwvutsrqponmlkjihgfedcba

// # Method-2.
let str2=str.split("").reverse().join("");
console.log(str2);

// zyxwvutsrqponmlkjihgfedcba
