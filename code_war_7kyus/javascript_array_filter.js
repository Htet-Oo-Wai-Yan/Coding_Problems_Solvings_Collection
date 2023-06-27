// avaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

let arr1 = [1,2,3,4,5];
let arr2 = [1,2];
let arr3 = [12,13,15];
let arr4 = [13,15];


function getEvenNumbers(numbersArray){
    return numbersArray.filter(word => word % 2 == 0);
  }

  console.log(getEvenNumbers(arr1));
  console.log(getEvenNumbers(arr2));
  console.log(getEvenNumbers(arr3));
  console.log(getEvenNumbers(arr4));
