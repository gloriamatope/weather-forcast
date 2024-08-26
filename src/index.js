function refreshweather(response) {
    console.log(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
   
    cityElement.innerHTML = response.data.city;
     temperatureElement.innerHTML = Math.round(temperature);
   

}

function searchCity(city) {
    let apiKey = "c05bc3a7aca0034e2aaf87b4fb0a01ot";
    //to search for the city
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    // separation of content
    axios.get(apiUrl).then(refreshweather);
        
}




function handleSearchElement(event) {
    event.preventDefault();
    let searchinput = document.querySelector("#search-form-input");
   
    //cityElement.innerHTML = searchinput.value;
    searchCity(searchinput.value);
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchElement)
searchCity("Paris");