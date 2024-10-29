function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value;
    const apiKey = '562d7f14c451a99c473b2f6da267d0c0'; // Replace 'YOUR_API_KEY' with your actual API key
    const cityapiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(cityapiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data["name"]}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        })
}

// const city = document.getElementById('city').value;
// const long = document.getElementById('long').value;
// const lat = document.getElementById('lat').value;
// const apiKey = '562d7f14c451a99c473b2f6da267d0c0'; // Replace 'YOUR_API_KEY' with your actual API key
// const cityapiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
// const longapiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);