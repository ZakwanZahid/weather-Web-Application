

const apiKey = '692ac9e1a4eb77cb09ef2a3d05d07480'; 
const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');

searchBtn.addEventListener('click', () => {
  const location = locationInput.value;
  if (!location) {
    alert('Please enter a location');
    return;
  }
  fetchWeatherData(location);
});

function fetchWeatherData(location) {
  const xhr = new XMLHttpRequest();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        weatherInfo.innerHTML = ''; // Clear previous data
        displayWeatherInfo(data);
      } else {
        console.error('Error fetching weather data:', xhr.status);
        alert('Error fetching weather data!');
      }
    }
  };
  
  xhr.open('GET', url);
  xhr.send();
}

function displayWeatherInfo(data) {
  const city = data.name;
  const description = data.weather[0].description;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const minTemp = Math.round(data.main.temp_min);
  const maxTemp = Math.round(data.main.temp_max);
  const pressure = data.main.pressure;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  const date = new Date().toLocaleDateString('en-US', { // Format date as "Day, Month Date, Year"
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const weatherContent = `
    <h2>${city} - ${date}</h2>
    <div class="temperature">${temp}°C (Feels like: ${feelsLike}°C)</div>
    <div class="description">${description}</div>
    <div class="weather-data">Min Temperature: ${minTemp}°C</div>
    <div class="weather-data">Max Temperature: ${maxTemp}°C</div>
    <div class="weather-data">Pressure: ${pressure} hPa</div>
    <div class="weather-data">Humidity: ${humidity}%</div>
    <div class="weather-data">Wind Speed: ${windSpeed} m/s</div>
    <div class="weather-data">Sunrise: ${sunrise}</div>
    <div class="weather-data">Sunset: ${sunset}</div>
  `;

  weatherInfo.innerHTML = weatherContent;
}

// const apiKey = '692ac9e1a4eb77cb09ef2a3d05d07480';
// const searchBtn = document.getElementById('search-btn');
// const locationInput = document.getElementById('location');
// const weatherInfo = document.getElementById('weather-info');

// searchBtn.addEventListener('click', () => {
//   const location = locationInput.value;
//   if (!location) {
//     alert('Please enter a location');
//     return;
//   }
//   fetchWeatherData(location);
// });

// function fetchWeatherData(location) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       weatherInfo.innerHTML = ''; // Clear previous data
//       displayWeatherInfo(data);
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Error fetching weather data!');
//     });
// }
// function displayWeatherInfo(data) {
//     const city = data.name;
//     const description = data.weather[0].description;
//     const temp = Math.round(data.main.temp);
//     const feelsLike = Math.round(data.main.feels_like);
//     const minTemp = Math.round(data.main.temp_min);
//     const maxTemp = Math.round(data.main.temp_max);
//     const pressure = data.main.pressure;
//     const humidity = data.main.humidity;
//     const windSpeed = data.wind.speed;
//     const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
//     const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
//     const date = new Date().toLocaleDateString('en-US', { // Format date as "Day, Month Date, Year"
//       weekday: 'long',
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric'
//     });
  
//     const weatherTable = `
//       <h2>${city} - ${date}</h2>
//       <table class="table weather-table">
//         <tbody>
//           <tr>
//             <th>Description</th>
//             <td>${description}</td>
//           </tr>
//           <tr>
//             <th>Temperature</th>
//             <td>${temp}°C (Feels like: ${feelsLike}°C)</td>
//           </tr>
//           <tr>
//             <th>Min Temperature</th>
//             <td>${minTemp}°C</td>
//           </tr>
//           <tr>
//             <th>Max Temperature</th>
//             <td>${maxTemp}°C</td>
//           </tr>
//           <tr>
//             <th>Pressure</th>
//             <td>${pressure} hPa</td>
//           </tr>
//           <tr>
//             <th>Humidity</th>
//             <td>${humidity}%</td>
//           </tr>
        
//           <tr>
//             <th>Sunrise</th>
//             <td>${sunrise}</td>
//           </tr>
//           <tr>
//             <th>Sunset</th>
//             <td>${sunset}</td>
//           </tr>
//         </tbody>
//       </table>
//     `;
  
//     weatherInfo.innerHTML = weatherTable;
//   }
  