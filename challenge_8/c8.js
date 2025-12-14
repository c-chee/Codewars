/**
 * Challange 8: Ones and Zeros
 * 
 * Given an array of ones and zeroes, convert the equivalent binary value to an integer.
 * 
 * Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
 * 
 * Examples:
 * Testing: [0, 0, 0, 1] ==> 1
 * Testing: [0, 0, 1, 0] ==> 2
 * Testing: [0, 1, 0, 1] ==> 5
 * Testing: [1, 0, 0, 1] ==> 9
 * Testing: [0, 0, 1, 0] ==> 2
 * Testing: [0, 1, 1, 0] ==> 6
 * Testing: [1, 1, 1, 1] ==> 15
 * Testing: [1, 0, 1, 1] ==> 11

However, the arrays can have varying lengths, not just limited to 4.
 */

const binaryArrayToNumber = arr => {
    // LET total to hold the value
    //If the array length his 4
        // If 1 is in the 4th position or length-1
            // ADD 1 to total
        // Else if 1 is in thhe 3rd
             // ADD 2 to total
        // Else if 1 is in thhe 3nd
             // ADD 4 to total
        // Else 1 is in thhe 1st
             // ADD 16 to total

    // --- Original Solution---
    // let total = 0;

    // if (arr.length === 4) {
    //     if (arr[arr.length-1]) total += 1;
    //     if (arr[arr.length-2]) total += 2;
    //     if (arr[arr.length-3]) total += 4;
    //     if (arr[arr.length-4]) total += 8;
    // }

    // return total;

    let total = 0;
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        if (arr[i]) {
            total += Math.pow(2, len - 1 - i);
        }
    }

    return total;
};

/**
 * How I feel about the problem:  
 * 
 * I think generally the problem was not hard if I left it at taking only arrays with the length of 4. Thinking separately of how to make this work with any size array and work backwards was the most difficult part. I know that it is calcualted by 2 power its position. So if it could calculate the number based on its postion, then I could find the total. If I had to calcualte the how fast it took me to get teh orignal solution is 5min but the revised version took me at least 15min. And seeing the other solution afterwards made me feel that I overcompliated it. 
 */