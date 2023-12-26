import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const SocialAccounts = () => {
  return (
    <div className="w-2/3 pr-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Social Accounts</h3>
        <ul>
          <li className="flex items-center mb-2 text-gray-700"><FaTwitter className="mr-2 text-blue-500" /> twitter.com/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaFacebook className="mr-2 text-blue-600" /> facebook.com/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaInstagram className="mr-2 text-pink-500" /> instagram.com/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaLinkedin className="mr-2 text-blue-700" /> linkedin.com/in/johndoe</li>
          <li className="flex items-center mb-2 text-gray-700"><FaYoutube className="mr-2 text-red-600" /> youtube.com/johndoe</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">What is new, John Doe?</h3>
        <textarea className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500" placeholder="Share your thoughts..."></textarea>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none">Upload activity</button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">People Viewed Profile</h3>
        <ul className="space-y-1">
          {["Johnson", "Jessica William", "Rock", "David Smith", "Ricky Doe"].map((name, index) => (
            <li key={index} className="text-gray-700">{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialAccounts;

