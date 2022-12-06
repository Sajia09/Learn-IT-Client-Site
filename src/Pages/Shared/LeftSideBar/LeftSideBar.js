import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect( () =>{
        fetch('https://assignment10-server-site.vercel.app/courses')
        .then( res => res.json())
        .then(data => setCourses(data));
    }, [])
    return (
        <div>
           <h4>All Courses</h4>
           <div className='courses'>
            {
                courses.map(course =><div style={{height:'40px', width: '80%',border: '1px solid black',margin:'20px',
                textAlign: 'center', padding:'5px',borderRadius: '5px', backgroundColor:'black'}}><Link style={{ textDecoration: 'none' , color:'white'}} to={`/courses/${course._id}`}>{course.course_name}</Link></div>)
            }
           </div>
        </div>
    );
};

export default LeftSideBar;