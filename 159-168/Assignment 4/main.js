let myBirthday1 = new Date('10-25-1982'),
    myBirthday2 = new Date(),
    myBirthday3 = new Date('1982-10-25T00:00:00');
myBirthday2.setFullYear(1982,9,25);
myBirthday2.setHours(0,0,0);




console.log(myBirthday1);
console.log(myBirthday2);
console.log(myBirthday3);

// Needed Output

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"