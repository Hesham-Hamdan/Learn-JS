let num = document.querySelector('[type="number"]'),
    tex = document.querySelector('[type="text"]'),
    tp = document.querySelector('[name="type"]'),
    crt = document.querySelector('[type="submit"]'),
    res = document.querySelector('.results');

crt.onclick = function (e) {
    e.preventDefault();
    res.textContent = '';
    for (i = 0; i < num.value; i++) {
        res.appendChild(document.createElement(`${tp.value}`)).appendChild(document.createTextNode(`${tex.value}`));
        document.querySelectorAll('.results div')[i].className = `box`;
        document.querySelectorAll('.results div')[i].title = "Element";
        document.querySelectorAll('.results div')[i].id = `id-${i + 1}`;
    }
}


