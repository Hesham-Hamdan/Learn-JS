let nums = [2, 12, 11, 5, 10, 1, 99];

let mix = nums.reduce(function(pre, curr) {
    return curr % 2 ==0 ? pre * curr : pre + curr;
}, 1)

console.log(mix);
// 500