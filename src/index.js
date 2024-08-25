function handleSearchElement(event) {
    event.preventDefault();
    let searchinput = document.querySelector("#search-form-input");
    console.log(searchinput.value);
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = searchinput.value;
    
}

let searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit",handleSearchElement)