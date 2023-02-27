// variables const
alert("la web no esta echa responsive")
const hideText1 = document.getElementById("mostrar-1");
const hideText2 = document.getElementById("mostrar-2");
const hideTextBtn1 = document.getElementById("hide-text-1");
const hideTextBtn2 = document.getElementById("hide-text-2");

// funcion reutilizable
function toggleText(textElement, buttonText) {
  textElement.classList.toggle("show");
  buttonText.textContent = textElement.classList.contains("show") ? "Ver menos" : "Leer más";
}

// mostrar y ocultar
hideTextBtn1.addEventListener("click", () => toggleText(hideText1, hideTextBtn1));
hideTextBtn2.addEventListener("click", () => toggleText(hideText2, hideTextBtn2));
