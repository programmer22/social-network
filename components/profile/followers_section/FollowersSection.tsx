import React from 'react';
import { FaUserCircle, FaUserPlus } from 'react-icons/fa'; // Using react-icons for user avatars and follow-back icons

const FollowersSection = () => {
  // Sample data for followers (you can replace this with real data)
  const followersList = [
    { name: "Follower 1", id: 1 },
    { name: "Follower 2", id: 2 },
    { name: "Follower 3", id: 3 },
    { name: "Follower 4", id: 4 },
    { name: "Follower 5", id: 5 },
    // Add more followers as needed
  ];

  return (
    <div className="mb-4 p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Followers</h3>
      <ul>
        {followersList.map(follower => (
          <li key={follower.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
            <div className="flex items-center">
              <FaUserCircle className="text-gray-400 text-2xl mr-3" />
              <span className="text-gray-700">{follower.name}</span>
            </div>
            <button className="text-green-500 hover:text-green-600 focus:outline-none">
              <FaUserPlus />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersSection;
