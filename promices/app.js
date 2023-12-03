//  promicess in  the js
// this is very important question in the js
// promicess is just similar to the normal object
// that take a callback functoin and that callback function take 2 argument
//  resolve or reject
// state of the promices ??
// resolve , reject or we can say pending state
// how to create  the promices object
//   here promices a object so we have to console it

//  how to creata promices
// promices is  asynchronus task
// microtask

const promise = new Promise((resolve, reject) => {
  resolve("promise resolve successfully ");
  reject("prpmicse rejected");
});


//  how to cosume the promices
//  as we know that object have  their own method
// like window object have their own methods similar promices have  2 methods
// .then and catch
//  both these two methods will take a callback function as we know that callback fucntion
// goes into the callstack

promise
  .then(data => {
    console.log(data);
  })
  .catch(() => {
    console.log("promise is rejected !");
  });

// we can also nested the .then .then this create problem and difficult to manage it
//  to solve this issue introduce a new concept that is know as async and await
