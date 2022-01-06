/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let vowelsCount = 0;
  let strLen = str.length;

  function isVowel(str) {
    if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u") {
      return true;
    }
    return false;
  }

  for (let i = 0; i < strLen; i++) {
    let char = str.charAt(i);
    if (isVowel(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
