console.log("array destcturing in the js");

// what is the meanig of the desturering 
// restructring is know as destrutre 
//  extract the value  from  the array  is know as array destructring 

// for array destructring we have to use []
// const [a , m ,o] = ["apple","mango","orange"];
// console.log(a);
// console.log(m);
// console.log(o);

const data = [
  {
    id: 1,
    name: 'John',
    details: {
      hobbies: ['reading', 'coding']
    }
  },
  {
    id: 2,
    name: 'Alice',
    details: {
      hobbies: ['painting', 'traveling']
    }
  }
];
for(const {id,name,details:{hobbies}} of data){
  console.log(`id :${id} name: ${name} hobbies: ${hobbies.join(",")}`);
}


const students = [
  {
    name: 'Alice',
    grades: [95, 87, 91]
  },
  {
    name: 'Bob',
    grades: [89, 92, 78]
  },
  {
    name: 'Charlie',
    grades: [75, 88, 94]
  }
];

for(const {name,grades} of students){
  console.log(`${name} grade: ${grades.join(", ")} `);
}
