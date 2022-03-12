import React from 'react';
import BadgeCard from "./BadgeCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Badge = ({badges}) => {
    return (  
        <section className="section bg-transparent">
            <Container>
                <Jumbotron fluid className="bg-black">
                    <h2 className="display-4 mb-5 text-center text-title">
                        {badges.heading}
                    </h2>

                    <Row className="text">
                        {
                            badges.data.map(data => {
                                return <BadgeCard key={data.name} data={data} />
                            })
                        }
                    </Row>

                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Badge;