const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://piyzribk5n4wmjlnbcv3gtdtzm0vepxn.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
    console.log(`Se ha visitado la pagina ${data} veces`)
}

updateCounter();