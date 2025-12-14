/**
 * Challenge 4: Does my number look big in this?
 * 
 * A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
 * 
 * For example, take 153 (3 digits), which is narcissistic:
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * 
 * and 1652 (4 digits), which isn't:
 * 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
 * 
 * The Challenge:
 * Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
 * This may be True and False in your language, e.g. PHP.
 * Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
 */


function narcissistic(value) {

    // LET total be zero;

    // Convert the value to a STRING
    // FOR LOOP the STRING
        // Every iteration i power the string length
        // ADD to Total

    // IF the number is a narcissistic number
        // RETURN TRUE

    // ELSE number is not narcissistic
        // RETUR FALSE


    let total = 0;
    const num = String(value);

    for (let i = 0; i < num.length; i++) {
        total += Math.pow(Number(num[i]), num.length);
    }


    if (total === value){
        return true;
    }
    else{
        return false;
    }
}

/**
 * How I feel about the problem:  
 * 
 * I felt really good at solving this one. After just learning about how integers needed to be converted to a string, I knew immediately that if I wanted to grab each position of the integer, it needed to be a string first. And after totaling all the numbers up, it just needed to be compared to the original value. 
 */