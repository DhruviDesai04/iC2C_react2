import React from "react";
import Info from "./Info";
import Education from "./Education";
import Experience from "./Experience";
import Connect from "./Connect";
import Buttons from "./Buttons";
import Description from "./Description";
import Instruction from "./Instruction";
import { Row, Col } from "react-bootstrap";

function MainPage() {
  return (
    <div>
      <Row>
        <Col lg={3} md={4}>
          <Info />
        </Col>
        <Col lg={9} md={8} className="details">
          <div className="conatiner m-0">
            <section className="eduex">
              <Row>
                <Col lg={3} md={4}>
                  <Education />
                </Col>
                <Col lg={9} md={8}>
                  <Experience />
                </Col>
              </Row>
            </section>
            <section className="available">
              <Row>
                <Col sm={9}>
                  <Connect />
                </Col>
                <Col sm={3}>
                  <Buttons />
                </Col>
              </Row>
            </section>

            <Description />
            <Instruction />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default MainPage;
