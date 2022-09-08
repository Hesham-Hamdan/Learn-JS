let images = document.getElementsByTagName('img');

for (i=0; i < images.length; i++) {
    images[i].setAttribute('src', "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    images[i].setAttribute('alt', 'Elzero Logo');
}