'use client';

import React from 'react';

function Footer(props) {
   return (
      <div>
         <footer className='footer container'>
            <nav>
               <ul className='footer__menu'>
                  <li>
                     <img className='footer__logo' src='Logo.svg' alt='logo'/>
                  </li>
                  <li>
                     <a className='footer__link' href='#features'>Features</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#demo'>Demonstration</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#reviews'>Reviews</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#download'>Download</a>
                  </li>
                  <li>
                     <a className='footer__link' href='#contact'>Contact Us</a>
                  </li>
               </ul>
            </nav>
            <p className='footer__text'>© 2024 BallHola All rights reserved</p>
         </footer>
      </div>
   );
}

export default Footer;