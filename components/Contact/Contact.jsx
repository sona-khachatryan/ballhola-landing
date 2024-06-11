'use client';

import {useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import {useTranslation} from 'react-i18next';
import Image from 'next/image';

function Contact() {
   
   const { t } = useTranslation();

   const [nameInputValue, setNameInputValue] = useState();
   const [emailInputValue, setEmailInputValue] = useState();
   const [messageInputValue, setMessageInputValue] = useState();

   const [hovered, setHovered] = useState(false);
   const [isDisabled, setIsDisabled] = useState(true);
   const [errorMessage, setErrorMessage] = useState('');

   const [messageIsSent, setMessageIsSent] = useState(false);

   useEffect(() => {
      const isValidEmail = (email) => {
         const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

         return emailRegex.test(email);
      };
      
      if(!emailInputValue || isValidEmail(emailInputValue)) {
         setErrorMessage('');
      } else {
         setErrorMessage(t('contact.invalidEmail'));
      }
      
   }, [emailInputValue]);

   useEffect(() => {
      if(nameInputValue && emailInputValue && messageInputValue && !errorMessage) {
         setIsDisabled(false);
      } else {
         setIsDisabled(true);
      }
   }, [nameInputValue, emailInputValue, messageInputValue, errorMessage]);

   useEffect(() => {
      let timeoutId;
      if(messageIsSent) {
         timeoutId = setTimeout(() => setMessageIsSent(false), 2000);
      }

      console.log(messageIsSent);

      return () => {
         clearTimeout(timeoutId);
      };
   }, [messageIsSent]);

   const handleSubmitClick = (e) => {

      e.preventDefault();

      emailjs
         .send('service_q1wwyb9', 'template_hphruvd', {
            from_name: nameInputValue,
            message: messageInputValue,
            reply_to: emailInputValue,
         }, {publicKey: 'Y1JiB3w3CaU2sM5HH'})
         .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            setMessageIsSent(true);
            setNameInputValue('');
            setMessageInputValue('');
            setEmailInputValue('');
         })
         .catch(err => {
            console.log('FAILED...', err);
         });
   };
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
      <div 
         className='container'
         id='contact'
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
                        {t('contact.info')}
                     </div>
                     <div className="contact-info__section-wrapper">
                        <div className='contact-info__section'>
                           <img className='contact-info__phone-icon' src='phone-vector.svg' alt='phone'/>
                           <div className='contact-info__text'>
                              <p className='contact-info__title'>
                                 {t('contact.phonenumber')}
                              </p>
                              <p className='contact-info__sub'>
                                  +(374) 98 02-67-19
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
                                 {t('contact.message')}
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
                           <p className='contact-info__title'>
                              {t('contact.sm')}
                           </p>
                           <div className='contact-info__socials'>
                              <a href='https://www.instagram.com/ballhola.app/'
                                 target="_blank" rel="noopener noreferrer">
                                 <img className='contact-info__socials-icon' src='instagram.svg' alt='instagram'/>
                              </a>
                              <a href='https://www.facebook.com/ballhola'
                                 target="_blank" rel="noopener noreferrer">
                                 <img className='contact-info__socials-icon' src='facebook.svg' alt='facebook'/>
                              </a>
                              <a href='https://www.linkedin.com/company/tesvan' target="_blank" rel="noopener noreferrer">
                                 <img className='contact-info__socials-icon' src='linkedin.svg' alt='linkedin'/>
                              </a>
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
                        {t('contact.form')}
                     </p>

                     <div>
                        <input
                           className='contact-form__input'
                           placeholder={t('contact.namePlaceholder')}
                           value={nameInputValue}
                           onChange={handleNameInputChange}
                        />
                     </div>
                     <div>
                        <input
                           className={`contact-form__input ${errorMessage ? 'input-error' : ''}`}
                           placeholder={t('contact.emailPlaceholder')}
                           value={emailInputValue}
                           onChange={handleEmailInputChange}
                        />
                        <p className='email__error'>{errorMessage}</p>
                     </div>
                     <textarea
                        className='contact-form__input contact-form__message-input'
                        placeholder={t('contact.messagePlaceholder')}
                        value={messageInputValue}
                        onChange={handleMessageInputChange}
                     />

                     <button
                        className={`contact-form__submit-btn ${isDisabled ? 'disabled' : ''}`}
                        disabled={isDisabled}
                        onClick={handleSubmitClick}
                     >{t('contact.submit')}
                     </button>

                  </div>
               </div>


               <div className={`${messageIsSent ? 'contact-form__toast' : 'invisible' }`}>{t('contact.toaster')}</div>


            </div>
         </div>
         {/*<img id='ball1' src='ball1.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>*/}
         {/*<img id='ball2' src='ball2.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>*/}
         {/*<img id='ball3' src='ball3.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>*/}
         {/*<img id='ball4' src='ball4.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>*/}
         {/*<img id='ball5' src='ball5.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>*/}
         {/*<img id='ball6' src='ball6.svg' alt='ball' className={hovered ? 'show-ball' : ''}/>*/}

         <Image id='ball1' src='ball1.svg' alt='ball' className={hovered ? 'show-ball' : ''} priority unoptimized height={100} width={100}/>
         <Image id='ball2' src='ball2.svg' alt='ball' className={hovered ? 'show-ball' : ''} priority unoptimized height={100} width={100}/>
         <Image id='ball3' src='ball3.svg' alt='ball' className={hovered ? 'show-ball' : ''} priority unoptimized height={100} width={100}/>
         <Image  id='ball4' src='ball4.svg' alt='ball' className={hovered ? 'show-ball' : ''} priority unoptimized height={100} width={100}/>
         <Image id='ball5' src='ball5.svg' alt='ball' className={hovered ? 'show-ball' : ''} priority unoptimized height={100} width={100}/>
         <Image id='ball6' src='ball6.svg' alt='ball' className={hovered ? 'show-ball' : ''} priority unoptimized height={100} width={100}/>



      </div>
   );
}

export default Contact;