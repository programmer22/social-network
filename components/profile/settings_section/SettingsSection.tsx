import React from 'react';
// Assuming you have an icon library like react-icons
import { FaUserCog, FaLock, FaBell, FaCreditCard, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa';

const SettingsSection = () => {
  return (
    <div className="mb-6 p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Settings</h3>
      <div className="flex flex-col space-y-3">
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaUserCog className="mr-2" /> Account Settings
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaLock className="mr-2" /> Privacy
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaShieldAlt className="mr-2" /> Security
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaBell className="mr-2" /> Notifications
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaCreditCard className="mr-2" /> Billing
        </button>
        <button className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none">
          <FaQuestionCircle className="mr-2" /> Help & Support
        </button>
      </div>
    </div>
  );
};

export default SettingsSection;

