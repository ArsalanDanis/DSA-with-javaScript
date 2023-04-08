// Program to Convert the First Letter of a String into UpperCase.

// (#)Method-1
let str="ishaan likes the javaScript";
let str1=str.split(" ");
let newstr="";
for(i=0;i<str1.length;i++){
     newstr+=(str1[i].slice(0,1).toUpperCase()+str1[i].slice(1))+" ";
}
console.log("output :",newstr);
// output : Ishaan Likes The JavaScript 

// (#)Method-2 
let str3=str[0].toUpperCase() +str.slice(1);

console.log(str3);
// output : Ishaan likes the javaScript