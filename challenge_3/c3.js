/**
 * Challenge 3: Sum of two lowest positive integers
 * 
 * Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
 * No floats or non-positive integers will be passed.
 * 
 * For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
 * 
 * [10, 343445353, 3453445, 3453545353453] should return 3453455.
 */


function sumTwoSmallestNumbers(numbers) {  
    // Declare an ARRAY to store the sorted NUMBERS
    // Use SORT METHOD
    // Assuming the numbers are now in least to greatest
    // ADD the first position 0 and second position 1

    const sortedList = numbers.sort(function(a,b){
        return a-b;                       
    });
    
    return sortedList[0] + sortedList[1];

}

/**
 * How I feel about the problem:  
 * 
 * I would say this problem was a medium level for me. I understood what needed to be done and I knew you could use the sort method to re-arange the numbers to be least to greatest. The hardest part for me was writing the sort correctly. Originally I thought it didn't need to take any parameters but I got an error. Which was where I figured, okay it does need one. Overall, I felt like this was good practice. 
 */