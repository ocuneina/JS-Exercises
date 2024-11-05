const API_key = '6dc2459e9fe34168cbd9b95b4e0ee6da';
const BASE_url = `https://api.openweathermap.org/data/2.5/weather`;
// ?id=${city}&appid=${API_key}

const searchBtn = document.getElementById('searchBtn');
const inputBox = document.querySelector('.input-box');
const weatherBody = document.querySelector('.weather-body');
const location_not_found = document.querySelector('.location-not-found');

const getWeather = async (city) => {
  let url = `${BASE_url}?q=${city}&appid=${API_key}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const displayWeather = (weatherData) => {
  const { description, icon, main } = weatherData.weather[0];
  const { temp, humidity } = weatherData.main;
  const { speed: wind } = weatherData.wind;
  const { name: city, cod } = weatherData;
  const realTemp = Math.round(temp - 273.15);

  weatherBody.innerHTML = `        
    
        <img src="./icons/${icon}.png" alt="${description}" class="weather-img" />

        <div class="weather-box">
          <p class="temperature">${realTemp} <sup>°C</sup></p>
          <p class="description">${description}</p>
        </div>

        <div class="weather-details">
          <div class="humidity">
            <i class="fa-sharp fa-solid fa-droplet"></i>
            <div class="text">
              <span id="humidity">${humidity}%</span>
              <p>Humidity</p>
            </div>
          </div>

          <div class="wind">
            <i class="fa-solid fa-wind"></i>
            <div class="text">
              <span id="wind-speed">${wind} Km/H</span>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>

        `;
};

const displayError = (err) => {
  location_not_found.style.display = 'flex';
  weatherBody.style.display = 'none';
  console.log(err);
  return;
};

searchBtn.addEventListener('click', async () => {
  try {
    const weather = await getWeather(inputBox.value );
    displayWeather(weather);
  } catch (error) {
    displayError(error);
  }
});
