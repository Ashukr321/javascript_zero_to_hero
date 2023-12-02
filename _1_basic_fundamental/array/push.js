//  push method in the js 

//push methods is use to insert the element in the end of the array 
const  fruites = ["apple","mango"];

// insert orange in the fruites // push methods insert the data at the end of the array
fruites.push("orange");

// iterate this array using normal for loop
for(let i  = 0 ; i<fruites.length; i++){
  console.log(fruites[i]);
}

// console.log("after pop");
// fruites.pop();
// fruites.forEach((element)=>{
//   console.log(element);
// })

// pop methods remove the element from the end of the array 


// shift  this remove the element  from the array 
fruites.shift();
for(let x of fruites){
  console.log(x);
}
fruites.unshift("banana")
for(let x of fruites){
  console.log(x);
}