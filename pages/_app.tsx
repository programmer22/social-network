// pages/_app.tsx
import { AppProps } from 'next/app';
import { ClerkProvider, ClerkLoaded } from '@clerk/nextjs';
import '../app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_FRONTEND_API}>
      <ClerkLoaded>
        <Component {...pageProps} />
      </ClerkLoaded>
    </ClerkProvider>
  );
}

export default MyApp;
