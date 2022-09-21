let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// First

my.reverse().splice(zero, counter - (counter ** zero));
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];


// Second 

console.log(my.slice((counter ** zero), -(counter ** zero))); // ["Elham", "Mazero"]


// Third 

console.log(my[(counter ** zero)].slice(zero, counter - (counter ** zero)).concat(my[counter - (counter ** zero)].slice(counter - (counter ** zero)))); // "Elzero"


// Fourth

console.log(my[counter - (counter ** zero)].slice(counter + (counter ** zero), - (counter ** zero)) + my[counter - (counter ** zero)].slice(- (counter ** zero)).toUpperCase()); // "rO"