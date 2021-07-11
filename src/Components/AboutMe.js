import React from 'react'
import NavigationBar from './NavigationBar'
import Particles from 'react-particles-js';
const AboutMe = () => {
  return (
    <>
      
      <NavigationBar />
     
      <div className="about-me-wrapper  d-flex flex-column justify-content-center align-items-center " id="particles-js">
          <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}/>
        <div className="about-me-maininfo d-flex flex-column justify-content-center align-items-center">
             
           <h1>Hello!! My Name Is Yashowardhan Dole</h1>
           <h2>I am a Computer Engineer with a Passion For Software Development.
           <br></br>I Usually give my 200% for what iam paid for.</h2>
          
          
          <p>
            As a child i had a passion for Technology and Computers.This passion lead me to Complete my Masters Of Technolgy in Computer Science and Engineering.Iam usually interested in creating aesthetic designs and build softwares from it.
            I constantly like to imagine creative ideas and implement them that will help solve real world problems.I Build Projects just to tickle my brain and fiddle with technolgies
          </p>
          
        </div>
      </div>
    </>
  )
}

export default AboutMe
