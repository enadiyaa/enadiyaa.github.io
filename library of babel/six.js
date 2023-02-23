
let windowHeight = window.innerHeight;

function changeActiveNavPosition() {
    let mainContentHeight = document.querySelector('body').offsetHeight - windowHeight;
    let windowScrollProcent = window.pageYOffset / mainContentHeight * 100;
    
    document.querySelector('.text_two').style.display = (windowScrollProcent >= 20) ? "block": "none";
    document.querySelector('.text_three').style.display = (windowScrollProcent >= 40) ? "block": "none";
    document.querySelector('.text_four').style.display = (windowScrollProcent >= 60) ? "block": "none";
    document.querySelector('.text_five').style.display = (windowScrollProcent >= 80) ? "block": "none";
    document.querySelector('.text_six').style.display = (windowScrollProcent >= 100) ? "block": "none";
}

window.addEventListener("scroll", (evt)=>{
    changeActiveNavPosition();
})