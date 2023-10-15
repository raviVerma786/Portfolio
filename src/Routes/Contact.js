import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer"
import HeroImg2 from '../Components/HeroImg2';
import Form from "../Components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT ME" text="I am open to talk regarding internships or full time opportunities."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;
