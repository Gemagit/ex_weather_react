import React from "react";
import { useRef } from "react"

const FormCity = (setCity) => {

  const cityRef = useRef('');

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
