const API = "65d02db73c72649b1abf934a2a765b89";   //api to get weather information

const cityInput = document.getElementById("cityInput"); //constant variable declarations
const whenClicked = document.getElementById("btn");
const weatherInformation = document.getElementById("weather-info");

whenClicked.addEventListener("click", function () {   //when button is clicked
  const cityName = cityInput.value.trim();  //gets city name from input box and trims any extra spaces

  if (cityName === "") {  //if city name is empty
    alert("Input box cannot be empty. Please enter a city name.");  //alerts the user that the input box is empty
    return;
  }

  const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}&units=metric`;  //constructs the API URL for OpenWeatherMap

  fetch(APIURL)  //making an HTTP request to OpenWeatherMap API
    .then((response) => {  
      if (!response.ok) {  //checks if the response is not okay 
        throw new Error("Not a Valid City. Please enter a new one");  //throw an error for invalid city
      }
      return response.json();   //returns the parsed JSON response
    })

    .then((data) => {
      const cityWeatherDescription = data.weather[0].description; //extracts weather information from the JSON response and update the weather info div with weather details
      const cityTemperature = data.main.temp;
      const cityWindSpeed = data.wind.speed;
      const weatherCard = document.createElement("div"); //creates a new weather card div and inserts it above the existing content
      weatherCard.className = "weather-card";

      //variable stores content with weather information. Displays weather name, its description, the temperature and its windspeed. Adds a line at the end.
      const weatherHTML = `  
                <p>The weather in ${cityName} is ${cityWeatherDescription}.</p>   
                <p>The temperature is ${cityTemperature}°C with a wind speed of ${cityWindSpeed} m/s</p>
                 <hr style="height: 1px; width:50%; text-align:center; background-color:purple">`;

      weatherCard.innerHTML = weatherHTML;  //updates the content of the weather card
      weatherInformation.insertBefore(weatherCard, weatherInformation.firstChild); //adds weather card before the existing content

      cityInput.value = "";  //clears the input field
    })

    .catch((error) => {  //handles errors
        if (error.message === "Not a Valid City. Please enter a new one") {   //if city is not found
        alert("City not found. Please enter a new city name.");  //alerts the user that city is not found, and prompts them to enter a new one
      } else {
        console.error("An error occurred:", error);   //if an error occurs for reasons other than a city not being found, it logs the error to the console
      }
    });
});
