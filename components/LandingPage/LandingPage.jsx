'use client';

import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';
import Video from '@/components/Video/Video';
import CustomSlider from '@/components/Slider/CustomSlider';
import Banner from '@/components/Banner/Banner';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import {createContext, useRef} from 'react';

export const LangContext = createContext('');
export default function LandingPage({dict}) {

   const heroRef = useRef(null);
   const featuresRef = useRef(null);
   const demoRef = useRef(null);
   const reviewsRef = useRef(null);
   const downloadRef = useRef(null);
   const contactRef = useRef(null);

   const refs = {
      heroRef,
      featuresRef,
      demoRef,
      reviewsRef,
      downloadRef,
      contactRef
   };

   return (
      <LangContext.Provider value={dict}>
         <main>
            <Header refs={refs}/>
            <div ref={heroRef}>
               <Hero />
            </div>
            <div ref={featuresRef}>
               <Features />
            </div>
            {/*<div ref={demoRef}>*/}
            {/*   <Video />*/}
            {/*</div>*/}
            <div ref={reviewsRef}>
               <CustomSlider />
            </div>
            <div ref={downloadRef}>
               <Banner />
            </div>
            <div ref={contactRef}>
               <Contact />
            </div>
            <Footer refs={refs}/>
         </main>
      </LangContext.Provider>
   );
}
