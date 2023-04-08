// JavaScript Program to Replace All Occurrences of a String.

//(#) Method -1 by using 'replace'.

let str="She sells sea shells near sea shore Sea"

let str1=str.replace('sea','sound');
console.log(str1);
// output : She sells sound shells near sea shore Sea
let str2=str.replace(/sea/g,'sound');
console.log(str2);
// output: She sells sound shells near sound shore Sea
let str3=str.replace(/sea/gi,'sound')
console.log(str3);
// output: She sells sound shells near sound shore sound

//(#) Method -2 by using 'split' & 'join'.

let string = "She sells sea shells near sea shore sea"
let str4 = string.split('sea').join('sound');
console.log(str4);

// output: She sells sound shells near sound shore sound.
