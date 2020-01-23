/** Name: Dallas Sloan
 *  Date Jan 22, 2016
 *  js_3.js
 * Write a function heeHaw() that takes any number as an input and prints the numbers from 1 to that number to the
 * console, using the same rules as the Chapter 2 exercise. If the user passes in an invalid parameter, print an error
 * message. Write multiple statements to test your function. Make sure that your test output is clear.
 */

function heeHaw(number) {
    if (isNaN(number)){
        alert("Please enter a valid number");
    }
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Hee Haw!")
        } else if (i % 3 === 0) {
            console.log("Hee!");
        } else if (i % 5 === 0) {
            console.log("Haw!");
        } else {
            console.log(i);
        }
    }
}
console.log("Test #1");
heeHaw(50);

console.log("Test #2");
heeHaw(15);

console.log("Test #3");
heeHaw(50);

console.log("Test #4");
heeHaw("Dallas");




