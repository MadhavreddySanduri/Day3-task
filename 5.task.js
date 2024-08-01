//Return all the palindromes in an array

function findPalindromes(arr) {
    return arr.filter(word => {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
    });
    }
    
    const words = ["level", "world", "radar", "hello", "madam"];
    const palindromes = findPalindromes(words);
    console.log(palindromes); // Output: ["level", "radar", "madam"]
    