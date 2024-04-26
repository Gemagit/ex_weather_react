import React from "react";

function WeatherCard({ data }) {
  const date = new Date(data.dt * 1000); // Convertir la fecha de Unix a formato legible

  return (
    <article>
      <h3>{date.toLocaleDateString()}</h3>
      <p>Temperatura: {data.main.temp} °C</p>
      <p>Estado del tiempo: {data.weather[0].main}</p>
    </article>
  );
}

export default WeatherCard;
