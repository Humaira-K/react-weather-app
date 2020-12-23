import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
   
    return `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
}

function temperature() {
    let temperature = Math.round(props.data.main.temp);
    
    return `${temperature}°C`
}
    return (
     <div className="WeatherForecastPreview col">
        {hours()} 
        <WeatherIcon code={props.data.weather[0].icon} />
        {temperature()}
        </div> 
        );
}