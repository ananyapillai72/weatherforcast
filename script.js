function getWeather(cityName) {
    var apiKey = '4d7f453f0a2d8cb0c2c03c35c5a21747';
    var baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  
    // Make the API request
    fetch(`${baseUrl}?q=${cityName}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        // Extract relevant weather information
        var weather = {
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
        };
  
        // Update the HTML with the weather information
        document.getElementById('city').textContent = `Weather in ${weather.city}:`;
        document.getElementById('temperature').textContent = `Temperature: ${weather.temperature}°C`;
        document.getElementById('description').textContent = `Description: ${weather.description}`;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // Handle form submission
  document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var cityName = document.getElementById('city-input').value;
    getWeather(cityName);
  });