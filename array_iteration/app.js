// here  we see the how to itreate the array
// create the  product array of object
const products = [
  { pName: "apple", price: 3000 },
  { pName: "orange", price: 400 },
  { pName: "mango", price: 100 },
  { pName: "iphone", price: 45000 },
];   

// here we try to iterate all  product items
// for loop
for (let i = 0; i < products.length; i++) {
  console.log(products[i].price);
}

//  calculate total  price of the product
// to calculate total price of the product we can use the accumulator methods
const totalPrice = products.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);

console.log(`total price of the product :${totalPrice}₹`);

//  we have another methods like do while loop
// for in loop gives the index of the array elements

for (let x in products) {
  console.log(x);
}
// for of loop
// for of loop iterate over the array  elements
for (let y of products) {
  console.log(y);
}
