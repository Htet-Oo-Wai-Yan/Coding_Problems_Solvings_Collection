// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

let name1 = ['John', 'Smith'];
let city1 = 'Phoenix';
let state1 = 'Arizona';

let name2 = ['Franklin','Delano','Roosevelt'];
let city2 = 'Chicago';
let state2 = 'Illinois';


function sayHello( name, city, state ) {
    let userName = name.join(' ');
    return `Hello, ${userName}! Welcome to ${city}, ${state}!`;
  }

console.log(sayHello(name1,city1,state1));//Hello, John Smith! Welcome to Phoenix, Arizona!
console.log(sayHello(name2,city2,state2));//Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!



