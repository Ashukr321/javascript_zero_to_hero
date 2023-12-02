// for the sorting the array elements we have methods know as sort 


// this methods sort the element on the basics of the asci code 
// let arr = [10,5,8,23];
// arr.sort((a,b)=>{
//   return b-a;
// })
// console.log(arr);


const product = [
  {pName:"apple",price:20000},
  {pName:"macbook",price:21000},
  {pName:"iphone",price:18000},
  {pName:"moto",price:1100},
];
console.log(product)
//  we want to  sort this product low to high 
product.sort((a,b)=>{
  return a.price-b.price; // if + then swap it 

})

console.log(product)
// total price we have accumulator 
const totalPrice  = product.reduce((accumulator,currentprice)=>{
  return accumulator+currentprice.price;
},0)
console.log(`total price is : ${totalPrice}`)