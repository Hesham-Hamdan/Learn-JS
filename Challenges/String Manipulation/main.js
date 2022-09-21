let a = "Elzero Web School";


// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(2, 4).charAt(0).toUpperCase() + a.slice(3, 6)); // Zero


// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH


// Return Array
console.log(a.slice(0, 6).split()); // ["Elzero"]


// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 7)}${a.substr(-6 , 6)}`); // Elzero School



// Solution Must Be Dynamic Because String May Changes
console.log(a[0].toLowerCase() + a.slice(1 , -1).toUpperCase() + a.substr(-1 , 1)); // eLZERO WEB SCHOOl