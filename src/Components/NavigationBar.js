import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
/* Components Import */
import ComputerLogo from '../Assets/Logo-Computer.png'
import MouseLogo from '../Assets/Logo-Mouse.png'
import MouseLogo1 from '../Assets/Logo-Mouse1.png'
const NavigationBar = () => {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
        <a className="navbar-brand" href="/header" className="text-white h3 text-decoration-none ">
          Yashowardhan Dole
          <img src={ComputerLogo} alt="Computer Logo" className="logo ml-2"></img>
          <img src={MouseLogo} alt="Mouse Logo" className="logo"></img>
        </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            
            <img src={MouseLogo1} alt="Mouse" className="img-thumbnail " style={{height:"30px", width:"30px"}} ></img>
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item active">
                {/* <a className="nav-link " href="#">HOME</a> */}
                <Link to={"/"} className="nav-link ">HOME</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">ABOUT-ME</a> */}
                <Link to={"/about-me"} className="nav-link ">ABOUT ME</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">SKILL-SET</a> */}
                 <Link to={"/skill-set"} className="nav-link ">SKILL-SET</Link>
              </li>
              <li className="nav-item">
               {/*  <a className="nav-link" href="#">EDUCATION</a> */}
                 <Link to={"/education"} className="nav-link ">EDUCATION</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">CASE STUDIES</a> */}
                <Link to={"/case-studies"} className="nav-link ">CASE STUDIES</Link>
              </li>
            
              <li className="nav-item">
                {/*  <a className="nav-link" href="#">CONTACT ME</a> */}
                <Link to={"/contact-me"} className="nav-link">CONTACT ME</Link>
              </li>

               <li className="nav-item">
                {/*  <a className="nav-link" href="#">CONTACT ME</a> */}
                <Link to={"/carousel"} className="nav-link">CAROUSEL</Link>
              </li>
            
            
              
            </ul>

          </div>
        </div>
        </nav>
      
    </>
  )
}

export default NavigationBar
