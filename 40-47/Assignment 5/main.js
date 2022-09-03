let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

// First one 
if (haystack.includes(needle)) {
    console.log('Found');
}


// Second one 
if (haystack.indexOf(needle) != -1) {
    console.log('Found');
}


// Third one 

if (haystack.lastIndexOf(needle) != -1) {
    console.log('Found');
}
