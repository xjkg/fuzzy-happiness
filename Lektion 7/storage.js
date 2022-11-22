console.log("!!")
//local storage
if(localStorage.getItem('visitCount'))
{
    let currentCount = localStorage.getItem('visitCount');
    document.querySelector("#counter").innerText= `
    Du har besökt sidan ${localStorage.getItem('visitCount')} gånger.`;
    
    currentCount++;
    localStorage.setItem('visitCount', currentCount);

}else {
    localStorage.setItem('visitCount', 1);
}




//cookies
function getCookie(cookieName)
{


for ( cookie of document.cookie.split(";")) {

    if(cookie.split("=")[0]==cookieName){
        return cookie.split("=")[1];
    }
    return 'undefined';
}
}


function saveCookie(cookieName, cookieValue) {
    document.cookie = `${cookieName}=${cookieValue}; SameSite=Lax`;
    console.log(document.cookie)
}

document.querySelector('#btn-save').addEventListener('click', () => {
    const namn = document.querySelector('#name').value;
    saveCookie('visitorName', namn);
    document.querySelector('#welcome').innerText=`Välkommen tillbaka ${namn}`
});



document.cookie = "visitorName=Jamal";
