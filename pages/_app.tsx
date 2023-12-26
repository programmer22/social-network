// CreateProfilePage.tsx
import React from 'react';
import { useUser, User } from "@clerk/nextjs";
import CreateProfile from '../components/create-profile/CreateProfile';

export default function CreateProfilePage() {
  const { user } = useUser() as { user: User | null };

  return (
    <div className="container mx-auto px-4 py-8">
      <CreateProfile userEmail={user?.email} />
    </div>
  );
}

