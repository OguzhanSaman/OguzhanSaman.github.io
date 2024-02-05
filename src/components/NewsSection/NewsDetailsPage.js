import { newsSidebarSide, newsDetails } from "@/data/newsSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";


const NewsDetailsPage = () => {
  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={10} lg={7}>
            <NewsDetailsLeft news={newsDetails} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
