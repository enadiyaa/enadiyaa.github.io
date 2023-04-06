const collection = [
    './img/childhoodsecond.jpg',
    './img/childhood1.jpg',
    './img/childhood2.jpg',
    './img/childhood3.jpg',
    './img/childhood4.jpg',
   

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