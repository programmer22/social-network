// pages/_app.tsx
import { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import '../app/globals.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ClerkProvider>
  );
}

export default MyApp;
