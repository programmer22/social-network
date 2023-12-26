import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa'; // Import calendar icon

const BookedEventsSection = () => {
  // Sample data for booked events
  const bookedEvents = [
    "Event 1",
    "Event 2",
    "Event 3",
    "Event 4",
    "Event 5",
    // Add more booked events as needed
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 flex items-center">
        <FaCalendarAlt className="mr-2 text-blue-500" /> Booked Events
      </h3>
      <ul className="text-gray-600">
        {bookedEvents.map((event, index) => (
          <li key={index} className="mb-1">
            <FaCalendarAlt className="mr-2 text-gray-400" />
            {event}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={() => alert('View All Booked Events clicked')} // Replace this with your logic
        >
          View All Booked Events
        </button>
      </div>
    </div>
  );
};

export default BookedEventsSection;
