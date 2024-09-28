'use client';

import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import LandingPageComponent from '@/components/landing-page'; // Import the LandingPageComponent

Amplify.configure(outputs);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const publicRoutes = ['/', '/about', '/contact', '/sign-in', '/sign-up'];

  const isPublicRoute = publicRoutes.includes(router.pathname);

  if (isPublicRoute) {
    // Render LandingPageComponent without requiring authentication
    return (
      <div>
        <LandingPageComponent />
        <Component {...pageProps} /> {/* Render the page for other public routes */}
      </div>
    );
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="absolute-center">
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <Component {...pageProps} />
        </div>
      )}
    </Authenticator>
  );
}
