import React from 'react'
import Typed from 'react-typed';
import Particles from 'react-particles-js';
/* Components */
import NavigationBar from './NavigationBar'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      
     
       
      <NavigationBar />
     
      
      <div className="header-wrapper">
        <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area:900
             }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color:'white'
              }
            }
          }
        }} />
        <div className="main-info">
          <Typed
            className="typed-text"
            strings={["Software Developer & Computer Engineer", "Not Your Average Software Engineer", "Full Stack Developer", "ReactJS & NodeJs", "Algorithmic Problem Solving", "Web Design and Development"]}
            typeSpeed={50}
            backSpeed={38}
            loop/>
     
          <a class="btn btn-danger" target="_blank" href="#">Curriculum Vitae</a>
          
        </div>
      </div>
       
    </>
  )
}

export default Header
