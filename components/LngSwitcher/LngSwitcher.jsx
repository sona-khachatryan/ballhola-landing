'use client';

import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

function LngSwitcher(props) {
   const [isActive, setIsActive] = useState(false);
   const router = useRouter();
    
   return (
      <div id='lng-switcher-container'>
         <div id='lng-switcher-icon' onClick={() => setIsActive(!isActive)}>
            <img id='lng-globe' src='globe.svg' className={`${isActive ? 'is-active' : ''}`}/>
            <img id='lng-arrow' src='arrow.svg' className={`${isActive ? 'is-active' : ''}`}/>
         </div>
         <div id='lng-dropdown' className={`${isActive ? 'is-active' : ''}`}>
            <p className='lng-options' onClick={() => router.push('/en')}>Eng</p>
            <p className='lng-options' onClick={() => router.push('/hy')}>Arm</p>
            <p className='lng-options' onClick={() => router.push('/ru')}>Rus</p>
         </div>
      </div>
   );
}

export default LngSwitcher;