// Program to Loop Through an Object;

const students ={
    firstName : "Amit",
    LastName : "Singh",
    Age : 18,
    Address : "D-25/2,Park road,Delhi",
    class : 12
}
let about ="";
for(let x in students){
   about+=  students[x]+" ";
}
console.log(about);

// Amit Singh 18 D-25/2,Park road,Delhi 12 .