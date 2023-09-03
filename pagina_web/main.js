document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector(".counter-number");

    // Muestra el número de visitantes que ha tenido la página accediendo a una funcion lambda que a su vez lee y incrementa un contador en una base de datos DynamoDB
    async function updateCounter() {
        let response = await fetch("https://piyzribk5n4wmjlnbcv3gtdtzm0vepxn.lambda-url.eu-west-3.on.aws/");
        let data = await response.json();
        counter.innerHTML = `You are visitor number ${data}!!`;
        console.log(`Se ha actualizado el contador a ${data}`);
    }

    updateCounter();
});