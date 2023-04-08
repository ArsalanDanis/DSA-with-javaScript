// JavaScript Program to Merge Property of Two Objects.

// (#)Method-1 by using assingn.

const Student = {
    Name : "Akash",
    Age : 26,
    FatherName : "Nitin"
}
const person = {
   dateOfBirth : 1997,
   MotherName : "Sashi"
}

let newObject1 = Object.assign(Student,person);

console.log(newObject1);
// output :{
//     Name: 'Akash',
//     Age: 26,
//     FatherName: 'Nitin',
//     dateOfBirth: 1997,
//     MotherName: 'Sashi'
//   }

// (#)Method-2 by using spread oprator(...).

const newObject2 = {...Student,...person};
console.log(newObject2);
// output :{
//     Name: 'Akash',      
//     Age: 26,
//     FatherName: 'Nitin',
//     dateOfBirth: 1997,  
//     MotherName: 'Sashi'
//   }