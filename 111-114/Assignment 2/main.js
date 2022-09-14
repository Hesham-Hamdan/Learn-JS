let user =document.querySelector('[type = text]'),
    num =document.querySelector('[type = number]'),
    pass =document.querySelector('[type = password]'),
    sport = document.querySelector('[name = sport');


function store () {
    user.onkeyup = function () {
        window.sessionStorage.user = user.value;
    }
    num.onkeyup = function () {
        window.sessionStorage.num = num.value;
    }
    pass.onkeyup = function () {
        window.sessionStorage.pass = pass.value;
    }
    sport.onclick = function () {
        window.sessionStorage.sport = sport.value;
    }
}

function show () {
    user.value = window.sessionStorage.getItem('user') ;
    num.value = window.sessionStorage.getItem('num')  ;
    pass.value = window.sessionStorage.getItem('pass');
    sport.value = window.sessionStorage.getItem('sport');
    window.onclose = function () {
        window.sessionStorage.clear()
    }

}
store ();
show ();

