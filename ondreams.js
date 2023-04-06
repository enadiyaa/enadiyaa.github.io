let isPlaying = false;
let audio = new Audio(); // Создаём новый элемент Audio
audio.src = './memos/ondreams.m4a'; // Указываем путь к звуку "клика"


function soundHandler(event) {
    if (isPlaying == true) {
        audio.pause();
        isPlaying = false;
        event.target.src = "/img/triangle.svg";
    }
    else {
        audio.play();
        isPlaying = true;
        event.target.src = "./img/Group17.svg";
    }
}