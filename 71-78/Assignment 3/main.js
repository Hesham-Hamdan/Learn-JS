let myArray = ["E", "l", "z", ["e", "r"], "o"];


let zero = myArray.reduce(function(pre, curr) {
    return Array.isArray(curr) ? pre + curr.join(''): pre+curr; 
})

console.log(zero);
// Elzero