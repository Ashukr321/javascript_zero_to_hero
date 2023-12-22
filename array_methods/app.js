// here we create the js array 
const fruties = ["apple","mango","orange","onion"];
//here  have to apply the map methods 

// map method take a callback function that function take 4 parameter 
// 1 currentelement index , and data , array ,  
 
// map method can mutate the origianl array 

// internaly map methods return the array 
const data = fruties.map((data,index)=>{
  console.log(`${index} : ${data}`);
})

// when a callback function is executed this code is   here we map is the callback function 
// that callback function is hangle by the callback queue when callsatck is free or we can say empty then
// the event loop assign in to the callstack  ⭐⭐⭐⭐

// this mostly use in the react for rendring the mulitple products 

