import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='m-5 p-5'>
            <h2>FAQ</h2>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How To Register?</Accordion.Header>
        <Accordion.Body>
          Go to <Link to='/register'>Register</Link> Page and Provide All your information.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How To Get Premium Access?</Accordion.Header>
        <Accordion.Body>
          You need to register an account and login to the website for accessing premium features.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default FAQ;