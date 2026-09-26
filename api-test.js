const claveApi = '0fc93fc1dd5a459abda34720262409';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

async function consultarClima() {
  const response = await fetch(apiClimaActual);
  const data = await response.json();
  console.log(data.location);
}

consultarClima();