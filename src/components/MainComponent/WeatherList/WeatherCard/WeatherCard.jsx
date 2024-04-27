import React from "react";

function WeatherCard({ weather}) {

  return (
    <article>
          <h3>Ciudad: {weather.name}</h3>
          <img src={JSON.stringify(weather.weather.icon)} alt="Imagen tiempo" />
          <p>Temperatura: {JSON.stringify(weather.main.temp)}ºC</p>
          <p>Fecha: {JSON.stringify(weather.dt)}</p>
          <p>Condiciones: {JSON.stringify(weather.weather[1])}</p>
          <p>Viento: {JSON.stringify(weather.wind)}</p>
          <p>Temperatura Mínima: {JSON.stringify(weather.main.temp_min)}º</p>
          <p>Temperatura Máxima: {JSON.stringify(weather.main.temp_max)}º</p>
    </article>
  );
}

export default WeatherCard;
