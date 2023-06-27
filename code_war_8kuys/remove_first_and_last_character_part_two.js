// 

let str1 = '1,2,3';
let str2 = 'A1,B2,C3,D4,E5';
let str3 = 'A1,B2';


function array(string) {
    let str = string.split(",").slice(1,-1).join(" ");
    return str || null;
  }
  
  console.log(array(str1));//2
  console.log(array(str2));//B2 C3 D4
  console.log(array(str3));//null
