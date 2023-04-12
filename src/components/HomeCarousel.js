import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import  '../App.css';



export default function HomeCarousel() {
  return (
    <Carousel id='Carousel' style={{margin:"auto", width:"80%"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.triaxtec.com/wp-content/uploads/2018/02/shutterstock_178613660.jpg"
          alt="First slide"
          height= "500px"
        />
        <Carousel.Caption style={{border:"2px solid", margin:"10px",background:"gray"}}>
          <h3>Welcome to Strategize.</h3>
          <p>Add Yourself to the TEAM MEMBERS Page</p>
          <p>To Get Started.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/PM.jpg"
          alt="Second slide"
          height= "500px"
          
        />

        <Carousel.Caption style={{border:"2px solid", margin:"10px",background:"green"}}>
          <h3>Create a Project</h3>
          <p>Welcome, View our Projects Page to Manage Projects.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="e-block w-100"
          src="https://cloudinary.hbs.edu/hbsit/image/upload/s--gAAnShcM--/f_auto,c_fill,h_375,w_750,/v20200101/63FA86712AEE497FD9F306C31133994E.jpg"
          alt="Third slide"
          height= "500px"
        />

        <Carousel.Caption style={{border:"2px solid", margin:"10px",background:"gray"}}>
          <h3>See Completed Projects. Navigate to COMPLETED PROJECTS to see what we've already done!</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

