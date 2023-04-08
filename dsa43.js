// Program to Check if a Key Exists in an Object.

// (#)Method-1 By using (in) operator

const Student = {
        Name: 'Abhishek',
        Age: 26,
        FatherName: 'Naveen',
        dateOfBirth: 1997,
        MotherName: 'Sheelu',
        state: 'Mumbai'
      }
const hasProperty = 'state' in Student ;
if(hasProperty){
    console.log("key exists in the given object")
}
else {
    console.log("key is not exists in the given object")
}
// output:key exists in the given object.

// (#)Method-2 By using hasOwnPrpwerty()
const person = {
  name: "Rahul",
  class : 6
}

let hasKey = person.hasOwnProperty('class');
if(hasKey){
    console.log("property exists in the given object")
}
else {
    console.log("property is not exists in the given object")
}

// output:property exists in the given object.

