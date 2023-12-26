// components/profile/navigation_buttons/NavigationButtons.tsx
import React from 'react';

const NavigationButtons = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex space-x-4">
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Activity</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">About</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Discussions</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Events</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Followers</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Following</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Messages</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Booked Events</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">History</button>
        <button className="text-gray-600 hover:text-gray-800 focus:outline-none">Settings</button>
      </div>
    </div>
  );
};

export default NavigationButtons;
