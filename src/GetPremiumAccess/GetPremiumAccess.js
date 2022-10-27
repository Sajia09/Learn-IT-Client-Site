import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const GetPremiumAccess = () => {
    const course = useLoaderData();
    return (
        <div>
           <h2 className='mb-5'>Here we offer special discount for you!!!</h2>
           <Container>
           <Card >
                <Card.Img variant="top" style={{ width: '100%',height: '300px'}} src={course.picture} />
                <Card.Body>
                    <Card.Title><h2>{course.course_name}</h2></Card.Title>
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
                    <div className='d-flex justify-content-between'>
                     <h4>Discount:{course.discount}</h4>
                    <Button variant="dark"><Link  style={{ textDecoration: 'none',color: 'white'}} to='/'>Go to Home</Link></Button></div>
                </Card.Body>
                </Card>
           </Container>
        </div>
    );
};

export default GetPremiumAccess;