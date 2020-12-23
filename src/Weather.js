import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMapMarkerAlt,} from "@fortawesome/free-solid-svg-icons";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
const [weatherData, setWeatherData] =  useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);
 const [countryCode, setCountryCode] = useState(props.defaultCountryCode);
function handleResponse(response) {

    setWeatherData({
        ready: true,
        date: new Date(response.data.dt * 1000),
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
        countryCode: response.data.sys.country,

    })
}

function search() {
    let apiKey = "c4e8686879553a92040532234f03a66e";   
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

}

function handleSubmit(event) {
    
    event.preventDefault();
   search()

}


function handleCityChange(event) {
    const location = event.target.value;
        const locationArray = location.split(",");

        setCity(locationArray[0]);
        setCountryCode(locationArray[1]);
}

if (weatherData.ready){
   return (    
      <div className="Weather">
        <form onSubmit={handleSubmit}>

            <div className="input-group">
           <input  className="form-control" type="search"
                placeholder="Enter a city.."
                autoFocus="on"
                onChange={handleCityChange} />
           <button className="btn btn-light" type="button"><FontAwesomeIcon icon={faSearch} />
           </button>
           <button className="btn btn-light" type="button">  <FontAwesomeIcon icon={faMapMarkerAlt} /></button>
          </div>


        </form>
        <WeatherInfo data={weatherData} />
        <p className="hourlyForecast">16 Hours Forecast</p>
        <WeatherForecast city={weatherData.city} />
        
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}