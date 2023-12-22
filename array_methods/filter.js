console.log("filter:  methods of the js ");

// here we create the some product that contains array of the object
let products = [
  { name: "apple", category: "fruit", price: 300 },
  { name: "carrot", category: "vegetable", price: 100 },
  { name: "broccoli", category: "vegetable", price: 100 },
];

// here filter the product on the basics of the price
// this will return only those product which have a price greater than 50
const filterProductPrice = products.filter(products => {
  return products.price >100;
});

// this will return into the newly create array
filterProductPrice.forEach((data)=>{
  console.log(data.name)
})



const number  = [1,2,3,4];
number.push(3);// this will push the new element in the array 
number.pop();// this remove the element from the end of the array 
console.log(number);


// shift and unshit 
number.shift();
console.log(number) //this is used to remove the first element from the array

number.unshift(13);
console.log(number);