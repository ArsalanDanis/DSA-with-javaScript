// Program to Count the Number of Vowels in a String.

let text = "EDucaTIoN";
let string = text.toLocaleLowerCase().split("");
let vowels = [];
function numberOfVowelsCount() {
    for (let i = 0; i < 9; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            vowels.push(string[i]);
        }
    }

}
numberOfVowelsCount();
console.log("total No of vowels in the given strings is equal to :", vowels.length);