/**
 * Challenge 1: Who likes it?
 * 
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
 * We want to create the text that should be displayed next to such an item.
 * 
 * Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
 * 
 * []                                -->  "no one likes this"
 * ["Peter"]                         -->  "Peter likes this"
 * ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 * 
 * Note: For 4 or more names, the number in "and 2 others" simply increases.
 */

function likes(names) {

    // IF there is only one name
        // CONSOLE 'name likes this'
    // ELSE IF there are two names
        // CONSOLE 'name1 and name2 likes this'
    // ELSE IF there are three names
        // CONSOLE 'name1, name2, and name3 like this'
    // ELSE IF there are 4 or more names
        // CONSOLE 'name1, name2 and array length minus two others like this'
    // ELSE ARRAY is empty
        // CONSOLE 'no one likes this'

    if(names.length === 1){
        return `${names[0]} likes this`;
    }
    else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`;
    }
    else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    }
    else if(names.length >= 4){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
    else{
        return 'no one likes this';
    }
}

/**
 * How I feel about the problem:  
 * 
 * This problem was fun to solve! Since it was the first challenge, I was unsure to choose an intermediate level problem because I thought it might be too difficult. At first it did seem complicated because of the different return values needed for the different scenarios. In my mind I was overthinking it, trying to find a one size fits all solution that would only require a single return. But once I broke it down into pseudocode, I thought a simpler approach would work just as well and that it would be easier to write out. So I used IF ELSE statements to handle each case, though I think I could have used switch cases as an alternative.
 */