let img = document.querySelector('img');
img.addEventListener('click', changePos);
function changePos(){
    let x = Math.random()*90;
    let y = Math.random()*90;
    img.style.transform = "translate(" + x +"vw, " + y + "vh)";
    console.log(x,y);
}
