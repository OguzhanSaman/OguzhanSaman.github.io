import React from "react";
import { Container } from "react-bootstrap";

const GoogleMapTwo = () => {
  return (
    <section className="google-map-two">
      <Container>
        <div className="google-map-two__inner">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.742840017591!2d29.04642501229099!3d41.030881757884494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab85ff8492cd1%3A0xf61714890c0c3a2a!2sKoksal%20%26%20Partners!5e0!3m2!1sen!2str!4v1706535612586!5m2!1sen!2str"
            className="google-map__two-map"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </section>
  );
};

export default GoogleMapTwo;
