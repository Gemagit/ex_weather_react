import React from "react";
import WeatherList from "./WeatherList"
import FormCity from "./FormCity/FormCity";

const MainComponent = () => {
  return <main>
    <h3>MI PARTE METEOROLÓGICO</h3>
    <FormCity />
    <WeatherList />
  </main>;
};

export default MainComponent;
