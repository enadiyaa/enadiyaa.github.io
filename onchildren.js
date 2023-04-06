const collection = [
    './img/onchildren1.jpg',
    './img/onchildren3.JPG',
    './img/onchildren2.JPG',
    './img/onchildren4.JPG',
    './img/onchildren5.JPG',
   

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