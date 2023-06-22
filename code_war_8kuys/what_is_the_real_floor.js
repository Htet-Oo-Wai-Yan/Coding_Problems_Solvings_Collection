// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0 
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

let floor1 = 1;
let floor2 = 0;
let floor3 = 5;
let floor4 = 15;
let floor5 = -3;

function getRealFloor(n) {
    switch (true){
        case(n < 0):
          return n;
          break;
        case(n == 0):
          return 0;
          break;
        case(n < 13):
          return n - 1;
          break;
        case(n > 13):
          return n - 2;
          break;
        default:
          return null;
    }
  }

  console.log(getRealFloor(floor1));
  console.log(getRealFloor(floor2));
  console.log(getRealFloor(floor3));
  console.log(getRealFloor(floor4));
  console.log(getRealFloor(floor5));
