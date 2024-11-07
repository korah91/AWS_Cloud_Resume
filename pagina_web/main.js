async function updateCounter() {
    // Se hace una peticion GET a la funcion lambda 
    let response = await fetch("https://piyzribk5n4wmjlnbcv3gtdtzm0vepxn.lambda-url.eu-west-3.on.aws/");
    // Se obtiene el valor de la respuesta. El contador de visitas
    let data = await response.json();
    // Se muestra el valor del contador en la consola
    console.log(`Se ha visitado la pagina ${data} veces`)
    // Se crea un elemento al final del body con el valor del contador
    const counter = document.createElement("p");
    counter.innerHTML = `This page has received <strong>${data} visits</strong>. Each time someone visits this page, a JavaScript file sends a GET request to an <strong>AWS Lambda</strong> function, which in turn increments the counter in <strong>DynamoDB</strong> and reads the total value.`;
    document.body.appendChild(counter);
}

updateCounter();
