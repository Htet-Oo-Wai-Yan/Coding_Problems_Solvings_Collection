// DESCRIPTION:
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

let list = [1,2,4,3,6];
let item1 = 4;
let item2 = 5;


function itemInclude(arr,item){
    let check = arr.includes(item);
    return arr.length < 0 ? false : check;
}

console.log(itemInclude(list,item1));//true
console.log(itemInclude(list,item2));//false
