document.getElementById("subscribeBtn").addEventListener("click", function() {
    // Aquí se podría agregar la lógica de suscripción al canal de YouTube
    // Por ahora, simplemente mostraremos el segundo botón después de un retraso

    // Mostrar el segundo botón después de 10 segundos (10000 milisegundos)
    setTimeout(function() {
        document.getElementById("unlockBtn").style.display = "block";
    }, 10000); // 10 segundos
});

document.getElementById("unlockBtn").addEventListener("click", function() {
    // Una vez que el segundo botón es presionado, mostramos el enlace de descarga
    document.getElementById("downloadLink").style.display = "block";
});
