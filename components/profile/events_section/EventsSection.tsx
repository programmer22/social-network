import React from 'react';

const EventsSection = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Events</h3>
      <div className="flex flex-wrap -mx-2">
        {/* Event Card 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-40 w-full" style={{ backgroundImage: 'url(https://source.unsplash.com/random/400x400?event)' }}></div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Event 1</h4>
              <p className="text-gray-600">Date: January 15, 2023</p>
              <p className="text-gray-600">Location: New York</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 focus:outline-none">RSVP</button>
            </div>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-40 w-full" style={{ backgroundImage: 'url(https://source.unsplash.com/random/400x400?event)' }}></div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Event 2</h4>
              <p className="text-gray-600">Date: February 22, 2023</p>
              <p className="text-gray-600">Location: Los Angeles</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 focus:outline-none">RSVP</button>
            </div>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="h-40 w-full" style={{ backgroundImage: 'url(https://source.unsplash.com/random/400x400?event)' }}></div>
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2">Event 3</h4>
              <p className="text-gray-600">Date: March 30, 2023</p>
              <p className="text-gray-600">Location: San Francisco</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 focus:outline-none">RSVP</button>
            </div>
          </div>
        </div>

        {/* Add more event cards as needed */}
      </div>
    </div>
  );
};

export default EventsSection;
