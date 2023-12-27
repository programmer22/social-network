// CreateProfilePage.tsx
import React from 'react';
import { useUser } from '@clerk/nextjs';
import CreateProfile from '../components/create-profile/CreateProfile';

export default function CreateProfilePage() {
  const { user } = useUser();

  // Assuming 'user' is of a type where 'email' might not be a recognized property,
  // you can use a type assertion (if you are sure the property exists):
  const userEmail = user ? (user as any).email : '';

  return (
    <div className="container mx-auto px-4 py-8">
      <CreateProfile userEmail={userEmail} />
    </div>
  );
}

