function ageInTime(theAge) {
  // Your Code Here
  if (theAge <= 10 || theAge >= 100) {
    console.log('Age Out Of Range');
  } else {
    console.log(`Your Age Is ${theAge * 12} Months`);
    console.log(`Your Age Is ${(theAge * 365 / 7).toFixed(0)} Weeks`);
    console.log(`Your Age Is ${theAge * 365 } Days`);
    console.log(`Your Age Is ${theAge * 365 * 24} Hours`);
    console.log(`Your Age Is ${theAge * 365 * 24 * 60 } Minutes`);
    console.log(`Your Age Is ${theAge * 365 * 24 * 60 * 60} Seconds`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months