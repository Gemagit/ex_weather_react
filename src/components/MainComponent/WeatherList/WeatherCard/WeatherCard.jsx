import React from "react";

function WeatherCard({ weather}) {

  const iconCode = "03d"; 
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; 

  return (
    <article>
          <img className="logoWeather" src={iconUrl} alt="foto weather"></img>   
          <p>Temperatura: {weather.main.temp}º</p>
          <p>Fecha: {weather.dt}</p>
          <p>Descripción: {weather.weather[0].description}</p>
          <p>Viento: {weather.wind.speed}</p>
          <p>Temperatura Mínima: {weather.main.temp_min}º</p>
          <p>Temperatura Máxima: {weather.main.temp_max}º</p>
    </article>
  );
}

export default WeatherCard;
