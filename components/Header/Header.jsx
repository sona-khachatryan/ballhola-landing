'use client';

import {useEffect, useState} from 'react';

function Header(props) {

   const [isActive, setIsActive] = useState(false);

   return (<>
      <header className='header container'>
         {/*<img/>*/}
         <img className='header__logo' src='Logo.svg' alt='logo'/>
         <nav>
            <ul className='header__menu'>
               <li>
                  <a className='header__link' href='#features'>Features</a>
               </li>
               <li>
                  <a className='header__link' href='#demo'>Demonstration</a>
               </li>
               <li>
                  <a className='header__link' href='#reviews'>Reviews</a>
               </li>
               <li>
                  <a className='header__link' href='#download'>Download</a>
               </li>
            </ul>
         </nav>
         <a className='header__btn' href='#contact'>Contact Us</a>
         <button onClick={() => setIsActive(!isActive)} className={`hamburger ${isActive ? 'is-active' : ''}`}>
            <div className='bar'></div>
         </button>
      </header>
      <nav>
         <ul className={`mobile-nav ${isActive ? 'is-active' : ''}`}>
            <li>
               <a href='#features'>Features</a>
            </li>
            <li>
               <a href='#demo'>Demonstration</a>
            </li>
            <li>
               <a href='#reviews'>Reviews</a>
            </li>
            <li>
               <a href='#download'>Download</a>
            </li>
            <li>
               <a href='#contact'>Contact Us</a>
            </li>
         </ul>
      </nav>
   </>);
}

export default Header;