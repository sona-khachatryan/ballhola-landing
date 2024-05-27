'use client';

import React from 'react';

function Footer({refs}) {

   const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
   };

   return (
      <div>
         <footer className='footer container'>
            <nav>
               <ul className='footer__menu'>
                  <li>
                     <img className='footer__logo' src='Logo.svg' alt='logo' onClick={() => scrollToSection(refs.heroRef)}/>
                  </li>
                  <li>
                     <a className='footer__link' href='#features' onClick={() => scrollToSection(refs.featuresRef)}>Features</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#demo' onClick={() => scrollToSection(refs.demoRef)}>Demonstration</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#reviews' onClick={() => scrollToSection(refs.reviewsRef)}>Reviews</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#download' onClick={() => scrollToSection(refs.downloadRef)}>Download</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#contact' onClick={() => scrollToSection(refs.contactRef)}>Contact Us</a>
                  </li>
               </ul>
            </nav>
            <p className='footer__text'>© 2024 BallHola All rights reserved</p>
         </footer>
      </div>
   );
}

export default Footer;