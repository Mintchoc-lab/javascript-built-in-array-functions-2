function isPalindrome(string) {
  // Start coding here

  const cleanText = string.trim().toLowerCase();
  return cleanText ===  cleanText.split("").reverse().join("");

}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false

