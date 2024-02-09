// mainSliderThree.js
import { mainSliderThree } from "@/data/mainSlider";
import React from "react";

const MainSliderThree = ({ id = "" }) => {
  const { images } = mainSliderThree; // Destructure images array from mainSliderThree

  return (
    <div className="main-slider-container"> {/* Add a container for styling */}
    <div className="empty-space"></div>
      <div className="main-slider">
        <h1 className="block-effect" style={{'--td': '1.2s'}}>
          <div className="block-reveal" style={{'--bc': '#007fb9', '--d': '.1s'}}><div className="illusion-text">Kalite, Güven, Verimlilik</div></div>
          <div className="block-reveal" style={{'--bc': '#007fb9', '--d': '.5s'}}><div className="illusion-text">Uyum, Dava, Danışmanlık</div>
          </div>

        </h1>
        <div className="image-container">
          <img className="image-layer" src={images[0].src} alt="İstanbul" />
        </div>
      </div>
    </div>
  );
};

export default MainSliderThree;
