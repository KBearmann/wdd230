const apiKey = '357b3d81a38fde17cb2764264313ebfd';
const city = 'Sant Fe';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

getWeather();
