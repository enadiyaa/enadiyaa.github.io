

const changeWindow = (event) => {
    if (event.target.id === 'window') {
        if (event.target.dataset.open === "true") {
            event.target.src = "../img/window-white-closed.jpg";
            event.target.dataset.open = "false";
        }
        else {
            if (event.target.dataset.img === null || event.target.dataset.img === undefined) {
                event.target.src = "../img/brown_open.jpg";
            }
            else
                event.target.src = event.target.dataset.img;
                event.target.dataset.open = "true";
        }
    }
}

document.getElementById("windows-wrapper").addEventListener("click", changeWindow)