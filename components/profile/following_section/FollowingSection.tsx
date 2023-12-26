import React from 'react';
import { FaUserCircle, FaUserMinus } from 'react-icons/fa'; // Using react-icons for user avatars and unfollow icons

const FollowingSection = () => {
  // Sample data for following list (you can replace this with real data)
  const followingList = [
    { name: "Following 1", id: 1 },
    { name: "Following 2", id: 2 },
    { name: "Following 3", id: 3 },
    { name: "Following 4", id: 4 },
    { name: "Following 5", id: 5 },
    // Add more followings as needed
  ];

  return (
    <div className="mb-4 p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Following</h3>
      <ul>
        {followingList.map(following => (
          <li key={following.id} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
            <div className="flex items-center">
              <FaUserCircle className="text-gray-400 text-2xl mr-3" />
              <span className="text-gray-700">{following.name}</span>
            </div>
            <button className="text-red-500 hover:text-red-600 focus:outline-none">
              <FaUserMinus />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowingSection;
