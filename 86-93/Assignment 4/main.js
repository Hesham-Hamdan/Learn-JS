let myFirstDiv = document.querySelector('.one');
let mySecondDiv = document.querySelector('.two');
let firstText = myFirstDiv.innerHTML,
    firstTitle = myFirstDiv.title;

myFirstDiv.title = mySecondDiv.title;
mySecondDiv.title = firstTitle;

myFirstDiv.textContent = mySecondDiv.textContent;
mySecondDiv.textContent = `${firstText} ${myFirstDiv.className.length + myFirstDiv.className.indexOf(firstText)}`;

console.log(myFirstDiv);
console.log(mySecondDiv);