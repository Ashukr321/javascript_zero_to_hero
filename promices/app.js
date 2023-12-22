// promicess 

// promicess executed in the microtask queue  
//  this have higher priority then the callbasck queues 

//promicess represent the evntaul compliation of the future values that represent the asynchronous task 


// state of the promices 
// pending 
// fulfiled 
// rejected 
// promicess solve the problme of the callback hell  


// const api  = 'https://jsonplaceholder.typicode.com/posts';
// const promices = fetch(api);

// // to consume this 
// promices.then( async(data)=>{
//   const res = await data.json();
//   console.log(res);
// }).catch((error)=>{
//   console.log('Opss', error)
// })


// const promiseA = new Promise((resolve, reject) => {
//   resolve(777);
// });
// promiseA.then((data)=>{
//   console.log(data);
// })

const cart = ["apple", "mango", "orange"];

var promise = createOrder(cart);

// consume the promices 
promise.then((orderId) =>{
  console.log(orderId);
}).catch((error)=>{
  console.log(error);
})



//create the promices 
function createOrder (cart){
  const pr = new Promise ((resolve,reject)=>{
      // validate cart 
      // createorder 
      if(!cart){
        const err = new Error("cart is not valid");
        reject(err);
      }
      
  })
  return pr;
}