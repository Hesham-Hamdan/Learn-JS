let myDiv = document.getElementsByTagName('div')[0];

function countdown () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML == '0'){
        location.href = 'https://elzero.org/';
    }
}

let counter = setInterval(countdown, 500);
