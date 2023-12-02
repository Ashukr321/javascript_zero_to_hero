// here we see the how the code is executed in the js 
//what is global execution context and what is the callstack 


// when the js engine  is start   a global execution context is created 
//  in the global execution context a global  object is also craeted 
// that is know as window object and this object is reffer by the this 
// keywords also 

// 

// in the arrow function this is refer to the global object 
// always remembers 


// what is the  call stack in the js 
// const name = "Ashutosh kumar";
// here  a create a callstack the in the call stack a name is decalre 
// inside this 


// console.log(name);

//this function is declare inside the callstack 
// stack is a datastructure that work on the lifo 
//last in first out 

// const func1  = ()=>{
//   console.log("this is the func1");
// }
// const func2 = ()=>{
//   console.log("this is the func2");
// }

// func2();// last in first out
// func1(); // 


// types of the variables in the js

// var  this is hoisted meant its declration goes to top of the  fuction 
// or we can say it goes in  the global execution context

function func(){
  var a;
  console.log(a); 
  var a = 23;

}
func();


//let this can be reassign 
// let name = "ASHUTOSH";
// console.log(name.repeat(3));


// // const  this can't be reassign 

// const data ="ashu,ajit,aman,rahul";
// const ar = data.split(",");
// console.log(ar);

// data
const data = new Date();
data.toJSON();
console.log(data.getDate());
console.log(data.getHours());
console.log(data.toLocaleDateString())
console.log(data.toLocaleDateString());