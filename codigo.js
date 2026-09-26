const claveApi = '0fc93fc1dd5a459abda34720262409';
const idioma = 'es';

async function obtenerClima() {
  const inpCiudad = document.getElementById('input-ciudad');
  const ciudad = inpCiudad ? inpCiudad.value.trim() : '';

  if (!ciudad) {
    alert('Por favor, ingrese una ciudad');
    return;
  }

  const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

  try {
    const response = await fetch(apiClimaActual);
    const data = await response.json();

    if (data.error) {
      alert('Ciudad no encontrada. Verifica el nombre ingresado.');
      return;
    }

    mostrarClima(data);
  } catch (error) {
    console.error('Error al conectar con el servidor:', error);
    alert('Ocurrió un fallo en la conexión al consultar el clima.');
  }
}

function mostrarClima(data) {
  document.querySelector('.clima-icono').src = 'https:' + data.current.condition.icon;
  document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
  document.querySelector('.temp').innerHTML = Math.round(data.current.temp_c) + '°C';
  document.querySelector('.ciudad').innerHTML = data.location.name;
  document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
  document.querySelector('.viento').innerHTML = data.current.wind_kph + ' Km/h';
}