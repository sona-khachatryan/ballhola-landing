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

            <a href='https://apps.apple.com/am/app/ballhola/id6477875455' target="_blank" rel="noopener noreferrer">
               <img className='banner__appstore-logo' src='app-store-logo.svg' alt='app store'/>
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.tesvan.ballhola&pcampaignid=web_share'
               target="_blank" rel="noopener noreferrer">
               <img className='banner__googleplay-logo' src='google-play-logo.svg' alt='google play'/>
            </a>
         </div>
      </div>
   );
}

export default Banner;