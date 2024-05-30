'use client';

import React, {useContext} from 'react';
import {LangContext} from '@/components/LandingPage/LandingPage';

function Features(props) {

   const dict = useContext(LangContext);
   
   return (<>
      <section id='features' className='features container'>
         <p className='features__title'>{dict.features.featuresTitle}</p>
         <div className='features__icon-container'>
            <img className='wave' src='wave.svg'/>
            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector chat' src='chat.svg'/>
               </div>
               <p className='features__icon-description'>{dict.features.chat}</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector pencil' style={{zIndex: 30}} src='pencil.svg'/>
                  <img className='features__vector paper' src='Vector.svg'/>
               </div>
               <p className='features__icon-description'>{dict.features.game}</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector stadium' src='stadium.svg'/>
               </div>
               <p className='features__icon-description'>{dict.features.stadiums}</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector invitation' src='invitation.svg'/>
               </div>
               <p className='features__icon-description'>{dict.features.invitation}</p>
            </div>

         </div>
      </section>
   </>);
}

export default Features;