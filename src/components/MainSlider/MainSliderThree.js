import React from "react";

const MainSliderThree = ({ id = "" }) => {
  return (
    <div className="main-slider-container"> {/* Add a container for styling */}
      <div className="main-slider">
        <div className="empty-space"></div>
        <h1 className="block-effect" style={{'--td': '1.2s'}}>
          <div className="block-reveal" style={{'--bc': '#007fb9', '--d': '.1s'}}><div className="illusion-text">Oğuzhan</div></div>
          <div className="block-reveal" style={{'--bc': '#007fb9', '--d': '.5s'}}><div className="illusion-text">Saman</div></div>
        </h1>
        <div className="info">
        </div>
        <a href="https://abubakersaeed.netlify.app/designs/d12-block-revealing-effect" className="abs-site-link" rel="nofollow noreferrer" target="_blank">abs/designs/d12-block-revealing-effect</a>
      </div>
    </div>
  );
};

export default MainSliderThree;
