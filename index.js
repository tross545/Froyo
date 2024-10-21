// Create prompt for user to enter a list of comma-separated froyo flavors
// Assign variable to the prompt in order to store the user input
const userInput = prompt(`Please enter a list of comma-separated froyo flavors`,`vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// Split the user's input into an array of strings
 const userOrder = userInput.split(`,`);
 console.log(userOrder);

 // Create an array to store 
 const arrayOrder = [];
 console.log(arrayOrder);

// Create loop to go through each of the flavors
// Create object to keep count of the type and quantity of each flavor ordered

// Create function to count the orders and return the count back to the user