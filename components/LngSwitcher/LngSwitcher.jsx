'use client';

import React, {useState} from 'react';

function LngSwitcher(props) {
   const [isActive, setIsActive] = useState(false);
    
   return (
      <div id='lng-switcher-container'>
         <div id='lng-switcher-icon' onClick={() => setIsActive(!isActive)}>
            <img id='lng-globe' src='globe.svg' className={`${isActive ? 'is-active' : ''}`}/>
            <img id='lng-arrow' src='arrow.svg' className={`${isActive ? 'is-active' : ''}`}/>
         </div>
         <div id='lng-dropdown' className={`${isActive ? 'is-active' : ''}`}>
            <p className='lng-options'>Eng</p>
            <p className='lng-options'>Arm</p>
            <p className='lng-options'>Rus</p>
         </div>
      </div>
   );
}

export default LngSwitcher;