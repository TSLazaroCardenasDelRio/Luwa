// card de navegacion
function mostrarContenido(id) {
  // Oculta todos los contenidos
  var contenidos = document.querySelectorAll('.contenido');
  contenidos.forEach(function (contenido) {
    contenido.style.display = 'none';
  });

  // Muestra el contenido correspondiente al ID del enlace clicado
  var contenidoMostrar = document.getElementById(id);
  contenidoMostrar.style.display = 'block';
}





/*function mostrarMapaGeneral() {
  document.getElementById('mapa-general').style.display = 'block';
}*/





// card de navegacion
function mostrarMapa(id) {
  // Oculta todos los contenidos
  var mapas = document.querySelectorAll('.contenedorMapa');
  mapas.forEach(function (contenedorMapa) {
    contenedorMapa.style.display = 'none';
  });

  // Muestra el contenido correspondiente al ID del enlace clicado
  var contenidoMostrar = document.getElementById(id);
  contenidoMostrar.style.display = 'block';
}




