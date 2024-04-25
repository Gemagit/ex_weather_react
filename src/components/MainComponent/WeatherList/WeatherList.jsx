import React from "react";
import WeatherCard from "./WeatherCard"
import { useState, useEffect} from 'react'
//import data from "./data.json"

const WeatherList = () => {

const [city, setCity] = useState('Madrid');
const [weather, setWeather] = useState([]);

const handleSubmit = async (e) => {
  e.preventDefault();

};

useEffect(() => {
  const fetchWeather = async () => {
    try {
       const response = await fetch("api.openweathermap.org/data/2.5/weather?q=${city}&appid=MI_API_KEY"); 
      if (!response.ok) {
        throw new Error('Error al cargar el pronóstico extendido');
      }
      const data = await response.json();
      setWeather(data.list);
    } catch (error) {
      console.error(error);
    }
  };
  fetchWeather();
}, [city]);

return (
  <section>
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      <button type="submit">Buscar</button>
    </form>

    {weather.map((dayWeather) => (
      <WeatherCard key={dayWeather.dt} day={dayWeather} />
    ))}
  </section>
);
}

export default WeatherList;
