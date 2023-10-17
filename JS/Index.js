// Función para mostrar/ocultar contenido según la pestaña seleccionada
function mostrarContenido(tabId) {
    // Ocultar todos los contenidos
    document.getElementById('inicio-content').style.display = 'none';
    document.getElementById('products-content').style.display = 'none';
    document.getElementById('ofertas-content').style.display = 'none';
    document.getElementById('contacto-content').style.display = 'none';

    // Mostrar el contenido correspondiente al tabId
    document.getElementById(tabId).style.display = 'block';
}

// Event list
const inicioTab = document.getElementById('inicio-tab');
const productosTab = document.getElementById('productos-tab');
const ofertasTab = document.getElementById('ofertas-tab');
const contactoTab = document.getElementById('contacto-tab');

inicioTab.addEventListener('click', () => mostrarContenido('inicio-content'));
productosTab.addEventListener('click', () => mostrarContenido('products-content'));
ofertasTab.addEventListener('click', () => mostrarContenido('ofertas-content'));
contactoTab.addEventListener('click', () => mostrarContenido('contacto-content'));
mostrarContenido('inicio-content');