const contenedor = document.querySelector('#contenedor');


fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json()) // Convertir a JSON
    .then(data => {
        console.log(data.value);
        contenedor.innerText = data.value;
    }
    )
    .catch(error => console.error("Error:", error));