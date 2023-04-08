// Program to Check Whether a String is Palindrome or Not
 let S="madamm"
let s1= S.split("").reverse().join("");
if(S.toString()==s1.toString()){
   console.log("Palindrome String");
}
else {
    console.log("Not Palindrome String")
}

// Ans: Palindrome String.