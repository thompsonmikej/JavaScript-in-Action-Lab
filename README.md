# JavaScriptinAction_Lab

JavaScript in Action
Lab
Tech Stack
JavaScript
Notes
Refer to the Student Hub for definitions & examples of Variables, Conditionals, Loops, Functions,  Arrays, and most importantly, debugging.

Setup Steps 
Inside your projects folder, create a folder called JavaScriptInAction
Open Visual Studio Code, and select File > Open Folder at the top to open the JavaScriptInAction folder. 
In the Explorer, click the new file button and create a file called worksheet.js. Applying the correct extension to the file name (.js) will create this file as a JavaScript file.
Create an index.html file in the same folder. Use a <script> tag to connect the worksheet.js file to the index.html.
You can now open the index.html file in your browser to run and debug your code!
Tasks
Variables
Task 1: Days of the week
Create a variable called dayOfWeek assign it a value of the string Monday. 
Print dayOfWeek to the console 
On the following line, change the value of dayOfWeek so that it has the value Friday. 
Print the statement “I can’t wait for Friday!” using the dayOfWeek variable 
Put down a breakpoint on the first line of your code in the browser and run your code with the debugger. Use the Step Into button to go from line to line. Hover your mouse over the dayOfWeek variable every place it is used to see its current value change from Monday to Friday before it is printed

Task 2: User Input
Create a variable called animalInput and set it equal to the prompt function call with the phrase “What is your favorite animal?”
Create another variable called colorInput and set it equal to the prompt function call with the phrase “What is your favorite color?”
Combine these two variables within a string so you can print the phrase “I’ve never seen a <color> <animal>!”
Conditionals
Before starting the next section, think of your favorite breakfast, your favorite lunch, and your favorite dinner. Write these three things in some comments in your code. Remember to start a line with // to designate it as a comment

Task 1: Meals
Create a variable called timeOfDay and give it the value 1300 
Below that, create another variable. This time, you choose the name. This variable will end up holding the value of one of the meals you have previously chosen. But right now, you don’t know which it will hold! What would be a good name to use for a variable that might end up with any of those three values? 
Now create a conditional with three parts: if timeOfDay has a value of less than 1200, assign your own variable the value of the breakfast you chose. 
If timeOfDay is between 1200 and 1700, assign your variable the lunch you chose. 
If timeOfDay is greater than 1700, assign your variable the dinner you chose 
After these conditionals, print your variable to the console. What value do you expect it to show? 
Go back to the line where you created timeOfDay and change its value twice so that you are able to see the other two meals printed when you run the code. 
Now try to ‘break’ this section of code by giving timeOfDay a value that will cause an error. Think about how the variable is being used and what types of values would not make sense to be used that way. Run the code again to see the error get thrown. 
After you have successfully caused this section of code to throw an error, place a breakpoint on the first line of code in the file and debug the program. Watch how it will run all previous code until it encounters the line where the error occurs.

Task 2: Random Number
Declare a variable to store a random number between 0 and 10. You will need to do some research to determine how to generate a random number in JavaScript. 
A good search term to use: “random number JavaScript” 
If the number is between 0 and 2, print to the console “Beatles” 
If the number is between 3 and 5, print to the console “Stones” 
If the number is between 6 and 8, print to the console “Floyd” 
If the number is equal to 9 or 10, print to the console “Hendrix”    

“For” Loops
In JavaScript, loops are an important tool that allow developers to execute a block of code over and over as long as a condition holds true. This section will allow you to practice a for loop and while loop.

Task 1
Write your own “for” loop that will display the message “JavaScript is cool!” 7 times. 
Expected Output:   
         
Task 2
Write your own “for” loop that will display the numbers 0-10, one number per loop. You will need to utilize a variable for this! 
Task 3
Write a for loop that will print the following sequence:
    

Functions
Task 1: Favorite Movie (void functions)
Create an appropriately named variable and assign it the value of the name of your favorite movie. 
On the next line, print this variable to the console. Run your code to test it out. 
Now, move the previous two lines of code you wrote into a function named printMovieName 
Run your code again. Why does the movie name no longer print? (See slide 15 of the Javascript in Action powerpoint) 
Now do what slide 15 states is required for a function to run so you can test it out! (Hint: it's the bottom half of the slide!)

Task 2: Favorite Band (return functions)
Write a function that asks a user to enter their favorite band 
On the next line, the function should return the user’s response 
When you call the function, save the returned result as a new variable.  
After the function is called, print the returned result.

Task 3: Concert (parameters)
Create a new function called concertDisplay. This function should have one parameter called musicalAct 
Inside the function, ask the user to enter the street they live on and save it as a variable called myStreet. 
Print a string that combines the variable that holds the user’s response along with the musicalAct parameter. The message should end up saying “It would be great if < musicalAct> played a show on <myStreet>!”
Now when you call the concertDisplay function, pass in the variable that got returned from the Favorite Band section.

Arrays
Task 1: Desktop Items
Create a new variable called desktopItems. Establish this variable as an array by setting it equal to a pair of square brackets [ ]. 
When creating an array literal like this, we can insert some initial values at the same time it is created. 
Between the brackets, add a few strings to describe three items you see around you in your workspace. ‘desk’, ‘lamp’, etc. Make sure to separate the items with commas OUTSIDE the quote marks. 
What index values do these 3 items have? 
Print to the console the item that resides in index 1. 
On a new line, use the JavaScript array method that allows you to add new things to an existing array to add the string ‘Infinity Gauntlet’ to your desktopItems array. 
Now, utilize a “for” loop to iterate over the desktopItems array and print out each item one at a time.
💪 BOSS FIGHT 💪
Task 1: Magic Number
This exercise will bring together all the pieces you have learned about so far!
Create a variable called magicNumber and give it an initial value of 50 
Create a variable called guess and give it an initial value of 0 
Create a while loop that will allow a user to continue to input a guess until they correctly choose the magic number. 
If the number guessed is lower than the magic number, it should print “Too low!” 
If the number guessed is higher than the magic number, it should print “Too high!” 
If the number is within 10 of the magic number in either direction, it should print the appropriate message and additionally print “Getting warmer!” 
If the number is correctly guessed, instead of “Getting warmer!”, print the magic number along with a congratulations message and break the loop. 
Once you have tested and determined it works, go back to the beginning and change magicNumber to be assigned a random number between 0 and 100 instead of the hardcoded value. 
Play your new guessing game a few times! Try to beat your own score 
After playing a few times, put down a breakpoint at the start of the while loop and run it with the debugger. Hover over the magicNumber variable to see how much easier it is to determine the value of your variables by debugging this way!
