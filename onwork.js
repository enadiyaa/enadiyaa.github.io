const collection = [
    './img/onwork1.jpg',
    './img/onwork3.JPG',
    './img/onwork4.JPG',
    './img/onwork5.JPG',
    
   

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