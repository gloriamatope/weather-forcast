function refreshweather(response) {
    console.log(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
    let humidityElement = document.querySelector("#humidity");
    let descriptionElement = document.querySelector("#description");
    let speedElement = document.querySelector("#speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    
    timeElement.innerHTML = formatDate(date);
     speedElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    descriptionElement.innerHTML = response.data.condition.description;
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
   

}
    function formatDate(date) {
      
        let minutes = date.getMinutes();
        let hours = date.getHours();
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        let day = days[date.getDay()];

        if (minutes < 10) {
        
        minutes = `0${minutes}`;
    }


 return `${day} ${hours} ${minutes}`;  

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