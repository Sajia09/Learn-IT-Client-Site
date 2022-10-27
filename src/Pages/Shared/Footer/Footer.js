import React from 'react';
import { FaFacebook, FaTwitter,FaInstagram,FaGithub,FaGoogle } from 'react-icons/fa';

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter className='bg-dark text-center text-white'>
            <div className='text-center p-3 bg-dark'>
          <h3>LearnIT</h3>
          © 2022 Copyright: Sajiaa09
        </div>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FaFacebook></FaFacebook>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FaTwitter></FaTwitter>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FaGoogle></FaGoogle>
            </MDBBtn>
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FaInstagram></FaInstagram>
            </MDBBtn>
  
            <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
              <FaGithub></FaGithub>
            </MDBBtn>
          </section>
        </MDBContainer>
  
        <div className='text-center p-2 bg-dark'>
          
        </div>
      </MDBFooter>
    );
};

export default Footer;