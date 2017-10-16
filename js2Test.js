let lis = document.querySelectorAll("li");
lis.forEach(changeClassWithClick);
function changeClassWithClick(li){
    li.addEventListener('click', toggleClass);
    function toggleClass(evt){
        evt.target.classList.toggle("del");
    }
}
