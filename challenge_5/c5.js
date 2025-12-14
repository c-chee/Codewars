/**
 * Challenge 5: Detect Pangram
 * 
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 * 
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */


function isPangram(string){
    // CONST alpahbet
    // CONST new stringn to hold string but LOWERCASED

    // FOR LOOP every letter in the new string 
        // Compare if the new string CONTAINS alphabet

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const newString = string.toLowerCase();


    for (let i = 0; i < alphabet.length; i++) {
        if (!newString.includes(alphabet[i])) {
            return false;
        }
    }

    return true;
}

/**
 * How I feel about the problem:  
 * 
 * This problem was simpler compared to the previous challenges. I only needed to check whether the string given contains the alphabet.  I figure if I wrote out the alphabet in an array, which was the most tedious part, and compared it to the string. If there happens to be a letter that was not found, it would make the whole string false, and if it were to go through eh whole alphabet without any issues, that means it contains every letter of the alphabet, so true.
 */