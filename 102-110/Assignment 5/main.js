let myDiv = document.getElementsByTagName('div')[0];

function countdown () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML == '5') {
        window.open("https://elzero.org",'_blank', 'width=200, height=300, left=700, top=30')
    }
    if (myDiv.innerHTML == '0'){
        clearInterval(counter);
    }
}

let counter = setInterval(countdown, 500);
