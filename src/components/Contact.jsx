import React from "react";
import { contact } from "../data";
import Logo from "../assets/img/logo.svg";
import Social from "./Social";

const Contact = () => {
  return (
    <section
      className='section before:content-ornament before:justify-center before:flex lg:before:mb-[44px]'
      id='contact'
    >
      <div className='container mx-auto'>
        <h2 className='section-title text-accent'>{contact.title}</h2>
        <p className='section-subtitle'>{contact.subtitle}</p>
        {/* logo */}
        <div className='max-w-[200px] lg:max-w-xs mx-auto mb-28'>
          <img src={Logo} alt='logo' className='w-full' />
        </div>
        {/* social */}
        <div className='flex justify-center'>
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Contact;
