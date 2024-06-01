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


// const friends = ['Daniel','Rupert','Gelie','John Lloyd']; //-Literal syntax, usual way of using array

// console.log(friends);

// const years = new Array(1991,1992,1993,1994,2000,2005); // another way of creating array.

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length); // to count the values in array.
// console.log(friends[friends.length - 1]); // to get the last value of array -1, -2...if you want to get 2nd to the last etc. 

// friends[1] = 'Jay'; // to change array value.

// console.log(friends);

// const firstname = 'Daniel';

// const daniel = [firstname,'Dael', 2024 - 1992, 'Web Developer',friends];


// console.log(daniel);

// // Exercise

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years2 = [1991,1992,1993,1994,2000,2005];

// const age1 = calcAge2(years2[1]);
// const age2 = calcAge2(years2[2]);
// const age3 = calcAge2(years2[years2.length -1]);

// console.log (age1,age2,age3);

// const ages = [calcAge2(years2[1]) ,calcAge2(years2[2]), calcAge2(years2[years2.length -1])] ;

// console.log (ages);


// Add Elements

// const friends = ['Daniel','Rupert','Gelie','John Lloyd']; 

// const newLength = friends.push('Jay');


// console.log(newLength);

// friends.unshift('John');

// console.log(friends);

// // Remove Elements

// friends.pop(); // remove the last element of array

// const popped = friends.pop();

// console.log(popped);

// console.log(friends);

// friends.shift();
// console.log(friends);



// console.log(friends.indexOf('Gelie'));


// console.log(friends.includes('Dani')) // to determine if the element is included in Array



// Objects

// Object literal syntax
const daniel = {
    firstName: 'Daniel',
    lastName: 'Dael',
    age: 2037 - 1992,
    job: 'Web Developer',
    friends: ['Gelie','Rupert', 'Yendell', 'John Lloyd']
};

console.log(daniel);

// Dot notation - use to retrieve data from objects
console.log(daniel.lastName);

// Bracket notation - another way of retrieving data from objects.We can put expression in this notation.
console.log(daniel['lastName']);

const nameKey ='Name';
console.log(daniel['first' + nameKey]);
console.log(daniel['last'+ nameKey]);

const interestedIn = prompt('What do you want to know about Daniel? Choose between firstName, lastName, age, job, and friends');
// console.log(daniel[interestedIn]);



if (daniel[interestedIn]) {
    console.log(daniel[interestedIn]);    
} else {
    console.log('Wrong request, Choose between firstName, lastName, age, job, and friends ')
};

daniel.location = 'Philippines';
daniel['facebook'] = 'Daniel Josue Dael';
console.log(daniel);


// Challenge
// daniel has 4 friends and his bestfriend is Gelie.

console.log(`${daniel.firstName} has ${daniel.friends.length} friends and his bestfriend is ${daniel.friends[0]}.`)


const daniel = {
    firstName: 'Daniel',
    lastName: 'Dael',
    age: 2037 - 1992,
    job: 'Web Developer',
    friends: ['Gelie','Rupert', 'Yendell'],
    hasDriversLicense: true,
    calcAge: function(birthYear) {    // Any function that is attached to Object is called method.
        return 2037 - birthYear
    }
};
