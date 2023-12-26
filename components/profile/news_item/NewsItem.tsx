// components/NewsItem.jsx
import React from 'react';

const NewsItem = ({ item }: any) => {
  if (!item || typeof item.title !== 'string') {
    // Render nothing or a placeholder if item data is not available
    return null; 
  }

  return (
    <li className="mb-1">{item.title}</li>
  );
};

export default NewsItem;
