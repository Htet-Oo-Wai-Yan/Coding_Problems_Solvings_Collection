// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

let row1 = [80];
let row2 = [39,84,74,18,59,72,35,61];
let row3 = [0,1,0];
let row4 = [70,58,75,34,91];

function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    
    for(let i = 0; i < array.length; i++){
      if(i % 2 == 0) team1 += array[i];
      else team2 += array[i];
    }
    
    return array.length < 2 ? [team1,0] : [team1,team2];
    
  }

  console.log(rowWeights(row1));//[80,0]
  console.log(rowWeights(row2));//[207,235]
  console.log(rowWeights(row3));//[0,1]
  console.log(rowWeights(row4));//[236,92]