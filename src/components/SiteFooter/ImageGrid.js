import React from "react";
import { Image } from "react-bootstrap";


const ImageGrid = ({ logos }) => {
  return (
    <div className="image-grid">
      {logos.map((logo, index) => (
        <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
          <Image src={logo.src} alt={logo.alt} className="grid-image" />
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
