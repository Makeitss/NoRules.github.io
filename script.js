document.addEventListener('input', function (event) {
    if (event.target.classList.contains('auto-resize')) {
        event.target.style.height = 'auto'; // Resetea el alto
        event.target.style.height = event.target.scrollHeight + 'px'; // Ajusta al contenido
    }
});
