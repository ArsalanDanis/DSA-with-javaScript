// Program to Clone a JS Object.

// (#)Method-1 by using Object.assign()

const Student = {
        Name: 'Abhishek',      
        Age: 26,
        FatherName: 'Naveen',
        dateOfBirth: 1997,  
        MotherName: 'Sheelu' 
      }
const object1 = Object.assign({},Student);
object1.rollNumber = "23BME0063"


console.log(object1);

// output : {
//     Name: 'Abhishek',
//     Age: 26,
//     FatherName: 'Naveen',
//     dateOfBirth: 1997,
//     MotherName: 'Sheelu',
//     rollNumber: '23BME0063'
//   }

console.log(object1.Name,Student.Name);

// output : Abhishek Abhishek

// (#)Method-2 by using Spread Syntax;

const object2 = {...Student};
console.log(object2);

object2.state = "Mumbai"
console.log(object2);
// output:
// {
//     Name: 'Abhishek',
//     Age: 26,
//     FatherName: 'Naveen',
//     dateOfBirth: 1997,
//     MotherName: 'Sheelu',
//     state: 'Mumbai'
//   }
