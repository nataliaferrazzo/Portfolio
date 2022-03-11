import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section className="section bg-transparent">
        <div id="empty3"></div>
            <Container>
                <Jumbotron fluid className="bg-black">
                    <h2 className="display-4 mb-5 text-center text-title">
                        {experiences.heading}
                    </h2>
                    <Row className="text">
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;