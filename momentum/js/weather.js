const API_KEY = "04ba2f661461d9e727eecb31816a4795";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:nth-child(1)");
      const temperature = document.querySelector("#weather span:nth-child(2)");
      const weather = document.querySelector("#weather span:nth-child(3)");

      const temp = Math.floor(data.main.temp - 273.15);

      city.innerText = data.name;
      temperature.innerText = `/ ${temp}°C`;
      weather.innerText = `Today is ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
