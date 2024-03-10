import React from 'react';

const ProgressBar = ({ title, percentage }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4">
    <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold mb-0 font-Poppins">{title}</h3>
        <p className="text-sm text-gray-600 mb-0 font-Poppins">{percentage}%</p>
    </div>
    <div className="h-10 bg-slate-50 rounded-xl overflow-hidden relative">
        <div
            className="h-full bg-Teal absolute top-0 left-0"
            style={{ width: `${percentage}%` }}
        ></div>
    </div>
</div>

  );
};

export default ProgressBar;
