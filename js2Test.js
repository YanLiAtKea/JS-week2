let img = document.querySelector('img');
img.addEventListener('click', changeImg);
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
