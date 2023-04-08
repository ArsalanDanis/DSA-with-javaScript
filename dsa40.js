// Program to Create Objects in Different Ways;

// (1) Using Objects literals.
const student = {};
   student.Name="Arsalan";
   student.Age = 27;
   student.Qualification = "B.Tech";

   console.log(student);
// //    { Name: 'Arsalan', Age: 27, Qualification: 'B.Tech' }

// // (2) Creating objects using "new" Key word.

const student = new Object();
student.Name="Arsalan";
student["Age"] = 27;
student.Qualification = "B.Tech";

console.log(student)

// { Name: 'Arsalan', Age: 27, Qualification: 'B.Tech' }

// (3) By constructor function.

function student(){
    this.Name = "Arsalan";
    this.Age=27;
    this.Qualification="B.tech";
}
const students = new student();

console.log(students);

// student { Name: 'Arsalan', Age: 27, Qualification: 'B.tech' }