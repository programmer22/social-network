import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Using react-icons for user avatars

const MessagesSection = () => {
  // Sample data for messages (you can replace this with real data)
  const messages = [
    { text: "Message 1", time: "10:00 AM" },
    { text: "Message 2", time: "Yesterday" },
    { text: "Message 3", time: "Monday" },
    { text: "Message 4", time: "Last Week" },
    { text: "Message 5", time: "Sep 12" },
    // Add more messages as needed
  ];

  return (
    <div className="mb-4 p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Messages</h3>
      <ul>
        {messages.map((message, index) => (
          <li key={index} className="flex items-center justify-between p-2 hover:bg-gray-100 rounded">
            <div className="flex items-center">
              <FaUserCircle className="text-gray-400 text-2xl mr-3" />
              <span className="text-gray-700">{message.text}</span>
            </div>
            <span className="text-sm text-gray-500">{message.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessagesSection;
