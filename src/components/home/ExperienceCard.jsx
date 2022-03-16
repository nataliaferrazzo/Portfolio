import React from 'react';

import {
    Col,
    Card
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
    return (
        <Col>
            <Card id="card" className="card shadow p-4 mb-5 rounded text-white justify-content-center align-items-center">
                <div className="pt-4 pb-4 text-center">
                    <a href={data.url}>
                        <img className="bg-white mb-3" src={data.companylogo} alt="" />
                    </a>
                    <p className="lead">
                        {data.role}
                        <br />
                        <h6>{data.date}</h6>
                    </p>

                </div>
            </Card>
        </Col>
    );
}

export default ExperienceCard;