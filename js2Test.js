let imgs = document.querySelectorAll("li img");
imgs.forEach(changeClassWithClick);
function changeClassWithClick(img){
    img.addEventListener('click', fadeOutAndCount);
    function fadeOutAndCount(evt){
        evt.target.classList.add("fade");
        let nrOfFadeOutBall = document.querySelectorAll(".fade").length;
        if(nrOfFadeOutBall == 3){
            document.querySelector('audio').play();
        }
    }
}
