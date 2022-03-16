import React from 'react';

import {
    Col,
    Card
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
    return (
        <Col lg="6">
            <div className="pt-4 pb-4 text-center">
                <a href={data.url}>
                    <img className="bg-white mb-3" src={data.companylogo} alt="" />
                </a>
                <p className="lead">
                    {data.role}
                    <br />
                    {data.date}
                </p>

            </div>
        </Col>
    );
}

export default ExperienceCard;