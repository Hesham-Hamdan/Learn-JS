let comp = new Date ();
comp.setDate(0);
let months = ['January','February','March','April','May','June','july','August','Septemper','October','November','December'],
    lastMonth = months[comp.getMonth()],
    lastDay = comp.getDate();

console.log(comp);
console.log(`Previous Month Is ${lastMonth} And Last Day Is ${lastDay}`);

// Needed Output

"Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
"Previous Month Is April And Last Day Is 30"