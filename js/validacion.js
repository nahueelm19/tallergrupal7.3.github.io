function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
event.preventDefault(); // No manda el formulario todavía

let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password1").value;
let repeatPassword = document.getElementById("password2").value;
let terminos = document.getElementById("terminos").checked;

// Ningún campo vacío
if (nombre === "" || apellido === "" || email === "" || password === "" || repeatPassword === "") {
showAlertError();
}

// Contraseña mínimo 6 caracteres
if (password.length < 6) {
showAlertError();
}

// Contraseñas iguales
if (password !== repeatPassword) {
showAlertError();

}

// Checkbox de términos marcado
if (!terminos) {
showAlertError();
}

// Si todo está bien
showAlertSuccess();
});

