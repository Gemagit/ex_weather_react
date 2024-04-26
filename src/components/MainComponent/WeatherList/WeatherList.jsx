import React from "react";
import WeatherCard from "./WeatherCard"
import { useState, useEffect } from 'react'
//import data from "./data.json"

const WeatherList = () => {

  const [weather, setWeather] = useState([]);

 /*  const handleSubmit = async (e) => {
    e.preventDefault();
  }; */

  useEffect(() => {
    const getWeather = async () => {
      const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Madrid&APPID=fe997d642f357d5af23b3bc42fbe7688');
      const data = await resp.json();
      setWeather(data);
    }
    getWeather();
  }, []);


  return (
    <p>{JSON.stringify(weather)}</p>
  /*   <section>
      <form onSubmit={handleSubmit}>
        <input type="text" value={weather.name} />
        <button type="submit">Buscar</button>
      </form>
{weather.name !== ""
            <article>
              <span> {weather.main.temp}</span>
              <p>{weather.weather[0].main}</p>
            </article>
            }
      
    </section> */
  );
}


export default WeatherList;
