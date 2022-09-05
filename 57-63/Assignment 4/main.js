function checkStatus(a, b, c) {
  // Your Code Here
  let d = [a, b, c],
      name = '' ,
      age = 1 ,
      h = '';
  for (i = 0; i < d.length; i++) {
    typeof d[i] === 'string' ?
      name = d[i] :
    typeof d[i] === 'number' ?
      age = d[i] :
    d[i] === true ?
      h = 'You Are Available For Hire' :
      h = 'You Are Not Available For Hire';
  }
  console.log(`Hello ${name}, Your Age is ${age}, ${h}`)
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
