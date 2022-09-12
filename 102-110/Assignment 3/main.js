let myDiv = document.getElementsByTagName('div')[0];

function countdown () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML == '0'){
        clearInterval(counter);
    }
}

let counter = setInterval(countdown, 500);
