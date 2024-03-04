import React from 'react';

const ProgressBar = ({ title, percentage }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="h-6 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-Teal"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">{percentage}%</p>
    </div>
  );
};

export default ProgressBar;
