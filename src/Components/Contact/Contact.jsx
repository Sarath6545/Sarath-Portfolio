import './Contact.css'
import React from 'react'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { useState } from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "95378999-d38a-4edd-b8a1-fb2ac2c47722");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
          alert('email has bee sent succesfully')
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nostrum necessitatibus rerum doloribus placeat ipsum praesentium commodi, aspernatur in eaque possimus reprehenderit inventore amet repellendus, fugiat nobis. Soluta, omnis voluptate?</p>
                <div className="contact-details">
                    <div className='contact-detail'>
                        <img src={mail_icon} alt="" /><p>kadiyalasarathkumarkkd@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt="" /><p>+91 9347136545</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt="" /><p> Kakinada, AndhraPradesh.</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='enter your email' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name= "message" rows="7"  placeholder='enter your message here'></textarea>
                <button className="contact-submit" type='submit'>Submit now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
