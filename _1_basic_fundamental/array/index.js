// here  we see the how to convert array like object in to
// array like object
const realArray = ["a", "b", "c"];

// this is the array like object in the js
// var arrayLike = {
//   0: "a",
//   1: "b",
//   2: "c",
//   length: 3,
// };

// how to convert string to the array using
// split methods
// var obj = "afd,basd,cad";
// var arr = obj.split(',');
// console.log(arr);
// const arr = [12,32,3,2,2];
// const data = arr.reduce((accumulator,currentvalue)=>{

//   return accumulator+currentvalue;
// })
// console.log(data);

// lets see the array of  object
const products = [
  { productName: "iphone", pricce: 51000 },
  { productName: "laptop", pricce: 71000 },
  { productName: "chocolate", pricce: 1000 },
];

// i want to get total price of the product
const totalPrice = products.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue.pricce;
},0);
// here we  have  to pass the dependecies we can say intial state 

console.log(totalPrice);
