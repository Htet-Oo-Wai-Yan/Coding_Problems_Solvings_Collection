// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

let count1 = 0;
let count2 = 1;
let count3 = 3;
let count4 = 12;

var countSheep = function (num){
    let sheeps = '';
    for(let i = 1; i <= num; i++){
      sheeps += `${i} sheep...`;
    }
    return sheeps;
  }

  console.log(countSheep(count1));
  console.log(countSheep(count2));
  console.log(countSheep(count3));
  console.log(countSheep(count4));

