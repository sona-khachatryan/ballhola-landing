import React from 'react';

function Features(props) {
   return (<>
      <section className='features container'>
         <p className='features__title'>What will you get?</p>
         <div className='features__icon-container'>
            <img className='wave' src='wave.svg'/>
            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector chat' src='chat.svg'/>
               </div>
               <p className='features__icon-description'>Chat with players</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector pencil' style={{zIndex: 30}} src='pencil.svg'/>
                  <img className='features__vector paper' src='Vector.svg'/>
               </div>
               <p className='features__icon-description'>Create a game</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector stadium' src='stadium.svg'/>
               </div>
               <p className='features__icon-description'>Find nearby stadiums</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  <img className='features__rectangle' src='Rectangle.svg'/>
                  <img className='features__vector invitation' src='invitation.svg'/>
               </div>
               <p className='features__icon-description'>Receive an invitation</p>
            </div>

         </div>
      </section>
   </>);
}

export default Features;