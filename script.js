document.getElementById("contactForm").addEventListener("submit", function(event){

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || correo === "" || telefono === "" || mensaje === ""){
        alert("Todos los campos son obligatorios.");
        event.preventDefault();
        return;
    }

    let correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!correoValido.test(correo)){
        alert("Ingrese un correo electrónico válido.");
        event.preventDefault();
        return;
    }

    alert("Formulario enviado correctamente. Gracias por contactarnos.");
});