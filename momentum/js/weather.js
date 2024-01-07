const API_KEY = "04ba2f661461d9e727eecb31816a4795";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:last-child");
            const weather = document.querySelector("#weather span:first-child");
            city.innerText = data.name;
            const temp = Math.floor(data.main.temp - 273.15);
            weather.innerText = `${data.weather[0].main} / ${temp}°C`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);