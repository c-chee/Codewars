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
    text = text.toLowerCase();
    const duplicates = [];

    for (let i = 0; i < text.length; i++) {
        let total = 0;

        for (let j = 0; j < text.length; j++) {
            if (text[i] === text[j]) {
            total++;
            }
        }

        if (total > 2) {
            duplicates.push(text[i], total);
        }
    }

    return ``;
}

duplicateCount('heLlo')

/**
 * How I feel about the problem:  
 * 
 * Compared to the first challenge, this one was very hard for me. I feel like I knew what the logic needed to be to solve the problem but I st5ruggled to execute it. I think if the next challnege is just as hard I will switch to the beginer difficulty level.
 */