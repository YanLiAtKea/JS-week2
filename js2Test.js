let img = document.querySelector('img');
img.addEventListener('click', changePos);
function changePos(){
    let x = Math.random()*90;
    let y = Math.random()*90;
    img.style.transform = "translate(" + x +"vw, " + y + "vh)"; // don't add ; for CSS in this line, because JS will add ; automaticly, so if add self, CSS will have 2; and breaks
}
