function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
event.preventDefault(); // No manda el formulario todavía

let nombre = document.getElementById("nombre").value.trim();
let email = document.getElementById("email").value.trim();
let password = document.getElementById("password").value;
let repeatPassword = document.getElementById("repeatPassword").value;
let terminos = document.getElementById("terminos").checked;

// Ningún campo vacío
if (nombre === "" || email === "" || password === "" || repeatPassword === "") {
showAlertError();
return;
}

// Contraseña mínimo 6 caracteres
if (password.length < 6) {
showAlertError();
return;
}

// Contraseñas iguales
if (password !== repeatPassword) {
showAlertError();
return;
}

// Checkbox de términos marcado
if (!terminos) {
showAlertError();
return;
}

// Si todo está bien
showAlertSuccess();
});

