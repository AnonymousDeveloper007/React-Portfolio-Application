import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from '../Assets/computer-setup1.jpg';
import Carousel2 from '../Assets/c1.jpg';
import Carousel3 from '../Assets/ramon-salinero-vEE00Hx5d0Q-unsplash (2).jpg';

import {Link} from 'react-router-dom'

export default function carousel() {

  return (
    <>


     
        <Carousel className="carousel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100  img-fluid  height: auto "
            src={Carousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1> <Link to={"/header"} className="btn btn-danger btn-lg explore ">EXPLORE MORE</Link></h1>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100   img-fluid  height: auto"
            src={Carousel3}
            alt="Second slide"
          />

          <Carousel.Caption>
             <h1> <Link to={"/header"} className="btn btn-danger btn-lg explore ">EXPLORE MORE</Link></h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100  img-fluid  height: auto"
            src={Carousel2}
            alt="Third slide"
          />

          <Carousel.Caption>
                 <h1> <Link to={"/header"} className="btn btn-danger btn-lg explore ">EXPLORE MORE</Link></h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="carousel-wrapper">
         <h1> <Link to={"/header"} className="btn btn-danger btn-lg explore ">EXPLORE MORE</Link></h1>
      </div>




    </>
  )
}

