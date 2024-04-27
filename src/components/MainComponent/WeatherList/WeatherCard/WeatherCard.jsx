import React from "react";

function WeatherCard({ weather}) {

  const iconCode = weather.weather[0].icon; 
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; 

  return (
    <article>
          <img className="logoWeather" src={iconUrl} alt="foto weather"></img>   
          <p>Temperatura: {(weather.main.temp - 273.15).toFixed(2)}ºC</p>
          <p>Fecha: {new Date(weather.dt * 1000).toLocaleDateString()}</p> 
          <p>Descripción: {weather.weather[0].description}</p>
          <p>Viento: {weather.wind.speed}</p>
          <p>Temperatura Mínima: {(weather.main.temp_min - 273.15).toFixed(2)}ºC</p>
          <p>Temperatura Máxima: {(weather.main.temp_max - 273.15).toFixed(2)}ºC</p>
    </article>
  );
}

export default WeatherCard;