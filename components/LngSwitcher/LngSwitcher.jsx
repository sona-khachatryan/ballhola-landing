'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';
import i18n from 'i18next';

function LngSwitcher(props) {
   const [isActive, setIsActive] = useState(false);
   const router = useRouter();

   const changeLanguageHandler = (lang) => {
      i18n.changeLanguage(lang);
   };
    
   return (
      <div id='lng-switcher-container'>
         <div id='lng-switcher-icon' onClick={() => setIsActive(!isActive)}>
            <img id='lng-globe' src='globe.svg' alt='globe' className={`${isActive ? 'is-active' : ''}`}/>
            <img id='lng-arrow' src='arrow.svg' alt='arrow' className={`${isActive ? 'is-active' : ''}`}/>
         </div>
         <div id='lng-dropdown' className={`${isActive ? 'is-active' : ''}`}>
            <p className='lng-options' onClick={() => changeLanguageHandler('en')}>Eng</p>
            <p className='lng-options' onClick={() => changeLanguageHandler('am')}>Arm</p>
            <p className='lng-options' onClick={() => changeLanguageHandler('ru')}>Rus</p>
         </div>
      </div>
   );
}

export default LngSwitcher;