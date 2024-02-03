import { workTogetherTwo } from "@/data/workTogether";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "../Reuseable/Link";
import Title from "../Reuseable/Title";

const { image, tagline, title, icon, text, text2 } = workTogetherTwo;

const WorkTogetherTwo = () => {
  return (
    <section className="work-together-two">
      <Container>
        <Row>
          <Col xl={6} lg={6}>
            <div className="work-together-two__left animated slideInLeft">
              <div className="work-together-two__img">
                <Image src={image.src} alt="" />
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="work-together-tow__right">
              <Title title={title} tagline={tagline} className="text-left" />
              <p className="work-together-tow__text-2">{text2}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WorkTogetherTwo;
