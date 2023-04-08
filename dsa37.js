// Check the Number of Occurrences of a Character in the String.

// let str="Banana is yellowo in color";
// Method-1
let O=0;
for(i=0;i<str.length;i++){
    if(str[i]=='o'){
        O++
    }
}
console.log("occurrence of 'O' in above strings :",O);

// occurrence of 'O' in above strings : 3
// Method-2.

function CountOccurance(str,letter){
    let count=0;
    for(i=0;i<str.length;i++){
        if(str[i]==letter){
            count++
        }
    }
    return count;
}
console.log("Occurance of letter 'o' :",CountOccurance("aaa0poiouoolobtrooopuytijk",'o'));

// Occurance of letter 'o' : 8