'use client';

import {useTranslation} from 'react-i18next';
import Image from 'next/image';

function Features(props) {

   const { t } = useTranslation();
   
   return (<>
      <section id='features' className='features container'>
         <p className='features__title'>{t('features.featuresTitle')}</p>
         <div className='features__icon-container'>
            {/*<img className='wave' src='wave.svg' alt='vector' />*/}
            {/*<Image className='wave' src='wave.svg' alt='vector' priority unoptimized height={401}*/}
            {/*       width={548}/>*/}
            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  {/*<img className='features__rectangle' src='Rectangle.svg' alt='circle' />*/}
                  {/*<img className='features__vector chat' src='chat.svg'  alt='chat' />*/}
                  <Image className='features__rectangle' src='Rectangle.svg' alt='circle' priority unoptimized height={74}
                     width={74}/>
                  <Image className='features__vector chat' src='chat.svg'  alt='chat' priority unoptimized height={43}
                     width={40}/>
               </div>
               <p className='features__icon-description'>{t('features.chat')}</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  {/*<img className='features__rectangle' src='Rectangle.svg' alt='circle' />*/}
                  {/*<img className='features__vector pencil' style={{zIndex: 30}} src='pencil.svg'  alt='pencil'/>*/}
                  {/*<img className='features__vector paper' src='Vector.svg' alt='paper'/>*/}
                  <Image className='features__rectangle' src='Rectangle.svg' alt='circle' priority unoptimized height={74}
                     width={74}/>
                  <Image className='features__vector pencil' style={{zIndex: 30}} src='pencil.svg'  alt='pencil' priority unoptimized height={26}
                     width={25}/>
                  <Image  className='features__vector paper' src='Vector.svg' alt='paper' priority unoptimized height={31}
                     width={34}/>
               </div>
               <p className='features__icon-description'>{t('features.game')}</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  {/*<img className='features__rectangle' src='Rectangle.svg' alt='circle' />*/}
                  {/*<img className='features__vector stadium' src='stadium.svg' alt='stadium'/>*/}
                  <Image className='features__rectangle' src='Rectangle.svg' alt='circle' priority unoptimized height={74}
                     width={74}/>
                  <Image className='features__vector stadium' src='stadium.svg' alt='stadium' priority unoptimized height={38}
                     width={37}/>
               </div>
               <p className='features__icon-description'>{t('features.stadiums')}</p>
            </div>

            <div className='features__icon-text-group'>
               <div className='features__icon'>
                  {/*<img className='features__rectangle' src='Rectangle.svg' alt='circle' />*/}
                  {/*<img className='features__vector invitation' src='invitation.svg' alt='invitation'/>*/}
                  <Image className='features__rectangle' src='Rectangle.svg' alt='circle' priority unoptimized height={74}
                     width={74}/>
                  <Image className='features__vector invitation' src='invitation.svg' alt='invitation' priority unoptimized height={42}
                     width={42}/>
               </div>
               <p className='features__icon-description'>{t('features.invitation')}</p>
            </div>

         </div>
      </section>
   </>);
}

export default Features;