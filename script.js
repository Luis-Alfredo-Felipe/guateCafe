const inputBusqueda = document.getElementById('input-busqueda');
const btnBuscar = document.getElementById('btn-buscar');
function evaluarBusqueda() {
    const texto = inputBusqueda.value.toLowerCase().trim();
    // Palabras clave para la Prueba de Optimalidad
    const palabrasModi = ["modi", "optimalidad", "prueba", "delta", "multiplicador", "u y v"];
    // Palabras clave para la Comparativa Ejecutiva
    const palabrasComparar = ["comparar", "modelo", "resultado", "resumen", "mejor", "tablero", "kpi"];
    const esModi = palabrasModi.some(palabra => texto.includes(palabra));
    const esComparar = palabrasComparar.some(palabra => texto.includes(palabra));
    if (esModi) {
        window.open('modi.html', '_blank');
        inputBusqueda.value = '';
    } else if (esComparar) {
        window.open('comparar.html', '_blank');
        inputBusqueda.value = '';
    } else if (texto !== "") {
        alert('No se encontraron resultados para: ' + texto);
    }
}
// Eventos para presionar Enter o hacer clic en la lupa
inputBusqueda.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        evaluarBusqueda();
    }
});
btnBuscar.addEventListener('click', evaluarBusqueda);

