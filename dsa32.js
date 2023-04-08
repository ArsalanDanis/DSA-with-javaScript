// Program to Find ASCII Value of Character.

// (#)Method-1 by using charCodeAt()

let str = "Do you love JavaScript ?";

console.log(`ASCII char code of 'D' :`,str.charCodeAt(0));

// ASCII char code of 'D' : 68

// (#)Method-2 by using codePointAt();

let str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let ASCII = [];
for(i=0;i<str1.length;i++){
   ASCII.push(str1.codePointAt(i));
}

console.log(ASCII);
// output :[
//     65, 66, 67, 68, 69, 70, 71, 72,
//     73, 74, 75, 76, 77, 78, 79, 80,
//     81, 82, 83, 84, 85, 86, 87, 88,
//     89, 90
//   ]