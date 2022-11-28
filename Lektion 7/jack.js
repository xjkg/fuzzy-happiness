function openjackBox(){
    document.querySelector("#jack-img > img").setAttribute('src', document.querySelector("#jack-img > img").getAttribute('data-open'));
}

document.querySelector('#jack-img > img').addEventListener('mousedown', openjackBox)

function closejackBox(){
    document.querySelector("#jack-img > img").setAttribute('src', document.querySelector("#jack-img > img").getAttribute('data-closed'));
}
document.addEventListener('mouseup', closejackBox)

const slider = document.querySelector("#slider");
slider.addEventListener('input', () => 
{
    console.log(slider.value);
    if(slider.value>70)
    {
        openjackBox()
    }else{
        closejackBox()
    }

})
