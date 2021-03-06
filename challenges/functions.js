// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
     return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
// const name = function(a, b, cb) {
const add = function(num1, num2) {
     const sum = num1 + num2;
     return sum;
};
const multiply = function(num1, num2) {
     const product = num1 * num2;
     return product;
};
const greeting = function(firstName, lastName) {
     return `Hello ${firstName} ${lastName}, nice to meet you!`;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.
/*
<<<<<<< HEAD
            because it is within the same lexical environment which always supports inner most functions having access to its parent function. And so thinking about heridity where a parent (outer most function) gives info to child it means child has access to those genes and parent wont have access to childs gene
            */
=======
           because it is within the same lexical environment which always supports inner most functions having access to its parent function. And so thinking about heridity where a parent (outer most function) gives info to child it means child has access to those genes and parent wont have access to childs gene
           */
>>>>>>> 4870e8ae72fe30503e01169ba21981f046be1260
// Explanation:

const external = "I'm outside the function";

function myFunction() {
     console.log(external);
     const internal = "Hello! I'm inside myFunction!";

     function nestedFunction() {
          console.log(internal);
     }
     nestedFunction();
}
myFunction();
