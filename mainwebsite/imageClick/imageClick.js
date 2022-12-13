
const images = ["../img/paper-1.jpg"
,"../img/paper-2.jpg",
"../img/paper-3.jpg"]

let index = 1;



function changeImage (event){
    event.target.style.background = "url(" + images[index] + ")";
    event.target.style.backgroundSize = "100%";
    event.target.style.backgroundRepeat = "no-repeat";
    event.target.style.backgroundPosition = "center";
    
    index++;
    if (index === images.length) {
        index = 0;
    }
}

document.getElementById("img-click-block").addEventListener('click', changeImage)