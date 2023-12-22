// here we see the what is join methods
const names = ["ashutosh", "ankit", "aman"];
names.reverse();
console.log(names);
const result = names.join(",");
console.log(result);

// join methods is use to convert array into the  string
// split method  use to covert the string into the array

//  how to  create new array from the existing instance iterable object
let arr1 = [2, 4, 6];
const arr2 = Array.from(arr1);
console.log(arr2);

// lets create a array of string
const name = "Ashutosh";
const n1 = Array.from(name);
console.log(n1);
// now we  again convert into the string using join methods
const str = n1.join("");
console.log(str);


//  here  we see the how to concatenate the two array 
const ar1 = [3,34,2,4];
const ar2 = [2,2,5,3,532,5];
const ar3 = [...ar1,...ar2];
console.log(ar3);

// find method of the array 
const nums = [20, 87, 93, 45, 12, 65, 2]
const doesExits  = nums.includes(20);
console.log(doesExits);