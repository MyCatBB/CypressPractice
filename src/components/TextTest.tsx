import React from "react";
import { useEffect, useState } from "react";

export const cityList = [
  "Toronto",
  "Vancouver",
  "Montreal",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Winnipeg",
  "Hamilton",
  "Burlington",
  "victoria",
];

const TextTest = () => {
  const [city, setCity] = useState<string>("Random City");

  const setRandomCity = () => {
    const randomIndex = Math.floor(Math.random() * cityList.length);
    setCity(cityList[randomIndex]);
  };

  useEffect(() => {
    setRandomCity();
  }, []);

  return (
    <div>
      <p>{city}</p>
      <button className="testButton" onClick={setRandomCity}>
        Change City
      </button>
    </div>
  );
};

export default TextTest;
