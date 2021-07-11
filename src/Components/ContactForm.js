import React from 'react'
import emailjs from 'emailjs-com';
import NavigationBar from './NavigationBar'
const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sgq6eqa', 'template_6r8g824', e.target, 
 'user_762gAZ0jSCp49HZFttsfe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }
  return (
    <>
      <NavigationBar/>
      <div className="contact-form-wrapper container-fluid">
        <div className="row justify-content-center">
          <div className="col-5 " >
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label for="firstname" className="h2 text-light font-weight-bold my-3">First Name</label>
              <input type="text" name="firstname" className="form-control font-weight-bold " id="firstname" placeholder="Enter Your First Name"></input>
              <label for="lastname" className="h2 text-light font-weight-bold my-3">Last Name</label>
              <input type="text" name="lastname" className="form-control font-weight-bold " id="lastname" placeholder="Enter Your Last Name"></input>
              <label for="email" className="h2 text-light font-weight-bold my-3">Email Address</label>
              <input type="email" name="email" id="email" className="form-control font-weight-bold" placeholder="Enter Your Email Address "></input>
              <label for="mobilenumber" className="h2 text-light font-weight-bold my-3">Mobile Number</label>
              <p className="h5 text-light font-weight-bold ">(Your Personal Info Will Not Be Shared)</p>  
              <input type="number" name="mobilenumber" id="mobilenumber" className="form-control font-weight-bold" placeholder="Enter Your Mobile Number "></input>
              <label for="message" className="h2 text-light font-weight-bold my-3">Message</label>
              <textarea class="form-control" name="message" rows="7" id="message"></textarea>
               <input type="submit" value="Send" className="btn btn-primary btn-lg my-4" />  
            </div>
          </form>
          </div>  
        </div>
      </div>
    </>
  )
}

export default ContactForm
