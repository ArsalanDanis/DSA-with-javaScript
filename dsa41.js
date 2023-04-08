// Program to Remove a Property from an Object.

const person = {
    name : "Suhail",
    age : 28,
    class : 11,
    fatherName : "Akhil",
    rollNumber : "22CSE0056"
}

delete person.name ;
delete person['rollNumber'];

console.log(person);

// output : { age: 28, class: 11, fatherName: 'Akhil' }