import React from 'react';

const NewsSection = () => {
  return (
    <div className="w-full md:w-1/3 pl-4 space-y-6">
      <div className="mb-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-lg text-white">
        <h3 className="text-xl font-bold mb-3">Post Your Event</h3>
        <p>Have an event you'd like to share? Post it on Goeventi for free! Create an account, fill out a simple form, and you're all set.</p>
        <button className="mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500">Post It Now</button>
      </div>

      <div className="p-4 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Latest News</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li className="mb-2">Music - Discover the latest hits and trends.</li>
          <li className="mb-2">Ads - Exclusive deals and offers you can't miss.</li>
          <li className="mb-2">Sports - Updates on your favorite teams and matches.</li>
        </ul>
        <button className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Discover More</button>
      </div>
    </div>
  );
};

export default NewsSection;

