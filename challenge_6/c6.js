/**
 * Challange 6: Sum of Digits / Digital Root
 * 
 * Digital root is the recursive sum of all the digits in a number.
 * 
 * Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 * 
 * Examples:
 *  16  -->  1 + 6 = 7
 * 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
 * 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
 * 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

function digitalRoot(n) {
    // Convert the number to a STRING
    // WHILE the STRING length is more than 1
        // Total be 0
        // SPLIT the String to individual numbers
            // For EACH number add to total
        // LOOP and add every number together

    // Chnge string back to a NUMBER

        let str = String(n);

        while (str.length > 1) {
            let total = 0;

            str.split('').forEach(digit => {
                total += Number(digit);
            });

            str = String(total);
        }

        return Number(str);

}

/**
 * How I feel about the problem:  
 * 
 * This challenge wasn't too bad. I think knowing that I needed to convert numbers to a string to manipulate them was a good start. Along with learning that I can split a string up into individual strings by its characters was also very helpful. I am getting the hint that it’ very helpful to know some of these built-in JS methods. I even saw a solution using the .reduce. It’s crazy to see how simple the solutions can be.
 */