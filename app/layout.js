// import './modern-normalize.css';



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

//👇 Configure our font object
const sourceSans3 = Source_Sans_3 ({
   subsets: ['latin'],
   display: 'swap',
});


export const metadata = {
   title: 'Ballhola Landing',
   description: '',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={sourceSans3.className}>{children}</body>
      </html>
   );
}
