import React from "react";
import WeatherList from "./WeatherList"
import FormCity from "./FormCity/FormCity";

const MainComponent = () => {
  return <main>
    <h3>MI PARTE METEOROLÓGICO</h3>
    <WeatherList />
    <FormCity />
  </main>;
};

export default MainComponent;
