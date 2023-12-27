// pages/_app.tsx
import { AppProps } from 'next/app';
import { ClerkProvider, ClerkProviderProps } from '@clerk/nextjs';
import '../app/globals.css';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  // ClerkProviderProps should be defined according to your Clerk configuration
  const clerkProps: ClerkProviderProps = {
    frontendApi: process.env.NEXT_PUBLIC_CLERK_FRONTEND_API,
  };

  return (
    <ClerkProvider {...clerkProps}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ClerkProvider>
  );
}

export default MyApp;
