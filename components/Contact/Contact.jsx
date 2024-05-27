'use client';

import React, {useEffect, useState} from 'react';

function Contact(props) {

   const [nameInputValue, setNameInputValue] = useState();
   const [emailInputValue, setEmailInputValue] = useState();
   const [messageInputValue, setMessageInputValue] = useState();

   const [hovered, setHovered] = useState(false);
   const [isDisabled, setIsDisabled] = useState(true);
   const [errorMessage, setErrorMessage] = useState('');

   useEffect(() => {
      const isValidEmail = (email) => {
         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

         return emailRegex.test(email);
      };
      
      if(!emailInputValue || isValidEmail(emailInputValue)) {
         setErrorMessage('');
      } else {
         setErrorMessage('Please enter a valid email address');
      }
      
   }, [emailInputValue]);

   useEffect(() => {
      if(nameInputValue && emailInputValue && messageInputValue && !errorMessage) {
         setIsDisabled(false);
      } else {
         setIsDisabled(true);
      }
   }, [nameInputValue, emailInputValue, messageInputValue, errorMessage]);

   const handleSubmitClick = () => {};
   const handleNameInputChange = (e) => {
      setNameInputValue(e.target.value);
   };
   const handleEmailInputChange = (e) => {
      setEmailInputValue(e.target.value);
   };
   const handleMessageInputChange = (e) => {
      setMessageInputValue(e.target.value);
   };

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

                     <div>
                        <input
                           className='contact-form__input'
                           placeholder='Enter your name'
                           value={nameInputValue}
                           onChange={handleNameInputChange}
                        />
                     </div>
                     <div>
                        <input
                           className={`contact-form__input ${errorMessage ? 'input-error' : ''}`}
                           placeholder='Enter a valid email address'
                           value={emailInputValue}
                           onChange={handleEmailInputChange}
                        />
                        <p className='email__error'>{errorMessage}</p>
                     </div>
                     <textarea
                        className='contact-form__input contact-form__message-input'
                        placeholder='Enter your message'
                        value={messageInputValue}
                        onChange={handleMessageInputChange}
                     />

                     <button
                        className={`contact-form__submit-btn ${isDisabled ? 'disabled' : ''}`}
                        disabled={isDisabled}
                     >Submit
                     </button>

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