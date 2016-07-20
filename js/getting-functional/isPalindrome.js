// isPalindrome(string)
// Checks if a string is a palindrome, and returns true or false

// Example Input

var str = 'racecar';

// Example Output

function isPali(word) {
  for (var i = 0; i < word.length/2; i++) {
    if (word[i] !== word[word.length-1-i]) {
      return false
    }
  }
  return true
}

console.log( isPali(str) );
