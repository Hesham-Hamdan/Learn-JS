let family = document.querySelector('.font-family select'),
    color = document.querySelector('.font-color select'),
    size = document.querySelector('.font-size select'),
    text = document.querySelector('.text p');

function a () {
    family.onclick = function () {
        text.style.fontFamily = family.value ;
        window.localStorage.fontFamily = family.value;
    }
}
function b () {
    color.onclick = function () {
        text.style.color = color.value ;
        window.localStorage.color = color.value;
    }
}
function c () {
    size.onclick = function () {
        text.style.fontSize = size.value ;
        window.localStorage.fontSize = size.value;
    }
}

function d () {
    text.style.fontSize = size.value = window.localStorage.fontSize ;
    text.style.color = color.value = window.localStorage.color;
    text.style.fontFamily = family.value = window.localStorage.fontFamily;
}
a();
b();
c();
d();



