// Check Whether a String Starts and Ends With Certain Characters.

// (#)Method-1 by using startsWith() & endsWith()

let str="I would like to learn javaScript";

if(str.startsWith('I') && str.endsWith('t')){
    console.log("String starts with 'I' and ends with letter 't'");
}
else if(str.startsWith('I')){
    console.log("str only starts with 'i' but not ends with 't'");
}
else if(str.endsWith('t')){
    console.log("str only ends with 't' but not starts with 'I'");
}
else {
    console.log("string neither starts with 'I' not ends with 't")
}

// (#)Method-2 by using for loop.
let check;
function checkCharacter(){

    for(i=0;i<str.length;i++){
        if(str[0]=='I' && str[str.length-1]=='t'){
            check = "String starts with 'I' and ends with letter 't'" ;
        }
        else {
            check = "string neither starts with 'I' not ends with 't";
        }
    }
    return check;
}
checkCharacter();
console.log("output:",check);

// output: String starts with 'I' and ends with letter 't'