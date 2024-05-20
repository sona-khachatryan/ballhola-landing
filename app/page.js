import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Features from '@/components/Features/Features';

export default function Home() {
   return (
      <main>
         <Header/>
         <Hero/>
         <Features/>
      </main>
   );
}
