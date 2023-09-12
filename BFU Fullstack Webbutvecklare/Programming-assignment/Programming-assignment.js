/*
This is the JavaScript file for the programming assignment.
Write your code answers within each function. You can test
your answers by using the command "npm test" in the terminal.
*/

/* 
IMPORTANT!!
When you start doing these assignments, navigate to the assignment folder named 
"Programming-assignment" in your VS Code terminal and write the command "npm install"!
This will load the NPM package that is used for testing your code.
*/



/*
Task 1. You are hired as a developer to help Max's Pizzeria to create a website
for the pizzeria. Max wants to sell his pizza's on the website and for the
first thing you should create a function called "priceCalculator" that
takes in the prices of a order as an array, loops through the array
and sums the prices together. At the end the function should return the
total order price.

Hint: You can use arrayName.length to get the amount of elements in the
      array called "arrayName". Just remember that the indexing starts
      from 0, so array length is always 1 bigger than the last index.
*/

function priceCalculator(orderPrices) {
    let total = 0;

    return total;
}

/*
Task 2. Max wants to keep tract of how many pizzas he is selling and for this he
needs a function that can calculate how many pizzas he is selling per order.
Create a function called "pizzaCalculator" that takes in an array containing
pizza names and the function should calculate how many pizzas there are in a
order. At the end the function returns the amount of pizzas in the order.
*/

function pizzaCalculator(order) {
    return 0;
}


/*
Task 3. Max wants to have a special offer, where if you order four or more pizzas,
you get the cheapest pizza for free. Create a function called "removeCheapest"
that will take in an array that contains order prices and finds the cheapest
price and removes it from the total prices of the order. In the end the
function will return the price of the order and the cheapest price.
*/

function removeCheapest(orderPrices) {
    let total = 0;
    let cheapest = Infinity;

    // Don't change the return statement
    return [total - cheapest, cheapest];
}


/*
Task 4. Max wants to make it easy to order with friends and for this he needs a
function that can combine two orders to one. The function takes in two arrays
that contain pizza names. The function called "combineOrders" will create a
new array called "combinedOrder" and combines the two orders to this new array.
At the end the function will return the new array.

Hint: You can use arrayName.push(value) to add values to the end of an array.
      The example would add "value" to the end of an array called "arrayName".
*/

function combineOrders(order1, order2) {
    let combinedOrder = [];

    return combinedOrder;
}


/*
Task 5. Max wants to sell "Choose your toppings" pizzas in his pizzeria, but he
noticed that customers try to order toppings that are not available at
the pizzeria. Max wants you to create a function called "checkTopping" that
checks if a topping is available or not. The function takes in the ordered
topping and an array of available toppings and checks if the ordered topping
is included in the available toppings. If it is the function will return
"Topping available" and if the topping is not available, the function will
return "Topping not available".
*/

function checkTopping(topping, availableToppings) {
    let toppingAvailable = false;

    // Don't change these!
    if (toppingAvailable) {
        return "Topping available";
    } else {
        return "Topping not available";
    }
}


/*
Task 6. Max wants to price the "Choose your toppings" pizzas depending on what
toppings the customers choose. Every pizza starts with the price of 9 and
cheaper toppings cost 1 extra and expensive toppings cost 2 extra. Max wants
you to create a function called "customPizzaPrice" that can calculate a pizza
price depending on the toppings. The function takes in an array of toppings,
an array of cheap toppings and an array of expensive toppings. The function
will loop through the chosen toppings and check if they are cheap or expensive
and update the pizza price accordingly. At the end the function will return the
pizza price.

Hint: You can nest loops so you can loop through different arrays at the same
      time. Nested loops work so that the inner loop will run through the whole
      loop while the the outer loop will go through one loop.
*/

function customPizzaPrice(toppings, cheapToppings, expensiveToppings) {
    let pizzaPrice = 9;

    return pizzaPrice;
}


/*
Task 7. Max has a problem with his ordering system, where the pizzas are added
to the queue in the reversed order and he would want you to correct this.
Write a function called "reversePizzasToNewArray" that takes in an array
with the pizzas in the wrong order and the function will create a new
array called "reversedQueue", reverse the array order to the new array and
return the new array.
*/

function reversePizzasToNewArray(queue) {
    
}


/*
Task 8. Max liked how you solved the reversed queue problem, but his cousin who
did a little bit of coding in highschool managed to convince Max that the
function should just reverse the existing array. Max gives you these new
requirements, so change the task 9. function so that it reverses the incoming
array and returns it.

Hint: Think about which indexes in the array are connected when you reverse
the array and think about how the reversing differs when there are even or 
odd number of array elements.
*/

function reversePizzasInExistingArray(queue) {

}

module.exports = { priceCalculator, pizzaCalculator, removeCheapest, combineOrders, checkTopping, customPizzaPrice, reversePizzasToNewArray, reversePizzasInExistingArray }