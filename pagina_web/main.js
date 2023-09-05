async function updateCounter() {
    let response = await fetch("https://piyzribk5n4wmjlnbcv3gtdtzm0vepxn.lambda-url.eu-west-3.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
    console.log(`Se ha visitado la pagina ${data} veces`)
    const counter = document.createElement("p");
    counter.textContent = "This page has received 5 visits. Each time someone visits this page, a JavaScript file sends a GET request to an AWS Lambda function, which in turn increments the counter in DynamoDB and reads the total value.";
    document.body.appendChild(counter);
}

updateCounter();