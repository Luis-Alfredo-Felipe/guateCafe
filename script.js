
const inputBusqueda = document.getElementById('input-busqueda');
const btnBuscar = document.getElementById('btn-buscar');
const modalVideo = document.getElementById('modal-video');
const btnCerrarVideo = document.getElementById('btn-cerrar-video');
const reproductorVideo = document.getElementById('reproductor-video');
function abrirVideo() {
    modalVideo.style.display = 'flex';
    reproductorVideo.play();
}
function cerrarVideo() {
    modalVideo.style.display = 'none';
    reproductorVideo.pause();
    reproductorVideo.currentTime = 0;
}
function evaluarBusqueda() {
    const texto = inputBusqueda.value.toLowerCase().trim();
    // Palabras clave
    const palabrasModi = ["modi", "optimalidad", "prueba", "delta", "multiplicador", "u y v"];
    const palabrasComparar = ["comparar", "modelo", "resultado", "resumen", "mejor", "tablero", "kpi"];
    const palabrasVideo = ["video", "historia", "clip", "presentacion", "demostracion", "intro"];
    const palabrasReporte = ["reporte", "informe", "pdf", "generar", "descargar", "documento"];
    const esModi = palabrasModi.some(p => texto.includes(p));
    const esComparar = palabrasComparar.some(p => texto.includes(p));
    const esVideo = palabrasVideo.some(p => texto.includes(p));
    const esReporte = palabrasReporte.some(p => texto.includes(p));
    if (esVideo) {
        abrirVideo();
        inputBusqueda.value = '';
    } else if (esModi) {
        window.open('modi.html', '_blank');
        inputBusqueda.value = '';
    } else if (esComparar) {
        window.open('comparar.html', '_blank');
        inputBusqueda.value = '';
    } else if (esReporte) {
        window.open('informeMetodos.pdf', '_blank');
        inputBusqueda.value = '';
    } else if (texto !== "") {
        alert('No se encontraron resultados para: ' + texto);
    }
}
// Eventos del buscador
inputBusqueda.addEventListener('keypress', e => { if (e.key === 'Enter') evaluarBusqueda(); });
btnBuscar.addEventListener('click', evaluarBusqueda);
// Eventos del modal de video
btnCerrarVideo.addEventListener('click', cerrarVideo);
window.addEventListener('click', e => { if (e.target === modalVideo) cerrarVideo(); });

