///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

// //CODE HERE

const summedNums = cart.map(num => num.price).reduce((x, y) => x + y)

console.log(summedNums)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE


const calculateFinalPrice = (cartTotal, couponValue, tax) => ((cartTotal * (1 + tax)) - couponValue)
console.log (calculateFinalPrice(10,1,.05))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer first, last name, and email address for order tracking reasons
    Food ordered for order tracking reasons
    Food cost for checkout cart reasons

    Customer info will be in string form so they can easily input their information
    ordered food will also be a string for easy backend tracking
    food cost will be a number value so it can be totalled at the end cart easier

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    'firstName': 'Emily',
    'lastName': 'Rand',
    'emailAddress': 'emilyrandom@gmail.com',
    'foodOrdered': 'Large Pizza',
    foodCost: 25
}