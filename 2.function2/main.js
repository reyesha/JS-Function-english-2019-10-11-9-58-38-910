function palindrome(message){
  var lowerCase = message.toLowerCase();
  var reverse = lowerCase.split('').reverse().join(''); 
  return reverse === lowerCase;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true