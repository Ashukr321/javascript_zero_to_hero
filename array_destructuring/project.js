// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


// const [first ,second] = restaurant.categories;
// console.log(first);
// console.log(second);
// const {thu,fri,sat}= restaurant.openingHours;
// console.log(thu);
// console.log(fri);
// console.log(sat);

const {mainMenu=[]} = restaurant;
mainMenu.forEach((element)=>{
  console.log(element);
})


// const arr =[2,3,4];
// // this happend without destructring 

// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a);
// console.log(b);
// console.log(c);

// //  here we see the  another example with the destructring the array 
// const [x , y, z] = arr; // if we destructring from the array then we have to use the square brackets [];

// console.log(x);
// console.log(y);
// console.log(z);