let modoOscuroActivado = false;

function modoOscuro(){

    let body = document.querySelector("body");
    let header = document.querySelector("header");
    let todoString = document.querySelectorAll ("p, h1, h2, h3, li, a, label, legend");
    let introduccion = document.querySelectorAll ("#introduccion");
    let ilustraciones = document.getElementById ("ilustraciones");
    let boton = document.querySelectorAll (".boton");
    let main = document.querySelector ("main");
    let footer = document.querySelector ("footer");
    let fieldset = document.querySelector ("fieldset");
    let botonModoOscuro = document.querySelector ("#botonModoOscuro");
    let iconoLuna = document.getElementById("iconoLuna");
    let iconoSol = document.getElementById("iconoSol");


    if (modoOscuroActivado) {

    header.style.backgroundImage = "url('./img/HeaderBackground.png')";
    body.style.backgroundColor = "rgb(90, 234, 255)";
    if (ilustraciones) ilustraciones.style.backgroundColor = "rgb(168, 234, 255)";
    main.style.backgroundColor = "rgb(168, 234, 255)";
    footer.style.backgroundColor = "rgb(168, 234, 255)";
    fieldset.style.borderColor = "rgb(169, 9, 97)";
    botonModoOscuro.style.borderColor = "black";
    botonModoOscuro.style.backgroundColor = "grey";
    if (iconoLuna) iconoLuna.style.display = "inline";
    if (iconoSol) iconoSol.style.display = "none";

    boton.forEach (elemento => {
        elemento.style.backgroundColor = "rgb(255, 136, 167)";
    });

    introduccion.forEach (elemento => {
        elemento.style.backgroundColor = "rgb(168, 234, 255)";
    });
        
    todoString.forEach(elemento => {
        elemento.style.color = "rgb(169, 9, 97)";
    });

    modoOscuroActivado = false;

    } else {

    header.style.backgroundImage = "url('./img/HeaderBackgroundModoOscuro.png')";
    body.style.backgroundColor = "black";
    if (ilustraciones) ilustraciones.style.backgroundColor = "#0f0f0f";
    main.style.backgroundColor = "#0f0f0f";
    footer.style.backgroundColor = "#0f0f0f";
    fieldset.style.borderColor = "black";
    botonModoOscuro.style.borderColor = "rgb(169, 9, 97)";
    botonModoOscuro.style.backgroundColor = "rgb(255, 136, 167)";
    if (iconoLuna) iconoLuna.style.display = "none";
    if (iconoSol) iconoSol.style.display = "inline";
    boton.forEach (elemento => {
        elemento.style.backgroundColor = "black";
    });

    introduccion.forEach (elemento => {
        elemento.style.backgroundColor = "black";
    });
        
    todoString.forEach(elemento => {
        elemento.style.color = "white";
    });

    modoOscuroActivado = true;
    }

    localStorage.setItem('modoOscuro', modoOscuroActivado);
};

window.addEventListener('DOMContentLoaded', function() {
    const modoGuardado = localStorage.getItem('modoOscuro');
    if (modoGuardado === 'true') {
        modoOscuroActivado = false; // forzar toggle correcto
        modoOscuro();
    }
});
