'use client';

import {useContext} from 'react';
import {LangContext} from '@/components/LandingPage/LandingPage';

function Footer({refs}) {

   const dict = useContext(LangContext);

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
                     <a className='footer__link' href='#features' onClick={() => scrollToSection(refs.featuresRef)}>{dict.nav.features}</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#demo' onClick={() => scrollToSection(refs.demoRef)}>{dict.nav.demo}</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#reviews' onClick={() => scrollToSection(refs.reviewsRef)}>{dict.nav.reviews}</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#download' onClick={() => scrollToSection(refs.downloadRef)}>{dict.nav.download}</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#contact' onClick={() => scrollToSection(refs.contactRef)}>{dict.nav.contact}</a>
                  </li>
               </ul>
            </nav>
            <p className='footer__text'>{dict.footer.rights}</p>
         </footer>
      </div>
   );
}

export default Footer;