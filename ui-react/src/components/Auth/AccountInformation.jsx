import React from 'react';
import { Link } from 'react-router-dom';

function AccountInformation() {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-screen-lg px-4">
        <h2 className="text-2xl font-semibold mb-6">Account Information</h2>

        {/* Profile Photo Visibility */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Profile Photo Visibility</h3>
          <div className="flex items-center mb-4">
            <input type="radio" id="anyone" name="profile-photo" value="anyone" checked className="mr-2" />
            <label htmlFor="anyone">Anyone</label>
          </div>
          <div className="flex items-center">
            <input type="radio" id="basic-info" name="profile-photo" value="basic-info" className="mr-2" />
            <label htmlFor="basic-info">Basic Information</label>
          </div>
        </div>

        {/* Change Email */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Change Email</h3>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 md:mr-4">
              <input type="email" placeholder="Enter new email address" className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="w-full md:w-1/3"> {/* Removed md:text-right class */}
              {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 w-full">Change Email</button> */}
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Change Password</h3>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 md:mr-4">
              <input type="password" placeholder="Current password" className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500" />
              <input type="password" placeholder="New password" className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500" />
              <input type="password" placeholder="Confirm new password" className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="w-full md:w-1/3"> {/* Removed md:text-right class */}
              {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 w-full">Change Password</button> */}
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Preferences</h3>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 md:mr-4">
              <select className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500">
                <option>Language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
              <input type="text" placeholder="Image description" className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500" />
              <select className="border border-gray-300 rounded-md px-4 py-2 mb-2 focus:outline-none focus:border-blue-500">
                <option>Timezone</option>
                <option>GMT</option>
                <option>EST</option>
                <option>PST</option>
              </select>
            </div>
            <div className="w-full md:w-1/3"> {/* Removed md:text-right class */}
              {/* <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-2 w-full">Update Preferences</button> */}
            </div>
          </div>
        </div>

        {/* Delete Account */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">Delete Your Account</h3>
          <p className="mb-4">When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>
          <div className="flex items-center mb-2">
            <input type="checkbox" id="confirm-delete" className="mr-2" />
            <label htmlFor="confirm-delete">Confirm that I want to delete my account.</label>
          </div>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">Delete Account</button>
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;
