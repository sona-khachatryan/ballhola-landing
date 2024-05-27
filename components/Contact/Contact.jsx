'use client';

import React, {useEffect, useState} from 'react';

function Contact(props) {

   const [nameInputValue, setNameInputValue] = useState();
   const [emailInputValue, setEmailInputValue] = useState();
   const [messageInputValue, setMessageInputValue] = useState();

   const [hovered, setHovered] = useState(false);

   useEffect(() => {
      console.log('hovered', hovered);
   }, [hovered]);

   const handleSubmitClick = () => {};
   const handleNameInputChange = () => {};
   const handleEmailInputChange = () => {};
   const handleMessageInputChange = () => {};

   return (
      <div className='container'
         style={{position: 'relative'}}
      >
         <div className='contact-section-wrapper'>
            <div className='contact-section'
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}
            >

               <div className='contact-info-wrapper'>
                  <div className='contact-info'>
                     <div className='contact-info__section-title'>
                         Contact information
                     </div>
                     <div className="contact-info__section-wrapper">
                        <div className='contact-info__section'>
                           <img className='contact-info__phone-icon' src='phone-vector.svg' alt='phone'/>
                           <div className='contact-info__text'>
                              <p className='contact-info__title'>
                                  Give Us a Call
                              </p>
                              <p className='contact-info__sub'>
                                  + (374) 99-99-99
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className='contact-info__line1'></div>

                     <div className="contact-info__section-wrapper message-wrapper">
                        <div className='contact-info__section'>
                           <img className='contact-info__message-icon' src='message.svg' alt='message'/>
                           <div className='contact-info__text'>
                              <p className='contact-info__title'>
                                  Send Us a Message
                              </p>
                              <p className='contact-info__sub'>
                                  contanct@ballhola.app
                              </p>
                           </div>
                        </div>
                     </div>

                     <div className='contact-info__line2'></div>

                     <div className="contact-info__section-wrapper">
                        <div className='contact-info__section socials-section'>
                           <p className='contact-info__title'>Social Media</p>
                           <div className='contact-info__socials'>
                              <img className='contact-info__socials-icon' src='instagram.svg' alt='instagram'/>
                              <img className='contact-info__socials-icon' src='facebook.svg' alt='facebook'/>
                              <img className='contact-info__socials-icon' src='linkedin.svg' alt='linkedin'/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='contact-info__line'></div>

               <div className='contact-form-wrapper'>
                  <div
                     className='contact-form'
                  >
                     <p className='contact-form__title'>
                         Contact Us
                     </p>
                     <input className='contact-form__input' placeholder='Enter your name'/>
                     <input className='contact-form__input' placeholder='Enter a valid email address'/>
                     <textarea className='contact-form__input contact-form__message-input'
                        placeholder='Enter your message'/>
                     <button className='contact-form__submit-btn'>Submit</button>
                  </div>
               </div>


               <div className='contact-info__toast'></div>
            </div>
         </div>
         <img id='ball1' src='ball1.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>
         <img id='ball2' src='ball2.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>
         <img id='ball3' src='ball3.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>
         <img id='ball4' src='ball4.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>
         <img id='ball5' src='ball5.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>
         <img id='ball6' src='ball6.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>

      </div>
   );
}

export default Contact;