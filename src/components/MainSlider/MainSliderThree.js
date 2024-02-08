import React from "react";

const MainSliderThree = ({ id = "" }) => {
  return (
    <div className="main-slider-container"> {/* Add a container for styling */}
      <div className="main-slider">
        <div className="empty-space"></div>
        <h1 className="block-effect" style={{'--td': '1.2s'}}>
          <div className="block-reveal" style={{'--bc': '#007fb9', '--d': '.1s'}}><div className="illusion-text">Kalite,</div></div>
          <div className="block-reveal" style={{'--bc': '#007fb9', '--d': '.5s'}}><div className="illusion-text">Güven,</div></div>
          <div className="block-reveal" style={{'--bc': '#007fb9', '--d': '.9s'}}><div className="illusion-text">Verimlilik</div></div>
        </h1> 
      </div>
    </div>
  );
};

export default MainSliderThree;
