$(document).ready(function() {
  var phrase = prompt("Enter a word");
  phrase = phrase.toLowerCase();
  var checkPhrase = phrase.split("");
  checkPhrase = checkPhrase.reverse();
  checkPhrase = checkPhrase.join('');
  var isPalindrome = function(word1, word2) {
    if (word1 === word2) {
      alert("A palindrome");
    } else {
      alert("Not a palindrome");
    }
  };

isPalindrome(phrase, checkPhrase);
});
