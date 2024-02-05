import { teamPage } from "@/data/teamSection";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTeamOne from "./SingleTeamOne";

const TeamPage = () => {
  return (
    <section className="team-page">
      <Container>
        <Row>
          {teamPage.slice(0, 15).map((team) => (
            <Col
              xl={3}
              lg={5}
              md={5}
              key={team.id}
              className="animated fadeInUp"
            >
              <SingleTeamOne team={team} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};


export default TeamPage;
