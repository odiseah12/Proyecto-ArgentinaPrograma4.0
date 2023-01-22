let boton = document.getElementById("boton");
let mostrar1 = document.getElementById("hide-n");
let botonPais = document.getElementById("boton-pais")
let mostrar2 = document.getElementById("hide-pais")
let mostrar3 = document.getElementById("hide-fn")
let botonFn = document.getElementById("boton-fn")
let mostrar4 = document.getElementById("hide-gmail")
let botonCel = document.getElementById("boton-cel")
let mostrar5 = document.getElementById("hide-cel")
let botonGmail = document.getElementById("boton-gmail")
let mostrar6 = document.getElementById("hide-gmail")

botonCel.addEventListener("click", () => toggleText(mostrar5));
botonFn.addEventListener("click",() => toggleText(mostrar3));
botonPais.addEventListener("click",() => toggleText(mostrar2));
botonGmail.addEventListener("click",() => toggleText(mostrar6));
boton.addEventListener("click", () => toggleText(mostrar1));

function toggleText(element) {
    element.classList.toggle("show");
}
