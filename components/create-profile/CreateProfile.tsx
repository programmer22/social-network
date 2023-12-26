// CreateProfile.tsx
import React, { useState } from 'react';

interface CreateProfileProps {
  userEmail: string | undefined;
}

interface ProfileState {
  email: string;
  firstName: string;
  lastName: string;
}

const CreateProfile: React.FC<CreateProfileProps> = ({ userEmail }) => {
  const [profile, setProfile] = useState<ProfileState>({
    email: userEmail || '',
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log('Profile data:', profile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          disabled // Email is not editable
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input 
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default CreateProfile;
