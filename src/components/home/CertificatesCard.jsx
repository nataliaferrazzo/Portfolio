import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";

const CertificateCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <img className="bg-transparent mb-3" src={data.image} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;