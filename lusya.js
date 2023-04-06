const collection = [
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg'

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



const collection2 = [
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg'

]
let currentPhoto2 = 0;
let img2 = document.getElementById('imgjs');

function changePhoto2() {
    currentPhoto2 += 1;
    if (currentPhoto2 == collection2.length) {
        currentPhoto2 = 0;
    }

    img2.src = collection2[currentPhoto2];
}


setInterval(changePhoto2, 6000);

function handleclick() {
    const page1 = document.getElementById("page1")
    const page2 = document.getElementById("page2")
    page1.style.transform = "translateX(-100%)"
    page2.style.transform = "translateX(0)"


}

function handleclick2() {
    const page1 = document.getElementById("page1")
    const page2 = document.getElementById("page2")
    page1.style.transform = "translateX(0)"
    page2.style.transform = "translateX(100%)"
    

}

