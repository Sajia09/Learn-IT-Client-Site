import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className='carousel'>
          <img
            className="d-block w-100"
            src="https://kpriet.ac.in/asset/frontend/images/course/artificial-intelligence-and-data-science/header.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Learn and Explore Your Knowledge Here</h3>
            <Button variant="dark"><Link  style={{ textDecoration: 'none',color: 'white'}} to='/courses'>Explore More</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media-exp1.licdn.com/dms/image/C4D16AQFJzrk5pbaucw/profile-displaybackgroundimage-shrink_200_800/0/1540069697634?e=2147483647&v=beta&t=DzZxOY1SAGYgUOqTu9f1R0-qes-ZQYS-3gbFhytrcz4"
            alt="Second slide"
          />
  
          <Carousel.Caption>
          <h3>Learn and Explore Your Knowledge Here</h3>
            <Button variant="dark"><Link  style={{ textDecoration: 'none',color: 'white'}} to='/courses'>Explore More</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://telophase.com/wp-content/uploads/Core-Comp-Header_1600x600.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption>
          <h3>Learn and Explore Your Knowledge Here</h3>
            <Button variant="dark"><Link  style={{ textDecoration: 'none',color: 'white'}} to='/courses'>Explore More</Link></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Home;