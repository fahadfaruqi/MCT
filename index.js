const apiKey = "api key";
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const url = (city) =>
  "https://rapidapi.com/community/api/open-weather-map/?q=${city}&appid=${apikey}";

async function getWeatherByLocation(city) {
  const resp = await fetch(url(city), { origin: "cros" });
  const respData = await resp.json();
  addWeatherToPage(respData);
}
// I will add a function over here

function addWeatherToPage(data) {
  const temp = Ktoc(data.main.temp);
  const weather = document.createElement("div");
  weather.classList.add("weather");
  weather.innerHTML = (
    <h2>
      <img src="https://rapidapi.com/community/api/open-weather-map/$(data.weather[0].icon}@2x.png" />
      ${temp}{" "}
      <img src="https://rapidapi.com/community/api/open-weather-map/$(data.weather[0].icon}@2x.png" />
    </h2>
  );

  //<small>${data.weather[0].main}</small>
  main.innerHTML = "";
  main.appendChild(weather);
}

function Ktoc(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener("Submit", (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    getWeatherByLocation(city);
  }
});
