// first solution

console.log(document.getElementsByTagName('div')[0].innerText.slice(6));

//second solution

let span = document.getElementsByTagName('span')[0],
    k = span.nextSibling.nextSibling.nextSibling;
console.log(k.textContent.trim());


