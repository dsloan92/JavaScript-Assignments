/** Name: Dallas Sloan
 *  Date Jan 15, 2016
 *  js_2.js
 * Hee Haw! Write a console program that prints the numbers from 1 to 100 to
 * the console. For any number evenly divisible by 3, print “Hee!” instead of the
 * number. For any number evenly divisible by 5, print
 * “Haw!” instead of the
 * number. For any number evenly divisible by both 3
 * and 5, print “Hee Haw!”
 * instead of the number.
 * Make sure that exclamation points are displayed as
 * shown. Sample output on the right:
 */

for (let i = 1; i <= 100; i++){
    if (i%3 === 0 && i%5 === 0){
        console.log("Hee Haw!")
    }
    else if (i%3 === 0){
        console.log("Hee!" );
    }
    else if (i%5 === 0){
        console.log("Haw!");
    }
    else{
        console.log(i);
    }

}
