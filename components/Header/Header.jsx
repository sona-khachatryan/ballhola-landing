'use client';

import {useEffect, useState} from 'react';
import LngSwitcher from "@/components/LngSwitcher/LngSwitcher";

function Header({refs}) {

   const [isActive, setIsActive] = useState(false);
   const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
   };

   return (<>
      <header className='header container'>
         {/*<img/>*/}
         <img className='header__logo' src='Logo.svg' alt='logo'/>
         <nav>
            <ul className='header__menu'>
               <li>
                  <a className='header__link' href='#features' onClick={() => scrollToSection(refs.featuresRef)}>Features</a>
               </li>
               <li>
                  <a className='header__link' href='#demo' onClick={() => scrollToSection(refs.demoRef)}>Demonstration</a>
               </li>
               <li>
                  <a className='header__link' href='#reviews' onClick={() => scrollToSection(refs.reviewsRef)}>Reviews</a>
               </li>
               <li>
                  <a className='header__link' href='#download' onClick={() => scrollToSection(refs.downloadRef)}>Download</a>
               </li>
            </ul>
         </nav>
         <div id='header__right'>
            <a className='header__btn' href='#contact' onClick={() => scrollToSection(refs.contactRef)}>Contact Us</a>
            <LngSwitcher/>
            <button onClick={() => setIsActive(!isActive)} className={`hamburger ${isActive ? 'is-active' : ''}`}>
               <div className='bar'></div>
            </button>
         </div>
      </header>
      <nav>
         <ul className={`mobile-nav ${isActive ? 'is-active' : ''}`}>
            <li>
            <a href='#features' onClick={() => scrollToSection(refs.featuresRef)}>Features</a>
            </li>
            <li>
               <a href='#demo' onClick={() => scrollToSection(refs.demoRef)}>Demonstration</a>
            </li>
            <li>
               <a href='#reviews' onClick={() => scrollToSection(refs.reviewsRef)}>Reviews</a>
            </li>
            <li>
               <a href='#download' onClick={() => scrollToSection(refs.downloadRef)}>Download</a>
            </li>
            <li>
               <a href='#contact' onClick={() => scrollToSection(refs.contactRef)}>Contact Us</a>
            </li>
         </ul>
      </nav>
   </>);
}

export default Header;