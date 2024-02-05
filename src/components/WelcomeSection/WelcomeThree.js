import { welcomeThree } from "@/data/welcomeSection";
import useActive from "@/hooks/useActive";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Link from "../Reuseable/Link";
import TextSplit from "../Reuseable/TextSplit";
import Title from "../Reuseable/Title";
import VideoModal from "../Reuseable/VideoModal";

const {
  title,
  tagline,
  points,
  text,
  videoBg,
  percent,
  videoText,
  experienceText,
  images,
  videoId,
} = welcomeThree;

const WelcomeThree = ({ id = "" }) => {
  const [countStart, setCountStart] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const ref = useActive(id);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };

  return (
    <>
      <section ref={ref} className="welcome-three" id={id}>
        <Container>
          <Row>
            <Col xl={6}>
              <div className="welcome-three__left">
                <Title title={title} tagline={tagline} className="text-left" />
                <ul className="list-unstyled welcome-three__points">
                  {points.map(({ id, title }) => (
                    <li key={id}>
                      <div className="icon">
                        <i className="fa fa-arrow-right"></i>
                      </div>
                      <div className="text">
                        <p>{title}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="welcome-three__text">{text}</p>
              </div>
            </Col>
            <Col xl={6}>
              <div className="welcome-three__right animated slideInRight">
                <div className="welcome-three__img-box">
                  {images.map((image, i) => (
                    <div key={i} className={`welcome-three__img-${i + 1}`}>
                      <Image
                        src={require(`@/images/resources/${image}`).default.src}
                        alt=""
                      />
                    </div>
                  ))}
                  <div className="welcome-three__experience">
                    <p>{experienceText}</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} videoId={videoId} />
    </>
  );
};

export default WelcomeThree;
