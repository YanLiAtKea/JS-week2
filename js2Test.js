let img = document.querySelector('img');
let set = setInterval(changeImg, 2000);
function clear(){
    clearInterval(set);
}
//img.addEventListener('click', changeImg);
img.addEventListener('click', clear);
function changeImg(){
    let nr = img.getAttribute('src')[4];
    nr++;
    if (nr <=5) {
        img.setAttribute('src', 'img/' + nr +'.jpg');
    } else {
        nr = 1;
        img.setAttribute('src', 'img/' + nr +'.jpg');
    }
}
