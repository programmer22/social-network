import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  const coverImageUrl = "https://source.unsplash.com/random/1920x1080?cityscape";
  const profileImageUrl = "https://source.unsplash.com/random/100x100?person";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="h-48 w-full" style={{ backgroundImage: `url(${coverImageUrl})`, backgroundSize: 'cover' }}></div>
      <div className="flex justify-between p-4">
        <div className="flex">
          <div className="h-24 w-24 rounded-full border-4 border-white mr-3 overflow-hidden">
            <Image src={profileImageUrl} alt="Profile" width={96} height={96} className="rounded-full" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Nick Roe</h2>
            <p className="text-gray-600">Member since August 2023</p>
            <p className="text-gray-600">Dallas, Texas</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Add Friend</button>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Follow</button>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Message</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;

