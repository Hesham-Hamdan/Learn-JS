let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];


let zero = mix.map(function(ele) {
    return typeof ele === 'number' ? '': ele;
}).reduce(function(pre, curr){
    return pre + curr;
});

console.log(zero);

// Elzero