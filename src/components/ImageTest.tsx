import React from "react";
import { useState } from "react";
import image from "../images/Main.jpg";

const ImageTest = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      {selected && <img className="catImage" src={image} alt="MyCat Image" />}
      <label>
        <input
          type="checkbox"
          checked={selected}
          onChange={(e) => setSelected(e.target.checked)}
        />
      </label>
    </div>
  );
};
