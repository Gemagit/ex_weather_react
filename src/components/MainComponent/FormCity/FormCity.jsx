import React from "react";
import { useRef } from "react"

const FormCity = (setCity) => {

  const cityRef = useRef('');
/*   const [coord, setCoord]= useState();

   useEffect(() => {
    const getCoord = async () => {
      try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=en&hl=es&client=webapp&u=https://home.openweathermap.org/api_keys`);
        const data = await resp.json();
        setCoord(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
      getCoord();
    }, []);  */
    

  const handleClick = () => {
    setCity(cityRef.current.value);
  };

  return (
    <section>
      <form >
        <input
          type="text"
          ref={cityRef}
          placeholder="Madrid"
        />
        <button onClick={handleClick} type="button">Buscar</button>
      </form>
    </section>
  )
};

export default FormCity;
