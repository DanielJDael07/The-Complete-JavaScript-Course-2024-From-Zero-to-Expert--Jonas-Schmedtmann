'use strict';

// let hasDriversLicense = false;
// const pastTest = true;

// if(pastTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log(`I can drive:D`);


// // const interface = `Audio`;

// const private = 534;


// Function Declaration

// function logger() {
//     console.log(`My name is Dan.`);
// }


// calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const applejuice  = fruitProcessor(5,0);
// console.log(applejuice);

// const appleOrange = fruitProcessor(2,4);
// console.log(fruitProcessor(2,4))

// Function Declaration

// function calcAge1(birthYear) {
//   return   2037 - birthYear;
// }

// const myAge1 = calcAge1(1992);
// console.log(`My age in Year 2037 is ${myAge1}.`);

// Function Expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const myAge2 = calcAge2(1992);

// console.log(`My age in Year 2037 is ${myAge2}.`)

// Function Declaration can be called before defining it while Fuction Expression cannot.


// Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }


// Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;

// const myAge3 = calcAge3(1992);

// console.log(`My age in Year 20237 is ${myAge3}.`);

// const yearsUntilRetirement = (birthYear,firstname) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstname} retires in ${retirement} years.`;
// }



// console.log(yearsUntilRetirement(1992 , 'Daniel'))
// console.log(yearsUntilRetirement(1996 , 'Gelie'))


//Functions Calling other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }


// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3))

// const calcAge =function (birthYear) {
//   return 2037 - birthYear;
// } 




// const yearsUntilRetirement = function (birthYear,firstname) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//       if(retirement > 0) {
//         return retirement
//       } else {
//         return -1;
//       }
//       // return `${firstname} retires in ${retirement} years.`;
      
// }

// console.log(yearsUntilRetirement (1992,'Daniel'));
// console.log(yearsUntilRetirement (1950,'John'));


const friends = ['Daniel','Rupert','Gelie','John Lloyd']; //-Literal syntax, usual way of using array

console.log(friends);

const years = new Array(1991,1992,1993,1994,2000,2005); // another way of creating array
