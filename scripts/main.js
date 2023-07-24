/*const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";

function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };*/

  let miImage = document.querySelector("img");
  miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/luis-omar.jpg") {
        miImage.setAttribute("src", "images/luis-omar2.jpg");
    } else {
        miImage.setAttribute("src", "images/luis-omar.jpg");
    }
  };
  
  let miBoton = document.querySelector("button");
  let miTitulo = document.querySelector("h1");

  function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Bienvenido(a) a la web mas genial," + miNombre;
  }

    if (!localStorage.getItem("nombre")) {
        estableceNombreUsuario();
    } else {
        let nombreAlmacenado = localStorage.getItem("nombre");
        miTitulo.textContent = "Bienvenido(a) a la web mas genial," + nombreAlmacenado;
    }

    miBoton.onclick = function () {
        estableceNombreUsuario();
    };

  function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.innerHTML = "Bienvenido(a) a la web mas genial," + miNombre;
    }
  }  