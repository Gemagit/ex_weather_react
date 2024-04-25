import React from "react";

function WeatherCard({ day }) {
  const date = new Date(day.dt * 1000); // Convertir la fecha de Unix a formato legible

  return (
    <article>
      <h3>{date.toLocaleDateString()}</h3>
      <p>Temperatura: {day.main.temp} °C</p>
      <p>Estado del tiempo: {day.weather[0].description}</p>
    </article>
  );
}

export default WeatherCard;
