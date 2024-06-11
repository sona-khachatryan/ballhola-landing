'use client';

import {useTranslation} from 'react-i18next';
import Image from 'next/image';

function Banner(props) {
    
   const { t } = useTranslation();
    
   return (
      <div id='download' className='banner container'>
         {/*<img className='banner__backdrop' src='backdrop.svg' alt='backdrop'/>*/}
         <Image className='banner__backdrop' src='backdrop.svg' alt='backdrop' priority unoptimized height={212} width={390}/>
         <div className='banner__top-bg'>
            <p className='banner__title'>
               {t('banner.bannerTitle1')}
            </p>
            <p className='banner__description'>
               {t('banner.bannerDescription1')}
            </p>
         </div>
         <div className='banner__bottom-bg'>
            <p className='banner__title-2'>
               {t('banner.bannerTitle2')}
            </p>
            <p className='banner__description-2'>
               {t('banner.bannerDescription2')}
            </p>

             <div className='banner-logo-container'>
                 <a href='https://apps.apple.com/am/app/ballhola/id6477875455' target="_blank"
                    rel="noopener noreferrer">
                     {/*<img className='banner__appstore-logo' src='app-store-logo.svg' alt='app store'/>*/}
                     <Image className='banner__appstore-logo' src='app-store-logo.svg' alt='app store' priority
                            unoptimized height={25} width={69}/>
                 </a>
                 <a href='https://play.google.com/store/apps/details?id=com.tesvan.ballhola&pcampaignid=web_share'
                    target="_blank" rel="noopener noreferrer">
                     {/*<img className='banner__googleplay-logo' src='google-play-logo.svg' alt='google play'/>*/}
                     <Image className='banner__googleplay-logo' src='google-play-logo.svg' alt='google play' priority
                            unoptimized height={25} width={77}/>
                 </a>
             </div>
         </div>
      </div>
   );
}

export default Banner;