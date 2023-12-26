import React from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa'; // Example icons from react-icons

const HistorySection = () => {
  const historyItems = [
    "Visited an art exhibition",
    "Completed a marathon",
    "Attended a cooking class",
    "Traveled to a new city",
    "Learned a new language",
    // Add more history items as needed
  ];

  return (
    <div className="mb-6 p-4 bg-white shadow rounded-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">History</h3>
      <ul className="space-y-3">
        {historyItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <div className="flex-shrink-0 text-blue-500 mr-3">
              {index % 2 === 0 ? <FaRegCircle /> : <FaRegCheckCircle />}
            </div>
            <span className="flex-grow text-gray-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistorySection;
