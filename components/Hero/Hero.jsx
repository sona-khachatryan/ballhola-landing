import React, {useContext} from 'react';
import {LangContext} from '@/components/LandingPage/LandingPage';

function Hero(props) {
   const dict = useContext(LangContext);

   return (<>
      <section className='hero container'>
         <div className='hero__text-container'>
            <div className='hero__text__1'>
               {dict.hero.discover}
            </div>
            <div className='hero__text__2'>
               {dict.hero.our} <span>{dict.hero.app}</span> {dict.hero.connects} <br/>
               {dict.hero.players} <br/> <span>  {dict.hero.matches}</span>
            </div>
            <div className='hero__text__3'>
               {dict.hero.welcome}
               <br/>
               {dict.hero.ready}
            </div>
         </div>
         <div className='hero__image-container '>
            <img className='hero__player-image' src='player.svg' alt='player'/>
            <img className='hero__phone-image' src='phone.svg' alt='phone'/>
         </div>
         <div className='hero__logo-container'>
            <a href='https://apps.apple.com/am/app/ballhola/id6477875455' target="_blank" rel="noopener noreferrer">
               <img className='hero__appstore-logo' src='app-store-logo.svg' alt='app store'/>
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.tesvan.ballhola&pcampaignid=web_share' target="_blank" rel="noopener noreferrer">
               <img className='hero__googleplay-logo' src='google-play-logo.svg' alt='google play'/>
            </a>
         </div>
      </section>
   </>);
}

export default Hero;