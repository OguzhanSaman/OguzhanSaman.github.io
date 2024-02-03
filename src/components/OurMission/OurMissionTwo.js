import { ourMissionTwo } from "@/data/ourMission";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import JarallaxImage from "../Jarallax/JarallaxImage";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import VideoModal from "../Reuseable/VideoModal";

const Jarallax = dynamic(() => import("../Jarallax/Jarallax"), { ssr: false });

const { bg, title, videoId, videoText } = ourMissionTwo;

const OurMissionTwo = ({ className = "", shape = 2 }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className={`our-mission-two ${className}`}>
        <div className="our-mission-two-bg-box">
          <Jarallax
            className="our-mission-two-bg"
            speed={0.2}
            imgPosition="50% 0%"
          >
            <JarallaxImage src={bg.src} />
          </Jarallax>
        </div>
        <Container>
          <Row>


          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId={videoId} />
    </>
  );
};

export default OurMissionTwo;
