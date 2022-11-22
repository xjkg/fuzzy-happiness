function openjackBox(){
    document.querySelector("#jack-img > img").setAttribute('src', document.querySelector("#jack-img > img").getAttribute('data-open'));
}

document.querySelector('#jack-img').addEventListener('mousedown', openjackBox)

function closejackBox(){
    document.querySelector("#jack-img > img").setAttribute('src', document.querySelector("#jack-img > img").getAttribute('data-closed'));
}
document.addEventListener('mouseup', closejackBox)

