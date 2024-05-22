import React from 'react';

function Hero(props) {
   return (<>
      <section className='hero container'>
         <div className='hero__text-container'>
            <div className='hero__text__1'>Discover all about Football with US</div>
            <div className='hero__text__2'>
                Our <span>football app</span> connects <br/> players for
                exciting <br/> <span>matches.</span>
            </div>
            <div className='hero__text__3'>
                Welcome to the ultimate football experience at BallHola!
               <br/>
                Ready to play? Let's start.
            </div>
         </div>
         <div className='hero__image-container '>
            <img className='hero__player-image' src='player.svg' alt='player'/>
            <img className='hero__phone-image' src='phone.svg' alt='phone'/>
         </div>
         <div className='hero__logo-container'>
            <img className='hero__appstore-logo' src='app-store-logo.svg' alt='app store'/>
            <img className='hero__googleplay-logo' src='google-play-logo.svg' alt='google play'/>
         </div>
      </section>
   </>);
}

export default Hero;