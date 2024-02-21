const apiKey = '357b3d81a38fde17cb2764264313ebfd';
const city = 'Santa Fe';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Weather API data:', data);
        
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById(`day${dayIndex}-temp`).textContent = `Day ${dayIndex} Temperature: ${temperature}°F`;
        document.getElementById(`day${dayIndex}-description`).textContent = `Description: ${description}`;
        document.getElementById(`weather-icon-${dayIndex}`).src = `https://openweathermap.org/img/wn/${icon}.png`;
    } catch (error) {
        console.log('Error fetching weather data:', error);
    }
}

async function getWeatherForecast() {
    try {
        const response = await fetch(forecastApiUrl);
        const data = await response.json();
        console.log('Forecast API data:', data);
        
        // Extract forecast data for the next three days
        const forecastData = data.list.slice(0, 8 * 3); // Each day has 8 entries (3-hour intervals)
        console.log('Forecast data for the next three days:', forecastData);

        // Update your HTML elements with the forecast data
        for (let i = 0; i < forecastData.length; i += 8) {
            const dayIndex = i / 8 + 1;
            const temperature = forecastData[i].main.temp;
            document.getElementById(`day${dayIndex}-temp`).textContent = `Day ${dayIndex} Temperature: ${temperature}°F`;
        }

    } catch (error) {
        console.log('Error fetching weather forecast data:', error);
    }
}

getWeather();
getWeatherForecast();
