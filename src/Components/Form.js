import "./FormStyle.css";
import React from 'react';
import { Link } from "react-router-dom";
import {MdOutlineEmail} from "react-icons/md";
import {BsWhatsapp} from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o6dxzmn', 'template_63qxqbm', form.current, 'evJrG3OPne9hpLjRy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("Your Data Has Been Submitted !");
      e.target.reset();
  };
  
  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contactElements">
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" style={{color:"white"}}/>
            <h4>Email</h4>
            <Link to = "mailto:vravi084@gmail.com" target="_blank" style={{color:"yellow"}}>Send a messege</Link>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" style={{color:"white"}}/>
            <h4>WhatsApp</h4>
            <Link to = "https://wa.me/+919161621334" target="_blank" style={{color:"yellow"}}>Send a messege</Link>
          </article>
        </div>

        {/* End of contact options */}
          <form ref = {form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="messege" rows="6" placeholder="Your Messege" required></textarea>
            <button type="submit" className="btn"> Send Messege </button>

          </form>
      </div>
      </div>
    </section>
  )
}

export default Form;
