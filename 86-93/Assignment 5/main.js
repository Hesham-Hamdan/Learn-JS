let images = document.images;

for (i = 0; i < images.length; i++) {
    images[i].hasAttribute('alt') ? images[i].alt = 'Old': images[i].alt = 'Elzero New';
}

