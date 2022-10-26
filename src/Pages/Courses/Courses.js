import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/CourseSummaryCard/CourseSummaryCard';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Courses.css'
import { Container } from 'react-bootstrap';
import LeftSideBar from '../Shared/LeftSideBar/LeftSideBar';
const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2 className='text-center m-4'>Courses We Provide </h2>
                <Row>
                    <Col lg='4'>
                       <LeftSideBar></LeftSideBar>
                    </Col>
                    <Col lg='8'>
                    <div className='course-container'>
                    {
                    allCourses.map(course =><CourseSummaryCard
                    key={course._id}
                    course={course}>
                    </CourseSummaryCard>)
                    }
                    </div>
                    </Col>
                </Row>
        </div>
    );
};

export default Courses;