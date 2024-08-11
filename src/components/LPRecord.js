import React from 'react';

const LPRecord = ({ coverImage }) => {
  return (
    <div className="relative w-64 h-64">
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-full h-full"
      >
        <circle cx="256" cy="256" r="256" fill="#2b2b2b" />
        <circle cx="256" cy="256" r="220" fill="#111" />
        <circle cx="256" cy="256" r="180" fill="#333" />
        <circle cx="256" cy="256" r="120" fill="#111" />
        <circle cx="256" cy="256" r="60" fill="#555" />
        <circle cx="256" cy="256" r="20" fill="#000" />
      </svg>
      <img
        src={coverImage}
        alt="Album Cover"
        className="absolute inset-0 m-auto w-24 h-24 rounded-full object-cover"
        style={{ left: 'calc(50% - 48px)', top: 'calc(50% - 48px)' }}
      />
    </div>
  );
};

export default LPRecord;
