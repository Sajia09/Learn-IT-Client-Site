import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const CourseSummaryCard = ({course}) => {
    const { picture, price, course_name,about,_id } = course;
    return (
        <div>
            <Card>
                <Card.Img className="card-img" variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text >
                     <div className='d-flex justify-content-between'>
                     <h5>Price: ${price}</h5>
                    <Button variant="dark"><Link  style={{ textDecoration: 'none',color: 'white'}} to={`/courses/${_id}`}>Details</Link></Button>
                     </div>
                    </Card.Text>
                </Card.Body>
            </Card> 
        </div>
    );
};

export default CourseSummaryCard;