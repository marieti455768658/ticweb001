function mostrarCreditos() {
      alert("Autor: Mario Fernández San Juan\nCurso y Grupo: 2ºB");
    }

    function ocultarBloque1() {
      var bloque1 = document.querySelector('.bloque1');
      bloque1.style.display = 'none';
    }

    function mostrarBloque1() {
      var bloque1 = document.querySelector('.bloque1');
      bloque1.style.display = 'block';
    }

    function cambiarColorBloque1() {
      var bloque1 = document.querySelector('.bloque1');
      var nuevoColor = obtenerColorAleatorio();
      bloque1.style.backgroundColor = nuevoColor;
    }

    function obtenerColorAleatorio() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    function mostrarUbicacionEnMapa(latitud, longitud) {
      var mapa = L.map('mapa').setView([latitud, longitud], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapa);

      L.marker([latitud, longitud]).addTo(mapa)
        .bindPopup('Tu ubicación actual').openPopup();
    }

    function obtenerUbicacion() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;

            // Mostrar el mapa en la nueva sección
            mostrarUbicacionEnMapa(latitud, longitud);
          },
          function(error) {
            alert("Error al obtener la ubicación: " + error.message);
          }
        );
      } else {
        alert("La geolocalización no es compatible con este navegador.");
      }
    }
