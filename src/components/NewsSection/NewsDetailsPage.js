// NewsDetailsPage.js
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsDetailsLeft from "./NewsDetailsLeft";
import { newsSidebar } from "@/data/newsSection"; // Import the newsSidebar object

const NewsDetailsPage = ({ slug }) => {
  // Find the news item that matches the provided slug
  const newsItem = newsSidebar.newses.find(item => item.slug === slug);

  return (
    <section className="news-details">
      <Container>
        <Row>
          <Col xl={10} lg={7}>
            {newsItem && <NewsDetailsLeft news={newsItem} />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsDetailsPage;
