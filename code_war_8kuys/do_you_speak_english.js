// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

let str1 = 'english';
let str2 = 'egnlish';
let str3 = "abcEnglishdef";

function spEng(sentence){
    let str = sentence.toLowerCase();
    return str.includes('english');
  };

  console.log(spEng(str1));//true
  console.log(spEng(str2));//false
  console.log(spEng(str3));//true