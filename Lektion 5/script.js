console.log("lektion 5")

document.querySelector('ul li:nth-child(3)').style.color = 'blue'
document.querySelector('ul').style.backgroundColor = '#eeeeee'

//läs attribut
console.log("id för vår ul: ", document.querySelector('#colors').getAttribute('id'))

//Loopa igenom flera element som identifieras med selector
document.querySelectorAll('#colors li').forEach((elem)=>
{
    console.log(elem.getAttribute('data-hex'));

    elem.addEventListener('click', (event) => {
    elem.style.backgroundColor = 'coral';});
    
    document.querySelectorAll('#colors li').forEach((elem2) => {
        if(elem2 != event.target) {
            elem2.style.backgroundColor = 'silver';
        }
    });

})
//Skapa lyssnare för container element
document.querySelector('#colors').addEventListener('mouseover', (event) =>{
    console.log(event.target.innerText)
})
