// JavaScript Program to Count the Number of Keys/Properties in an Object.

// (#)Method-1 by for...in loops

const Student = {
    firstName:"Atif",
    secondName: "Husain",
    age: 25,
    fatherName:"Sameer",
    dob: 1998
}
let count=0;
for(let Key in Student){
   count++
}
console.log(count);
// output : 5

// (#)Method-2 by object.keys().length

const Mobile = {
    company: 'oppo',
    price : 35000,
    camera : '20px front',
    Storage : '120gb'
}

let properties = Object.keys(Mobile).length;
console.log(properties);
// output :4