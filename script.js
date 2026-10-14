
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
// Eventos del buscador (Solo si existen en el HTML actual)
if (inputBusqueda) {
    inputBusqueda.addEventListener('keypress', e => { if (e.key === 'Enter') evaluarBusqueda(); });
}
if (btnBuscar) {
    btnBuscar.addEventListener('click', evaluarBusqueda);
}

// Eventos del modal de video (Solo si existen en el HTML actual)
if (btnCerrarVideo) {
    btnCerrarVideo.addEventListener('click', cerrarVideo);
}
if (window && modalVideo) {
    window.addEventListener('click', e => { if (e.target === modalVideo) cerrarVideo(); });
}

// ===================================================
// ROTACIÓN INFINITA DE TARJETAS (EFECTO COLA FIFO)
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.gc-slider');

    if (slider) {
        setInterval(() => {
            const primeraTarjeta = slider.querySelector('.gc-item');
            if (!primeraTarjeta) return;

            // 1. Calculamos el ancho exacto de la tarjeta más el margen (20px)
            const gap = 20;
            const desplazamiento = primeraTarjeta.offsetWidth + gap;

            // 2. Desplazamos la primera tarjeta a la izquierda con animación suave
            primeraTarjeta.style.transition = 'margin-left 0.6s ease, opacity 0.4s ease';
            primeraTarjeta.style.marginLeft = `-${desplazamiento}px`;
            primeraTarjeta.style.opacity = '0';

            // 3. Al terminar los 600ms, la movemos al final de la cola y la restauramos
            setTimeout(() => {
                slider.appendChild(primeraTarjeta);
                primeraTarjeta.style.transition = 'none';
                primeraTarjeta.style.marginLeft = '0';
                primeraTarjeta.style.opacity = '1';
            }, 600);

        }, 4000); // Se ejecuta automáticamente cada 4 segundos
    }
});