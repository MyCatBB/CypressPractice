import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import checkBoximage from "../images/Main.jpg";
import meerkat from "../images/Meerkat.jpg";
import universe from "../images/Universe.jpg";

const GalleryPage = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState<"image1" | "image2" | "">(
    "image1",
  );

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value as "image1" | "image2");
  };

  return (
    <div className="GalleryPage">
      <Header />
      <div className="GalleryPage__checkBoxContainer">
        <p>Select Checkbox to display BB's photo</p>
        {selectedCheckbox && (
          <img className="catImage" src={checkBoximage} alt="MyCat Image" />
        )}
        <br />
        <label>
          <input
            type="checkbox"
            checked={selectedCheckbox}
            onChange={(e) => setSelectedCheckbox(e.target.checked)}
          />
        </label>
      </div>
      <div className="GalleryPage__radioContainer">
        <label>
          <input
            type="radio"
            name="Image1"
            value="image1"
            checked={selectedRadio === "image1"}
            onChange={handleRadioChange}
          />
          Meerkat
        </label>
        <label>
          <input
            type="radio"
            name="Image2"
            value="image2"
            checked={selectedRadio === "image2"}
            onChange={handleRadioChange}
          />
          Universe
        </label>
        <div>
          {selectedRadio === "image1" && (
            <img
              className="GalleryPage__meerkatImage"
              src={meerkat}
              alt="meerkat image"
            />
          )}
          {selectedRadio === "image2" && (
            <img
              className="GalleryPage__universeImage"
              src={universe}
              alt="universe image"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
