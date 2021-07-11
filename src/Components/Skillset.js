import React from 'react'
import NavigationBar from './NavigationBar'
import Particles from 'react-particles-js';
const Skillset = () => {
  return (
    <>
       
    <NavigationBar />
      
     
        
    <div className="skillset-wrapper  d-flex flex-row justify-content-center align-items-center">
      
        <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} />
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
	}} />
        <div className="skillset-maininfo d-flex flex-row justify-content-around align-items-center">
        
         <ul className="skill ">
            <li className="item">C++</li>
            <li className="item">C</li>
            <li className="item">JavaScript</li>
            <li className="item">Java</li>
            <li className="item">HTML5</li>
						<li className="item">CSS3</li>
						 <li className="item">SASS Pre Processor</li>
						<li className="item">Bootstrap CSS</li>
          </ul>
					<ul className="skill ">
						 <li className="item">Materialize CSS</li>
            <li className="item">React Js</li>
            <li className="item">Vanilla NodeJS</li>
            <li className="item">ExpressJs</li>
            <li className="item">MongoDb/SQL</li>
            <li className="item">Figma UX/UI Tool</li>
            <li className="item">Algorithmic Problem Solving</li>
          </ul>
        </div>
        </div>
        
    </>
  )
}

export default Skillset
