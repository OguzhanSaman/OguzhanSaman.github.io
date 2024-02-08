// Create a new component for the image grid
import React from "react";
import { Image } from "react-bootstrap";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((src, index) => (
        <Image key={index} src={src} className="grid-image" />
      ))}
    </div>
  );
};

export default ImageGrid;
