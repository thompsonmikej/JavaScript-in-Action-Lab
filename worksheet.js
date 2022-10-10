"use strict";

// Task 1: Days of the week
let dayOfWeek;
dayOfWeek = "Monday";
console.log(dayOfWeek);
dayOfWeek = "Friday";
console.log(`I can't wait for ${dayOfWeek}!`)

// Task 2: User Input
let animalInput;
animalInput = prompt(`What is your favorite animal?`);
let colorInput;
colorInput = prompt(`What is your favorite color?`)

let animalColor;
animalColor = colorInput + ' ' + animalInput;
console.log(`I've never seen a ${animalColor}!`)
// my Favorite Breakfast = waffles
// my Favorite Lunch = meatballs'
// my Favorite Dinner = lasagne

// Task 1: Meals
// Create a variable called timeOfDay and give it the value 1300
let timeOfDay;
timeOfDay = 300;
let myFavoriteMeal;
if (timeOfDay >= 0 && timeOfDay < 1200) {
    myFavoriteMeal = `waffles`;
}
else if(timeOfDay >= 1200 && timeOfDay < 1700){
    myFavoriteMeal = `meatballs`;
}
else if (timeOfDay >= 1700 && timeOfDay < 2400){
    myFavoriteMeal = `lasagna`;
}
console.log(myFavoriteMeal);

// Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error.Think about how the variable is being used and what types of values would not make sense to be used that way.Run the code again to see the error get thrown.

// timeOfDay = D;  //"Uncaught Reference Error: D is not defined"
// timeOfDay = %; // Uncaught Syntax Error: Unexpected Token '%'
// timeOfDay = -34; // not an error but illogical

// After you have successfully caused this section of code to throw an error, place a breakpoint on the first line of code in the file and debug the program.Watch how it will run all previous code until it encounters the line where the error occurs.


// Task 2: Random Number
// Declare a variable to store a random number between 0 and 10. You will need to do some research to determine how to generate a random number in JavaScript.

let returnValue;
function getRndInteger(min, max) {  
    return Math.floor(Math.random() * (10 - 0)) + 0;
}
randomInteger = getRndInteger()

if (randomInteger >= 0 && randomInteger <= 2) {
    returnValue = `Beatles`;
}
else if (randomInteger >= 3 && randomInteger <=5) {
    returnValue = `Stones`;
}
else if (randomInteger >= 6 && randomInteger <= 8) {
    returnValue = `Floyd`;
}
else if (randomInteger >= 9 && randomInteger <= 10) {
    returnValue = `Hendrix`;
}
console.log(returnValue);

// Write your own “for” loop that will display the message “JavaScript is cool!” 7 times.
function printSeven(){
    for (let i = 0; i < 7; i++) {
        console.log('JavaScript is cool!');
    }
}
printSeven()


// Task 2
function printOneByOne() {
    for (let i = 0; i < 11; i++) {
        console.log(i);
    }
}
outputNumbers= printOneByOne()

// Task 3
// Write a for loop that will print the following sequence:
function wordSequence() {
    for (let i = 0; i < 5; i++) {
        console.log('hello');
        console.log('goodbye');
    }
}
alternatingWords = wordSequence()


// Functions
// Task 1: Favorite Movie(void functions)
let favoriteMovie;
favoriteMovie = "Spiderman";
console.log(favoriteMovie);

function printMovieName() {
    favoriteMovie = "Spiderman";
    console.log(favoriteMovie);
}
printMovieName()

// Task 2: Favorite Band(return functions)

function yourFavoriteBand() {
  let favoriteBand;
favoriteBand = prompt("Enter your favorite band");
    return (favoriteBand);  
}
theBand = yourFavoriteBand(); 
console.log(theBand);

// Task 3: Concert(parameters)
let musicalAct;
musicalAct = theBand
function concertDisplay(musicalAct) {
    let myStreet;
    myStreet = prompt('Enter the street of your residence')
    console.log(`It would be great if ${ musicalAct} played a show on ${myStreet}!`)
}
concertDisplay(musicalAct)

// Task 1: Desktop Items
let desktopItems;
desktopItems = [`desk`, `lamp`, `chair`];

console.log(desktopItems[1]);

desktopItems.push(`Infinity Gauntlet`);

function printDesktopItems(desktopItems) {
    let count = "";
    for (let item of desktopItems) {
        console.log(item);
        count += item;
    }
}
printDesktopItems(desktopItems)


















