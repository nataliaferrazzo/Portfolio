import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { CardImg } from "react-bootstrap";


const AcademicCard = ({ data }) => {
  const {
    title,
    message,
    pagename,
    date,
    image
  } = data

  return (
    <Col md={4}>
      <Card id="card" className="card shadow p-3 mb-5 rounded text-white justify-content-center align-items-center">
        <a href={pagename}>
          <CardImg src={image} /></a>
        <Card.Body>
          <Card.Title as="h5">{title}</Card.Title>
          <Card.Text>{message} </Card.Text>
          <hr />
          <p className="card-text">
            <span className="text-dark card-link mr-4">
              Date:{" "}
              <span className="badge badge-dark">{date}</span>
            </span>
          </p>
        </Card.Body>
      </Card>
    </Col>
  );
};



export default AcademicCard;
