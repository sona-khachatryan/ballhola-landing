'use client';

import React from 'react';

function Banner(props) {
   return (
      <div id='download' className='banner container'>
         <img className='banner__backdrop' src='backdrop.svg' alt='backdrop'/>
         <div className='banner__top-bg'>
            <p className='banner__title'>
                Life is all about Sport
            </p>
            <p className='banner__description'>
                Find out about BallHola, a great way of staying on top of your favourite sport events!
            </p>
         </div>
         <div className='banner__bottom-bg'>
            <p className='banner__title-2'>
                So what are you waiting for?
            </p>
            <p className='banner__description-2'>
                Choose your native platform and get started!
            </p>
            <img className='banner__appstore-logo' src='app-store-logo.svg' alt='app store'/>
            <img className='banner__googleplay-logo' src='google-play-logo.svg' alt='google play'/>
         </div>
      </div>
   );
}

export default Banner;