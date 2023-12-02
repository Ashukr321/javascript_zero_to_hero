
// accumulator , currentvalue 
const Products = [
  {productName:"apple mackbook",price:72000},
  {productName:"iphone",price:55000}
];

// here i want to calculate total price of the products 
const  totalPrice = Products.reduce((accumulator,currentvalue)=>{
   return accumulator+currentvalue.price;
},0);

console.log(totalPrice);


