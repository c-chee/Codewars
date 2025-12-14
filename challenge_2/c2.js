/**
 * Challege 2: Counting Duplicates
 * 
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 * 
 * Example
 * "abcde" -> 0 # no characters repeats more than once
 * "aabbcde" -> 2 # 'a' and 'b'
 * "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * "indivisibility" -> 1 # 'i' occurs six times
 * "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * "aA11" -> 2 # 'a' and '1'
 * "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function duplicateCount(text) {
    //...
    // Take the given string and compare each letters or numbers
    // Check for duplicates

    // FOR LOOP that interates the whole length of the STRING
    // For each value check if the remaining string contains the letter or number

        // FOR LOOP to compare the values

        // Array to hold duplicates, and the number of times it duplicates

    text = text.toLowerCase();
    let duplicates = 0;

    for (let i = 0; i < text.length; i++) {
    let count = 0;

        if (text.indexOf(text[i]) !== i) continue;

        for (let j = 0; j < text.length; j++) {
            if (text[i] === text[j]) {
                count++;
            }
        }

        if (count > 1) {
            duplicates++;
        }
    }

    return duplicates;
}


/**
 * How I feel about the problem:  
 * 
 * Compared to the first challenge, this one was very hard for me. I felt like I knew what the logic needed to solve the problem, but I struggled to execute it. I had to make a lot of trial and error testing with this challenge. I just knew it needed to compare 2 values or characters and to hold a count for what was duplicated. This took me a while to solve, so for the next challenge, I plan to switch back to beginner. 
 */