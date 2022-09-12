function show (){

  let popup = document.createElement('div'),
      clos = document.createElement('span'),
      heading = document.createElement('h3'),
      para = document.createElement('p');

  clos.appendChild(document.createTextNode('x'));
  heading.appendChild(document.createTextNode('Welcome'));
  para.appendChild(document.createTextNode('Welcome To Elzero Web School'));
  popup.appendChild(heading);
  popup.appendChild(para);
  popup.appendChild(clos);
  document.body.appendChild(popup);
  popup.style.display = 'none';

  let counter = setTimeout(function () {
    popup.style.display = 'block';
    clos.onclick = function () {
      popup.remove();
    }
  },5000);
}

show();




