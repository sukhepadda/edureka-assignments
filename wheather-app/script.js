let locationInput = document.querySelector("#locationInput");
let btnId = document.querySelector("#btnId");
let locationHead = document.querySelector("#locationHead");
let temp = document.querySelector("#temp");
let skyData = document.querySelector("#skyData");
let humidity = document.querySelector("#humidity");
let windSpeed = document.querySelector("#windSpeed");
let imgIcon = document.querySelector("#imgIcon");

const API_KEY = "18d886945f196f51280ce1ebc369397e";

btnId.addEventListener("click", () => {
  let city = locationInput.value;
  // console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=1&current&&units=metric&appid=${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      let fetchCity = data.name;
      let fetchTemp = data.main.temp;
      let fetchSky = data.weather[0].description;
      let fetchHumidity = data.main.humidity;
      let fetchSpeed = data.wind.speed;
      let fetchIcon = data.weather[0].icon;
      console.log(data);
      locationHead.innerText = `Wheather in ${fetchCity}`;
      temp.innerHTML = `${fetchTemp}&#176; C`;
      imgIcon.src = `http://openweathermap.org/img/wn/${fetchIcon}@2x.png`;
      skyData.innerHTML = `${fetchSky}`;
      humidity.innerHTML = `Humidity: ${fetchHumidity}%`;
      windSpeed.innerHTML = `Wind Speed: ${fetchSpeed}km/h`;
    });
});
fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${"Tokyo"}&limit=1&current&&units=metric&appid=${API_KEY}`
)
  .then((res) => res.json())
  .then((data) => {
    let fetchCity = data.name;
    let fetchTemp = data.main.temp;
    let fetchSky = data.weather[0].description;
    let fetchHumidity = data.main.humidity;
    let fetchSpeed = data.wind.speed;
    let fetchIcon = data.weather[0].icon;
    console.log(data);
    locationHead.innerText = `Wheather in ${fetchCity}`;
    temp.innerHTML = `${fetchTemp}&#176; C`;
    imgIcon.src = `http://openweathermap.org/img/wn/${fetchIcon}@2x.png`;
    skyData.innerHTML = `${fetchSky}`;
    humidity.innerHTML = `Humidity: ${fetchHumidity}%`;
    windSpeed.innerHTML = `Wind Speed: ${fetchSpeed}km/h`;
  });
