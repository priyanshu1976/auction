import React from 'react';

function UpcomingItem({ itemName, Value, pic }) {
  return (
    <div
      className="flex items-center mb-2 p-4 border border-pink-500 rounded-xl bg-black bg-opacity-100 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Image Section */}
      <div className="flex-shrink-0 w-20 h-20 border-2 border-pink-500 rounded-md shadow-lg">
        <img
          src={pic}
          className="w-full h-full object-cover rounded-md"
          alt=""
        />
      </div>

      {/* Details Section (Extreme Right) */}
      <div className="ml-auto text-right">
        <div className="text-xl font-extrabold text-gray-100 tracking-wide">
          {itemName}
        </div>
        <div className=" text-xl text-green-500 font-medium mt-1">
          {Value}
        </div>
      </div>
    </div>
  );
}

export default UpcomingItem;
