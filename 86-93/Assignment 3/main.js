let myDiv = document.getElementsByClassName("result")[0];
let myInput = document.querySelector("[name = 'dollar']");


myInput.onkeyup = myInput.onchange = function () {
    myInput.value == '' ? myDiv.innerHTML = `{0} USD Dollar = {0} Egyptian Pound` :
    myInput.value >= 0 ? myDiv.innerHTML = `{${myInput.value}} USD Dollar = {${(myInput.value * 15.6).toFixed(2)}} Egyptian Pound` :
    myDiv.innerHTML = 'Do not type negative number';
};