import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import './App.css';
/* Component Import */
import NavigationBar from './Components/NavigationBar';
import Particles from 'react-particles-js';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe'
import Skillset from './Components/Skillset';
import Education from './Components/Education';
import CaseStudies from './Components/CaseStudies';
import ContactForm from './Components/ContactForm';
import Carousel from './Components/Carousel';
function App() {
  return (
    <>
      
        <Switch>
        <Route path="/" component={Carousel} exact />
        <Route path="/header" component={Header}/>
        <Route path ="/carousel" component={Carousel} />
         <Route path="/about-me" component={AboutMe} />
         <Route path="/skill-set" component={Skillset} />
         <Route path="/education" component={Education} />
         <Route path="/case-studies" component={CaseStudies} />
         <Route path="/contact-me" component={ContactForm}/>
        </Switch>
       
     
    </>
  );
}

export default App;
