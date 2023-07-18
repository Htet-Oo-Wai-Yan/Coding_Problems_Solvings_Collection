// ake an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

let arr1 = ['Hello', 'Goodbye', 'Hello Again'];
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr3 = [['Goodbye'], {'Great': 'Job'}];

function removeEveryOther(arr){
    let final = [];
    for(let i = 0; i < arr.length; i += 2){
      final.push(arr[i]);
    }
    
    return final;
  }

  console.log(removeEveryOther(arr1));
  console.log(removeEveryOther(arr2));
  console.log(removeEveryOther(arr3));