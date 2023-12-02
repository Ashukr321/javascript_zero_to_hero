// map methods  in the js
// this methods   take  a callback function it  has three parameter
// value , index, array
// we can use map methods like a higher order function
const data = [23, 232, 4, 242, 24, 4242];

const modifydata = data.map((element,index,value)=>{
  return element+1;
})
console.log(modifydata);

// map function return a new array or we can say that data is return modify 
// for each Loop 
modifydata.forEach((element,index,arr)=>{
  console.log(`${index} : ${element} `);
})
// for each method take 3 parameters 
// element , index , array  
// callback function  execute for the each elements of the array 
