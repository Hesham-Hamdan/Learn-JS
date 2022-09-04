let start = 0;
let swappedName = "elZerO",
    z = [];

for (i = start; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toUpperCase()) {
        z.push(swappedName[i].toLowerCase());
    } else {
        z.push(swappedName[i].toUpperCase());
    }
    
}
console.log(z.join(''));
// Output
"ELzERo"