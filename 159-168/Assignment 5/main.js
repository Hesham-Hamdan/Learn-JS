let before = performance.now();
for (i=1; i<99999+1; i++ ) {
    console.log(i);
}
let after = performance.now();

console.log(`Loop Took ${Math.trunc(after - before)} Milliseconds.`)


// Needed Output

"Loop Took 1921 Milliseconds."