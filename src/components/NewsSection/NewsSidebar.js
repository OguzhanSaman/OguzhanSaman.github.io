import { newsSidebar, newsSidebarSide } from "@/data/newsSection";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsSidebarLeft from "./NewsSidebarLeft";
import NewsSidebarSide from "./NewsSidebarSide";

const { newses } = newsSidebar;

const NewsSidebar = ({ className = "" }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the news based on the search query
  const filteredNews = newses.filter((news) =>
    news.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className={`news-sidebar-search ${className}`}>
      <Container>
        <Row>
          <Col xl={10} lg={7}>
            <input
              type="text"
              placeholder="Makale ya da haber arayın..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xl={10} lg={7}>
            <NewsSidebarLeft newses={filteredNews} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsSidebar;
