// there are three type of the variabels in the js
// let var and const
// var is the hoisted in nature

// console.log(name);//
// const func = () => {
//   console.log(name);
//   var name = "Ashutosh kumar singh";
//   console.log("this is  the arrow function in the js ");
// };


// var is the hoisted in nature 
// let and const are the non hoisted in nature 


// console.log(name); // hoistedi the nature 

// var name = "Ashutosh";
// console.log(name);

// let keywords  can be reintialise 
// let data= "bca";
// data = "btech";
// console.log(data);

// const num = 343;
// console.log(`the value of the number ${num}`);

// num = 23;

const func1 = ()=>{
  console.log("this is the func1");
}
const func2 = ()=>{
  func1();
  console.log("this is the func2");
}
const func3 = ()=>{
  func2();
  console.log("this is the func3");
}

func3();
