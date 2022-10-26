import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LeftSideBar from '../Shared/LeftSideBar/LeftSideBar';
import { Col, Row } from 'react-bootstrap';



const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2 className='text-center m-4'>Courses We Provide </h2>
            <Row>
                <Col lg="4">
                    <LeftSideBar></LeftSideBar>
                </Col>
                <Col lg="8">
                <Card style={{ width: '45rem' }}>
                <Card.Img variant="top" style={{ width: '100%',height: '300px'}} src={course.picture} />
                <Card.Body>
                    <Card.Title>{course.course_name}</Card.Title>
                    <Card.Text>
                    <div>
                        <h3>About This course:</h3>
                        <p>{course.about}</p>
                    </div>
                    <div>
                        <h3>Benifits:</h3>
                        <p>{course.benifits}</p>
                    </div>
                    </Card.Text>
                    <h4>Price: ${course.price}</h4>
                </Card.Body>
                </Card>
                </Col>
            </Row>

        </div>
    );
};

export default CourseDetails;