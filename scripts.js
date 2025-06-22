// scripts.js

// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.querySelector(".formulario-de-contacto");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      const nombre = document.getElementById("nombre");
      const correo = document.getElementById("correo");
      const asunto = document.getElementById("asunto");
      const mensaje = document.getElementById("mensaje");
      let valido = true;

      [nombre, correo, asunto, mensaje].forEach((campo) => {
        campo.classList.remove("campo-invalido");
        if (!campo.value.trim()) {
          campo.classList.add("campo-invalido");
          valido = false;
        }
      });

      if (!valido) {
        event.preventDefault();
        alert("Por favor completa todos los campos obligatorios.");
      }
    });
  }

  // Mejora para SVG embebido: animar texto al pasar el mouse
  const textoSVG = document.querySelector("svg text");
  if (textoSVG) {
    textoSVG.addEventListener("mouseenter", () => {
      textoSVG.setAttribute("fill", "#ffd700"); // dorado
    });
    textoSVG.addEventListener("mouseleave", () => {
      textoSVG.setAttribute("fill", "white");
    });
  }

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((ancla) => {
    ancla.addEventListener("click", function (e) {
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});


const objetoSVG = document.querySelector("object.svg-objeto");

if (objetoSVG) {
  objetoSVG.addEventListener("load", () => {
    const svgDoc = objetoSVG.contentDocument;
    if (!svgDoc) return;

    const grupo = svgDoc.getElementById("elementoInteractivo");

    if (grupo) {
      grupo.addEventListener("mouseenter", () => {
        grupo.setAttribute("fill", "#ff9800"); // naranja al pasar
      });
      grupo.addEventListener("mouseleave", () => {
        grupo.setAttribute("fill", "#4caf50"); // vuelve a verde
      });
    }
  });
}
