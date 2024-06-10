'use client';

import LandingPage from '@/components/LandingPage/LandingPage';
import i18n from '@/i18next';
import {I18nextProvider} from 'react-i18next';
function Home() {
   return (
      <I18nextProvider i18n={i18n}>
         <LandingPage/>
      </I18nextProvider>
   )
   ;
}

export default Home;