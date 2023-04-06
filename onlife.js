const collection = [
    './img/onlife6.jpg',
    './img/onlife.jpg',
    './img/onlife7.jpg',
    './img/onlife1.jpg',
    './img/onlife2.jpg',
    './img/onlife8.jpg',
   

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