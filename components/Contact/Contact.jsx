'use client';

import React, {useState} from 'react';

function Contact(props) {

   const [nameInputValue, setNameInputValue] = useState();
   const [emailInputValue, setEmailInputValue] = useState();
   const [messageInputValue, setMessageInputValue] = useState();

   const handleSubmitClick = () => {};
   const handleNameInputChange = () => {};
   const handleEmailInputChange = () => {};
   const handleMessageInputChange = () => {};

   return (
      <div className='contact-section container'>

         <div className='contact-form'>
            <p className='contact-form__title'>
               Contact Us
            </p>
            <input className='contact-form__name-input' placeholder='Enter your Name'/>
            <input className='contact-form__email-input' placeholder='Enter a valid email address'/>
            <input className='contact-form__message-input' placeholder='Enter your message'/>
            <button className='contact-form__submit-btn'>Submit</button>
         </div>

         <div className='contact-info'>
            <div className='contact-info__section'>
               <img className='contact-info__icon' src='phone-vector.svg' alt='phone'/>
               <p className='contact-info__title'>
                  Give Us a Call
               </p>
               <p className='contact-info__sub'>
                  + (374) 99-99-99
               </p>
            </div>
            <div className='contact-info__section'>
               <img className='contact-info__icon' src='message.svg' alt='message'/>
               <p className='contact-info__title'>
                  Send Us a Message
               </p>
               <p className='contact-info__sub'>
                  contanct@ballhola.app
               </p>
            </div>
            <div className='contact-info__section'>
               <p className='contact-info__title'>Social Media</p>
               <img className='contact-info__socials' src='instagram.svg' alt='instagram'/>
               <img className='contact-info__socials' src='facebook.svg' alt='facebook'/>
               <img className='contact-info__socials' src='linkedin.svg' alt='linkedin'/>
            </div>
         </div>

         <div className='contact-info__toast'></div>

         <div className='contact-section__animation'>
            <img/>
            <img/>
            <img/>
            <img/>
            <img/>
            <img/>
         </div>
      </div>
   );
}

export default Contact;