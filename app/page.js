import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Video from '@/components/Video/Video';
import CustomSlider from '@/components/Slider/CustomSlider';
import Banner from '@/components/Banner/Banner';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
   return (
      <main>
         <Header/>
         <Hero/>
         <Features/>
         <Video/>
         <CustomSlider/>
         <Banner/>
         <Contact/>
         <Footer/>
      </main>
   );
}
