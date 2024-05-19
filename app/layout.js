// import './modern-normalize.css';
import './globals.css';
import '../components/Header/header.css';
import '@/components/Hero/hero.css';
import '../components/Features/features.css';
import './utils.css';

export const metadata = {
   title: 'Ballhola Landing',
   description: '',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
