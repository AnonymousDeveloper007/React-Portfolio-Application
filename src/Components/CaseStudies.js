import React from 'react'
import NavigationBar from './NavigationBar'
const CaseStudies = () => {
  return (
    <>
      <NavigationBar/>
      <div className="projects-wrapper">
        <div className="projects d-flex justify-content-around flex-wrap "> 
            <div class="card" style={{width:'18rem'}}  >
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">Recipe Application</h5>
                <h6 class="card-subtitle mb-2 text-muted h6">(ReactJs + Firebase)</h6>
                <p class="card-text">Created a Application which lets user create customised Food Product</p>
                <a href="https://react-my-burger-92670.web.app/" target="_blank" class="card-link">LIVE DEMO</a>
                <a href="https://github.com/AnonymousDeveloper007/React-Recipie-App" target="_blank" class="card-link">GITHUB LINK</a>
              </div>
            
             </div>
            <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">CodePen.io Clone</h5>
                <h6 class="card-subtitle mb-2 text-muted h6">(ReactJs)</h6>
                <p class="card-text">By Prototyping the basic functionality of Codepen,I created a coding
                playground for JavaScript,CSS&HTML5.</p>
                <a href="https://code-pen-clone-85f42.web.app/" target="_blank"  class="card-link">LIVE DEMO</a>
                <a href="https://github.com/AnonymousDeveloper007/Code-Pen-Clone" target="_blank" class="card-link">GITHUB LINK</a>
              </div>
            
            </div>
            <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">Youtube Clone</h5>
                <h6 class="card-subtitle mb-2 text-muted h6">(ReactJs + Youtube API)</h6>
                <p class="card-text">Replicated the basic functionality of YouTube, where user can search
                and play the video from YouTube's database</p>
                <a href="https://clone-ed12a.web.app/" target="_blank" class="card-link">LIVE DEMO</a>
                <a href="https://github.com/AnonymousDeveloper007/Youtube-Clone" target="_blank" class="card-link">GITHUB LINK</a>
              </div>
            
            </div>
            <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">Google Drive Clone</h5>
                <h6 class="card-subtitle mb-2 text-muted h6">(ReactJs + Firebase)</h6>
                <p class="card-text">Created a Prototype of basic functionality of google Drive</p>
                <a href="https://drive-demo-a8b6f.web.app/" target="_blank" class="card-link">LIVE DEMO</a>
                <a href="https://github.com/Yashowardhan007/Google-Drive-Clone" target="_blank" class="card-link">GITHUB LINK</a>
              </div>
            
            </div>
            <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">Developer Portfolio</h5>
                <h6 class="card-subtitle mb-2 text-muted h4">(HTML5 + CSS + JavaScript)</h6>
                <p class="card-text">Created a Portfolio Application</p>
                <a href="https://yashowardhan-dole.netlify.app/" target="_blank" class="card-link">LIVE DEMO</a>
                <a href="https://github.com/AnonymousDeveloper007/Devloper-Portfolio" target="_blank" class="card-link">GITHUB LINK</a>
              </div>
            
            </div>
            <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">React Developer Portfolio</h5>
                <h6 class="card-subtitle mb-2 text-muted h4">(ReactJs + EmailJS)</h6>
                <p class="card-text">Created a Portfolio Application</p>
                <a href="#" class="card-link" target="_blank">THIS APP IS A LIVE DEMO</a>
                <a href="https://github.com/AnonymousDeveloper007/React-Portfolio-Application" class="card-link" target="_blank">GITHUB LINK</a>
              </div>
            
            </div>
            <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">Meetup Application</h5>
                <h6 class="card-subtitle mb-2 text-muted h4">(NextJs)</h6>
                <p class="card-text">Created a meetup app in NextJs , where user can decide and
                collaborate about the meetup location</p>
                <a href="https://next-js-meetup-app-c67nrpldj-yashowardhan007.vercel.app/" target="_blank" class="card-link">LIVE DEMO</a>
                <a href="https://github.com/Yashowardhan007/NextJS-Meetup-App" target="_blank" class="card-link">GITHUB LINK</a>
              </div>
            
           </div>
            <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">E-Commerce Application</h5>
                <h6 class="card-subtitle mb-2 text-muted h4">(Vanilla NodeJs +Express):Under Development</h6>
                <p class="card-text">Created a application for book Delivery</p>
                <a href="#" class="card-link">LIVE DEMO</a>
                <a href="https://github.com/AnonymousDeveloper007/ECommerce-Application" target="_blank" class="card-link">GITHUB-LINK</a>
              </div>
            
           </div>
             <div class="card" style={{width:'18rem'}}>
              <div class="card-body">
                <h5 class="card-title h2 font-weight-bold">Live Wallpaper Chrome Extension</h5>
                <h6 class="card-subtitle mb-2 text-muted h4">(HTML5 + CSS + JavaScript)</h6>
                <p class="card-text">Created a Chrome Extension for live Wallpaper</p>
                <a href="#"  class="card-link">LIVE DEMO</a>
                <a href="https://github.com/AnonymousDeveloper007/Live-Wallpaper-Chrome-Externsion" target="_blank" class="card-link">GITHUB LINK</a>
              </div>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudies
