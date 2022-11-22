document.querySelectorAll('.thumb').forEach((elem) => {
    console.log(elem)
elem.addEventListener('click', () => {
    document.querySelector("#big-img > img").setAttribute('src', elem.getAttribute('data-big'));
    document.querySelector("#big-img").style.display='flex';
    });
});


function closeLightbox(){
    document.querySelector("#big-img").style.display='none';
}
//Stäng lightbox
document.querySelector('#big-img').addEventListener('click', closeLightbox)
document.addEventListener('keydown', closeLightbox)