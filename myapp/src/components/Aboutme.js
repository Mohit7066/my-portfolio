import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';

import img1 from "./image/justt.mxhit_-27-08-2023-0012.webp"
import img2 from "./image/justt.mxhit_-27-08-2023-0005.webp"
import img3 from "./image/justt.mxhit_-27-08-2023-0006.webp"

function Aboutme() {
  return (
    <div className='about container-fluid' id='aboutme'>
      <Row>
        <Col md={6} >
          <Carousel fade controls={false} indicators={false}>
            <Carousel.Item interval={1000}>
              <img
                src={img1}
                alt="Image 1"
                style={{ width: '500px',height:"500px" ,paddingTop: '10px' }} // 1:1 aspect ratio
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                src={img2}
                alt="Image 2"
                style={{ width: '500px', height:"500px",paddingTop: '10px' }} // 1:1 aspect ratio
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img 
                src={img3} 
                alt="Image 3"
                style={{ width: '500px', height:"500px",paddingTop: '10px' }} // 1:1 aspect ratio
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6} >
          <div style={{ color: 'white' }}>
            <h2>I'm Mohit Suman</h2>
            <p>A dedicated student currently working towards my bachelor's degree.
              My journey into the world of videography, video editing, and photography
              began two years ago as a personal hobby. With consistent practice, I have developed proficiency in these
              skills and am confident in my abilities. I look forward to the opportunity
              to collaborate with you on creating exceptional visual content.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Aboutme;
