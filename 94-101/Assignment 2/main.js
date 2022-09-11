let add = document.querySelector('.classes-to-add'),
    rem = document.querySelector('.classes-to-remove'),
    current = document.querySelector('.current'),
    myDiv = document.querySelector('.classes-list div'),
    inputs = document.querySelectorAll('input');

add.onblur = function () {
  let addValue = add.value.split(' ');
  if (add.value !== '') {
      for (i = 0; i < addValue.length; i++) {
          current.classList.add(addValue[i].toLowerCase())
      }
  }
  add.value= '';
}


rem.onblur = function () {
  let remValue = rem.value.split(' ');
  if (rem.value !== '') {
      for (i = 0; i < remValue.length; i++) {
          current.classList.remove(remValue[i].toLowerCase())
      }
  }
  rem.value ='';
}


for (i = 0; i < inputs.length; i++) {
    let list = current.classList; 
    inputs[i].addEventListener ('blur', function () {
      myDiv.innerHTML= '';
      if (list.length !== 0) {
          for (i = 0; i < list.length; i++) {
            myDiv.appendChild(document.createElement('span')).appendChild(document.createTextNode(Array.from(list).sort()[i]));
          }
      } else {
        myDiv.appendChild(document.createTextNode('No Classes To Show'));
      }
    })
}