// pages/_app.tsx
import { ClerkProvider } from '@clerk/nextjs';
import '../app/globals.css'; // Adjust the path to your global styles if necessary
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
