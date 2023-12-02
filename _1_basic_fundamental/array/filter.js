// here we see the  filter methods 
// filte methods is very important this is use  to filter:  the data 
// this method return a new array
// const data  =[23,2,2,24,4,4,24,2];
// // filter methods ta callback fuction
// const filtredData = data.filter((element)=>{
//   return (element<10);
// })
// // ?
// console.log(filtredData);
// 


// see the another example of the filter methods in the js 
const products = [
  {pName:"APPLE MAC-BOOK",price:30000},
  {pName:"iphone",price:4000},
  {pName:"imac",price:25000},
  {pName:"moto g54",price:14500},
]

// here  filter the data from the  product and print  via the map method 
const filterProduct = products.filter((item, index,arr)=>{
  return item.price<30000;
})
console.log(filterProduct); // this is also a array of  object 

const mapData = filterProduct.map((d)=>{
  return d.price+1;
})

console.log(mapData);