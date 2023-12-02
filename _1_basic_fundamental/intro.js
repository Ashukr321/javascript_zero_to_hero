
console.log("hellow world!");
 // this will take the argument
// so they give the information about that argument
// argument can be a object

//let see the example
// const user = {
//   name: "Ashutosh",
//   age: 12,
// };

// console.info(user);
// here we see the clearly 
//how we can use the info console methods of the js


// table: methods is  use for the show the data 
// into the tabular formate in the js 
// console.table(user);

// create a array of object 

const Student = [
  {name:"Ashutosh",age:32,course:"bca",location:"patan"},
  {name:"ankit",age:32,course:"bba",location:"patan"},
  {name:"Ashutosh",age:32,course:"bca",location:"patan"},
  {name:"Ashutosh",age:32,course:"bca",location:"patan"},
]


// internally all the array of object assign a index that is started from zero to n-1
console.log(Student);

console.warn("wow this is amazing js course"); // its color is orange 


// mostly we use log methods 
console.log("welcome to clean code js course")
// ?
console.count(); // defalut => 1;
console.count(); // increase the number by 1

// console.clear(); // clear is use to clear all the console 
console.dir();

const person ={
  name:"Ashutosh",
  age:21,
  address:{
    city:"Pune",
    state:"Maharashtra"
  }
}
console.dir(person);