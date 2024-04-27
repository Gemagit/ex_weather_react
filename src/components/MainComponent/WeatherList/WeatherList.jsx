import React from "react";
import WeatherCard from "./WeatherCard"
import { useState, useEffect } from 'react'


const WeatherList = () => {

  const [weather, setWeather] = useState(null);


  const paintCards = () => {
    if (!weather || !weather.list) return null;

    return weather.list.map((weatherItem, index) => (
      <WeatherCard
        key={index}
        weather={weatherItem}
      />
    ));
  }


  useEffect(() => {
    const getWeather = async () => {
      try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Madrid&APPID=fe997d642f357d5af23b3bc42fbe7688`);
        const data = await resp.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
      getWeather();
    }, []);




  return (
    //<article>{JSON.stringify(weather)}</article>
    <section>

      {paintCards()}
    </section>
  );
}


export default WeatherList;
