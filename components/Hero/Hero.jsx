'use client';
import {useTranslation} from 'react-i18next';

function Hero(props) {
   const { t } = useTranslation();

   return (<>
      <section className='hero container'>
         <div className='hero__text-container'>
            <div className='hero__text__1'>
               {t('hero.discover')}
            </div>
            <div className='hero__text__2'>
               {t('hero.our')} <span>{t('hero.app')}</span> {t('hero.connects')} <br/>
               {t('hero.players')} <span> {t('hero.matches')}</span>
            </div>
            <div className='hero__text__3'>
               {t('hero.welcome')}
               <br/>
               {t('hero.ready')}
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