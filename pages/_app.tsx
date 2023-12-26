// pages/_app.tsx
import { ClerkProvider } from '@clerk/nextjs';
import '../app/globals.css'; // Adjust the path to your global styles if necessary

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider >
      <Component {...pageProps} />
    </ClerkProvider>
  );
}

export default MyApp;
