let myString = "EElllzzzzzzzeroo";


let zero = myString.split('').filter(function(ele, ind, arr){
    return (ele !== arr[ind+1]);
}).reduce(function (curr, index) {
    return curr + index;
}) 

console.log(zero);
// Elzero