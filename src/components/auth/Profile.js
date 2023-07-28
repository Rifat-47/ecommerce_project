import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 grid justify-center text-primary max-w-[80%] mx-auto my-8">
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-16 h-16 mr-4"
        />
        <h1 className="text-2xl font-semibold">John Doe</h1>
      </div>
      <p className="text-gray-600 mb-2 font-medium">Email: john.doe@example.com</p>
      <p className="text-gray-600 font-medium">Location: New York, USA</p>
    </div>
  );
};

export default Profile;
