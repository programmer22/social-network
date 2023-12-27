// CreateProfilePage.tsx
import React from "react";
import { useUser } from "@clerk/nextjs";
import CreateProfile from "../components/create-profile/CreateProfile";

// Define the User type based on what you expect from Clerk
interface User {
  email: string;
  // Include other user properties you expect
}

export default function CreateProfilePage() {
  const { user } = useUser();

  return (
    <div className="container mx-auto px-4 py-8">
      <CreateProfile userEmail={user?.email} />
    </div>
  );
}


