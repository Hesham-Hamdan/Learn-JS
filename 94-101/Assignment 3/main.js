document.getElementsByTagName('p')[0].remove();

myDiv = document.getElementsByClassName("our-element")[0];
divBefore = document.createElement('div');
divAfter = document.createElement('div');

divBefore.className = 'start';
divBefore.title = "Start Element";
divBefore.setAttribute('data-value',"Start");
divBefore.textContent = 'Start';

divAfter.className = 'end';
divAfter.title = "End Element";
divAfter.setAttribute('data-value',"End");
divAfter.textContent = 'End';

myDiv.before(divBefore);
myDiv.after(divAfter);
