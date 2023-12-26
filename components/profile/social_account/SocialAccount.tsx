// components/SocialAccount.jsx
import React from 'react';

const SocialAccount = ({ account }: any) => {
  if (!account || !account.name || !account.link) {
    // Handle undefined or incomplete account object
    return null; // Or render some placeholder or error message
  }

  return (
    <li className="mb-1">
      <i className={`fab fa-${account.name.toLowerCase()}`}></i> {account.link}
    </li>
  );
};

export default SocialAccount;
