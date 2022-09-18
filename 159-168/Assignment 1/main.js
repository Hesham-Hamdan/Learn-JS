let myBirthDay = new Date('10-25-1982'),
    diff = new Date() - myBirthDay,
    secs= diff / 1000 ,
    mins = secs / 60 ,
    hours = mins / 60.
    days  = hours /24 ,
    months = days / 30,
    years = days / 365;

console.log(secs.toFixed(0) + ' Seconds');
console.log(mins.toFixed(0) + ' Minutes');
console.log(hours.toFixed(0) + ' Hours');
console.log(days.toFixed(0) + ' Days');
console.log(months.toFixed(0) + ' Months');
console.log(years.toFixed(0) + ' Years');



// Needed Output

"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"