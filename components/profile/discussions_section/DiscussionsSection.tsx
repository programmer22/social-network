import React from 'react';

const DiscussionsSection = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Discussions</h3>
      <ul className="text-gray-600">
        <li className="mb-1">
          <span className="text-blue-500">Discussion 1:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li className="mb-1">
          <span className="text-blue-500">Discussion 2:</span> Sed vel tincidunt justo. Proin tincidunt, neque at tristique mattis, ex nulla hendrerit est.
        </li>
        <li className="mb-1">
          <span className="text-blue-500">Discussion 3:</span> Vestibulum maximus in nisi in sodales. Duis ut aliquam elit.
        </li>
        <li className="mb-1">
          <span className="text-blue-500">Discussion 4:</span> Curabitur id odio vel elit vulputate malesuada. Praesent volutpat nisi quis est rhoncus.
        </li>
      </ul>
    </div>
  );
};

export default DiscussionsSection;
