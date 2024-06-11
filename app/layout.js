import './modern-normalize.css';

import './globals.css';
import '../components/Header/header.css';
import '@/components/Hero/hero.css';
import '../components/Features/features.css';
import '../components/Video/video.css';
import '../components/Slider/slider.css';
import '../components/Banner/banner.css';
import '../components/Contact/contact.css';
import '../components/Footer/footer.css';
import '../components/LngSwitcher/lngSwitcher.css';
import './utils.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Source_Sans_3 } from 'next/font/google';


const sourceSans3 = Source_Sans_3 ({
   subsets: ['latin'],
   display: 'swap',
});


export const metadata = {
   title: 'BallHola',
   description: 'Our football app connects players for exciting matches',
};

export async function generateStaticParams() {
   return i18n.locales.map(locale => ({ lang: locale }));
}

function RootLayout({ children, params }) {
   return (
      <html lang='en'>
         <body className={sourceSans3.className}>{children}</body>
      </html>
   );
}

export default RootLayout;
