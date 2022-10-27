import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FaFileDownload } from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import LeftSideBar from '../Shared/LeftSideBar/LeftSideBar';
import { Col, Container, Row } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";
import App from '../../App';


const ref = React.createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <div>
            <Container>
            <h2 className='text-center m-4'>Courses We Provide <Pdf targetRef={ref} filename="course-details.pdf">
            {({ toPdf }) => <FaFileDownload onClick={toPdf} size={30}>Generate Pdf</FaFileDownload>}
           </Pdf></h2>
            <Row>
                <Col lg="4">
                    <LeftSideBar></LeftSideBar>
                </Col>
                <Col lg="8"  ref={ref}>
                <Card>
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
                    <div className='d-flex justify-content-between'>
                     <h4>Price: ${course.price}</h4>
                    <Button variant="dark"><Link  style={{ textDecoration: 'none',color: 'white'}} to={`/getpremium/${course._id}`}>Get Premium</Link></Button></div>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;