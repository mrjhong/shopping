import React from "react";
import img1 from "../assets/img/slide/img1.png";
import img2 from "../assets/img/slide/img2.jpg";
import img3 from "../assets/img/slide/img3.jpg";

import "../css/SlideTresD.css";

const SlideTresD = () => {
  return (
    <div className="principal">
      <div className="container__slider">
        <div className="containetsd">
          <input type="radio" name="slider" id="item-1" checked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />

          <div className="cards">
            <label className="card" for="item-1" id="selector-1">
              <img className="slideimg" src={img1} alt="img1" />
            </label>
            <label className="card" for="item-2" id="selector-2">
              <img className="slideimg" src={img2} alt="img2" />
            </label>
            <label className="card" for="item-3" id="selector-3">
              <img className="slideimg" src={img3} alt="img3" />
            </label>
                  </div>
                 
        </div>
      </div>
    </div>
  );
};

export default SlideTresD;
