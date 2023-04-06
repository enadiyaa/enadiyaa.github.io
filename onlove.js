const collection = [
    './img/love1.jpg',
    './img/onlove34.jpg',
    './img/onlove35.jpg',
    './img/onlove3456.jpg',
   

]
let currentPhoto = 0;
let img = document.getElementById('img');

function changePhoto() {
    currentPhoto = currentPhoto + 1;
    if (currentPhoto == collection.length) {
        currentPhoto = 0;
    }

    img.src = collection[currentPhoto];
}

changePhoto();

setInterval(changePhoto, 6000);