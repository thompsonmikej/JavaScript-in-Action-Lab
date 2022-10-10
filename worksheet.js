// "use strict";

// // Task 1: Days of the week
// // Create a variable called dayOfWeek assign it a value of the string Monday.
// let dayOfWeek;
// dayOfWeek = "Monday";

// // Print dayOfWeek to the console
// console.log(dayOfWeek);

// // On the following line, change the value of dayOfWeek so that it has the value Friday.
// dayOfWeek = "Friday";

// // Print the statement “I can’t wait for Friday!” using the dayOfWeek variable
// console.log(`I can't wait for ${dayOfWeek}!`)

// // Put down a breakpoint on the first line of your code in the browser and run your code with the debugger.

// // Use the Step Into button to go from line to line.Hover your mouse over the dayOfWeek variable every place it is used to see its current value change from Monday to Friday before it is printed

// // Task 2: User Input
// // Create a variable called animalInput and set it equal to the prompt function call with the phrase “What is your favorite animal ?”
// let animalInput;
// animalInput = prompt(`What is your favorite animal?`);

// // Create another variable called colorInput and set it equal to the prompt function call with the phrase “What is your favorite color ?”
// let colorInput;
// colorInput = prompt(`What is your favorite color?`)
// // Combine these two variables within a string so you can print the phrase “I’ve never seen a < color > <animal>!”

// let animalColor;
// animalColor = colorInput + ' ' + animalInput;
// console.log(`I've never seen a ${animalColor}!`)

// // Before starting the next section, think of your favorite breakfast, your favorite lunch, and your favorite dinner.
// // Write these three things in some comments in your code.
// // Remember to start a line with // to designate it as a comment


// // my Favorite Breakfast = waffles
// // my Favorite Lunch = meatballs'
// // my Favorite Dinner = lasagne

// // Task 1: Meals
// // Create a variable called timeOfDay and give it the value 1300
// let timeOfDay;
// timeOfDay = 300;
// let myFavoriteMeal;
// if (timeOfDay >= 0 && timeOfDay < 1200) {
//     myFavoriteMeal = `waffles`;
// }
// else if(timeOfDay >= 1200 && timeOfDay < 1700){
//     myFavoriteMeal = `meatballs`;
// }
// else if (timeOfDay >= 1700 && timeOfDay < 2400){
//     myFavoriteMeal = `lasagna`;
// }
// console.log(myFavoriteMeal);

// // Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error.Think about how the variable is being used and what types of values would not make sense to be used that way.Run the code again to see the error get thrown.

// // timeOfDay = D;  //"Uncaught Reference Error: D is not defined"
// // timeOfDay = %; // Uncaught Syntax Error: Unexpected Token '%'
// // timeOfDay = -34; // not an error but illogical

// // After you have successfully caused this section of code to throw an error, place a breakpoint on the first line of code in the file and debug the program.Watch how it will run all previous code until it encounters the line where the error occurs.



// // Task 2: Random Number
// // Declare a variable to store a random number between 0 and 10. You will need to do some research to determine how to generate a random number in JavaScript.

// /* HTML--  <p id="demo"></p> */
// // document.getElementById("demo").innerHTML = Math.floor(Math.random() * 11);

// // function getRndInteger(min, max) {
// //     return Math.floor(Math.random() * (max - min)) + min;
// // }

// let returnValue;
// function getRndInteger(min, max) {  //Uncaught syntax error: unexpected number
//     return Math.floor(Math.random() * (10 - 0)) + 0;
// }
// randomInteger = getRndInteger()

// // A good search term to use: “random number JavaScript” see: https://www.w3schools.com/js/tryit.asp?filename=tryjs_random_0_10
// // If the number is between 0 and 2, print to the console “Beatles”

// if (randomInteger >= 0 && randomInteger <= 2) {
//     returnValue = `Beatles`;
// }
// // If the number is between 3 and 5, print to the console “Stones”
// else if (randomInteger >= 3 && randomInteger <=5) {
//     returnValue = `Stones`;
// }
// // If the number is between 6 and 8, print to the console “Floyd”
// else if (randomInteger >= 6 && randomInteger <= 8) {
//     returnValue = `Floyd`;
// }
// // If the number is equal to 9 or 10, print to the console “Hendrix”
// else if (randomInteger >= 9 && randomInteger <= 10) {
//     returnValue = `Hendrix`;
// }
// console.log(returnValue);

// “For” Loops
// In JavaScript, loops are an important tool that allow developers to execute a block of code over and over as long as a condition holds true.This section will allow you to practice a for loop and while loop.

// Write your own “for” loop that will display the message “JavaScript is cool!” 7 times.

// function printSeven(){
//     for (let i = 0; i < 7; i++) {
//         console.log('JavaScript is cool!');
//     }
// }
// printSeven()


// Task 2
// Write your own “for” loop that will display the numbers 0 - 10, one number per loop.You will need to utilize a variable for this!


// function printOneByOne() {
//     for (let i = 0; i < 11; i++) {
//         console.log(i);
//     }
// }
// outputNumbers= printOneByOne()

// function wordSequence() {
//     for (let i = 0; i < 5; i++) {
//         console.log('hello\ngoodbye');
//     }
// }
// alternatingWords = wordSequence()


// Task 3
// Write a for loop that will print the following sequence:
// function wordSequence() {
//     for (let i = 0; i < 5; i++) {
//         console.log('hello');
//         console.log('goodbye');
//     }
// }
// alternatingWords = wordSequence()


// Functions
// Task 1: Favorite Movie(void functions)
// Create an appropriately named variable and assign it the value of the name of your favorite movie.
// let favoriteMovie;
// favoriteMovie = "Spiderman";
// // On the next line, print this variable to the console.Run your code to test it out.
// console.log(favoriteMovie);

//     Now, move the previous two lines of code you wrote into a function named printMovieName

// function printMovieName() {
//     favoriteMovie = "Spiderman";
//     console.log(favoriteMovie);
// }


// Run your code again.Why does the movie name no longer print ? (See slide 15 of the Javascript in Action powerpoint)
// Now do what slide 15 states is required for a function to run so you can test it out!(Hint: it's the bottom half of the slide!)

// printMovieName()

// Task 2: Favorite Band(return functions)
// Write a function that asks a user to enter their favorite band

function yourFavoriteBand() {
  let favoriteBand;
favoriteBand = prompt("Enter your favorite band");
// On the next line, the function should return the user’s response 
return (favoriteBand);  
}
// When you call the function, save the returned result as a new variable. 
theBand = yourFavoriteBand(); 
// After the function is called, print the returned result.
console.log(theBand);

// Task 3: Concert(parameters)
// Create a new function called concertDisplay.This function should have one parameter called musicalAct

let musicalAct;
musicalAct = theBand
function concertDisplay(musicalAct) {
    let myStreet;
// Inside the function, ask the user to enter the street they live on and save it as a variable called myStreet. 
    myStreet = prompt('Enter the street of your residence')
// Print a string that combines the variable that holds the user’s response along with the musicalAct parameter.The message should end up saying “It would be great if < musicalAct> played a show on <myStreet>!”
    console.log(`It would be great if ${ musicalAct} played a show on ${myStreet}!`)
}
concertDisplay(musicalAct)


//     Now when you call the concertDisplay function, pass in the variable that got returned from the Favorite Band section.



















