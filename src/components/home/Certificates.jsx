import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Row, Col } from "react-bootstrap";

const Certificate = (data) => {

  return (
    <Jumbotron fluid id="certificate" className="bg-transparent m-0">
      <Container className="">
        <Col lg="6">
          <div className="pb-5 text-center">
            <head>{data.heading}</head>
            <img
              src={data.img}
              url={data.url}
            />
          </div>
        </Col>
      </Container>
    </Jumbotron>
  );
};

export default Certificate;
