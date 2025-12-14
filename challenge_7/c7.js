/**
 * Challange 7: Exes and Ohs
 * 
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 * 
 * Examples input/output:
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 */

function XO(str) {
    // Convert string to all LOWER case

    // LOOP through string 
        // X count
        // O count 

        // IF it contains X
            // ADD to X count

        //ElSE IF it contains O
            // ADD to O count

        // ELSE
            // IGNORE

        //Separate IF
        // IF X ad O equal
            // RETURN TRUE
        // ELSE
            // RETURN FALSE

    let xoStr = str.toLowerCase();
    let x = 0;
    let o = 0;

    for (let i = 0; i < xoStr.length; i++) {
        if (xoStr[i] === 'x') {
            x++;
        } else if (xoStr[i] === 'o') {
            o++;
        }
        else{}
    }

    return x === o;

}

/**
 * How I feel about the problem:  
 * 
 * This problem was easier, but it still took me at least 5min write out everything. I figured I needed to keep track of how many times the X’s and O’s appear in the string and compare them to each other. What tripped me up was the else statement and how to handle what to do if there was a character that was not an x or an o. Turns out it can be left empty. 
 */