import LandingPage from '@/components/LandingPage/LandingPage';
import { getDictionary } from '@/lib/dictionary';

async function Home({ params: { lang } }) {
   const dict = await getDictionary(lang);

   return (
      <LandingPage dict={dict}/>
   )
   ;
}

export default Home;