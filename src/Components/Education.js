import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import FacebookPng from '../Assets/Logo-Facebook.png'
import InstaPng from '../Assets/Logo-Instagram.png'
import LinkedinPng from '../Assets/Logo-LinkedIn.png'
import NavigationBar from './NavigationBar'
const Education = () => {
  return (
    <>
      <NavigationBar/>
      <div className="eduaction-wrapper d-flex flex-row justify-content-around align-items-center">
        <div className="education">
          <h2>1-Diploma In Computer Engineering</h2>
          <h2>2-Bachelors In Computer Engineering</h2>
          <h2>3-Masters Of Technology in Computer Engineering</h2>
        </div>
         <a href="" className="button btn btn-danger mx-4">Download CV</a>
        <div className="social-media">
         
          <h1>Social Media</h1>
          <h2>Connect With Me on: <FontAwesomeIcon icon={faMouse} /></h2>
          <div className="social-media-links">
            <a href="https://www.facebook.com/yash.dole.1" target="_blank" >
              <img src={FacebookPng} alt="Facebook icon" style={{ width:'4rem',height:'4rem'}} className="mx-3" />
            </a>
            <a href="https://www.instagram.com/yashowardhan_d007/" target="_blank">
              <img src={InstaPng} alt="Facebook icon" style={{ width:'4rem',height:'4rem'}} className="mx-3" />
            </a>
            <a href="https://www.linkedin.com/in/yashowardhan-dole-0018181a9/" target="_blank">
              <img src={LinkedinPng} alt="Facebook icon" style={{ width:'5rem',height:'5rem'}} className="mx-3" />
            </a>
            
          </div> 
        </div> 
       
      </div>
       
    </>
  )
}

export default Education
