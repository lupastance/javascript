// Usuario y contraseña predefinidos
const validUser = "pepito";
const validPassword = "qwerty00";

// Función para avanzar al siguiente paso
function nextStep() {
    const username = document.getElementById("username").value;

    if (username === "") {
        alert("Por favor, introduce un nombre de usuario.");
    } else {
        document.getElementById("step1").classList.remove("active");
        document.getElementById("step2").classList.add("active");
    }
}

// Función de inicio de sesión
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUser && password === validPassword) {
        showResult("Bienvenido, " + username + "!", false);
    } else {
        showResult("Error: Usuario o contraseña incorrectos.", true);
    }
}

// Función para mostrar el resultado
function showResult(message, isError) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = message;

    if (isError) {
        resultDiv.classList.add("error");
    } else {
        resultDiv.classList.remove("error");
    }

    document.getElementById("step2").classList.remove("active");
    resultDiv.style.display = "block";
}
