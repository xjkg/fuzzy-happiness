console.log("hello from .js file")
function minFunktion()
{
    console.log("funktionen kördes");
}

minFunktion();

function buttonHandler()
{
    console.log("Du klickade här")
    alert("Du klickade på knappen")
}

function secondButton()
{
    const namn = prompt("Vad heter du?")
    alert("Hello " + namn)
}

function thirdButton()
{
    const namn2 = document.querySelector("#namn").value;
    let namn = document.getElementById("namn").value; //samma sak obs behövs ingen # före id
    console.log(namn, namn2)

    if (namn == "jamal" || namn == "Jamal")
    {
        namn = namn + " gripenberg "
    } 
    else if (namn == "XD") 
    {
        namn = namn + " XDDDD"
    } 
    else if (namn=="jambal")
    {
        namn = namn + " gribenbergg"
    }
    else 
    {
        console.log("okänt efternamn")
    }
    document.querySelector("#hello-output").innerText = `Morjens ${namn} :DD`; 
}

function pTrainer()
{
    const minuter = Number(prompt("Hur många minuter har du motionerat idag?"))
    console.log(minuter + " minuter")
    if (minuter < 20 || minuter > 300)
{
    alert(":-(")
}
else if (minuter >= 20)
{
    alert(":-)")
}
}


