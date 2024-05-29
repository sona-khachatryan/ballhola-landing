import LandingPage from '@/components/LandingPage/LandingPage';
import { getDictionary } from '@/lib/dictionary';

async function Home({ params: { lang } }) {
   const dict = await getDictionary(lang);

   return (
      <div>
         {dict.contact.form}
         <LandingPage dict={dict}/>
      </div>
   )
   ;
}

export default Home;