const counter = document.querySelector(".counter");
async function updateCounter() {
    let response = await fetch("https://piyzribk5n4wmjlnbcv3gtdtzm0vepxn.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
    console.log(`Se ha visitado la pagina ${data} veces`)
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a new paragraph added via JavaScript.";
    document.body.appendChild(newParagraph);
}

updateCounter();