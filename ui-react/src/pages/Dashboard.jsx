import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaCamera } from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { RiProfileLine, RiPencilLine } from 'react-icons/ri';
import { AiOutlineFileAdd, AiOutlinePercentage } from 'react-icons/ai';
import Footer from '../components/Public/Footer';
import '@fontsource/poppins';


function Dashboard() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

 
  return (
    <div className="container mx-auto px-10 py-10 bg-gradient-to-r from-[#000428] to-[#004e92]">
      <div className=" rounded-xl p-8 shadow-lg mb-0 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-indigo-400 font-poppins">Dashboard</h1>
        
        {/* Add profile photo */}
        <div className="flex items-center justify-center mb-4">
          <label htmlFor="profile-photo" className="cursor-pointer flex items-center">
            {imagePreview ? (
              <img src={imagePreview} alt="Profile" className="h-20 w-20 rounded-full object-cover" />
            ) : (
              <>
                <FaCamera className="ml-2 text-xl" />
                <span className="text-lg ml-2">Add Profile Photo</span>
              </>
            )}
            <input type="file" id="profile-photo" className="hidden" onChange={handleProfileImageChange} />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Add name */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <FaUser className="mr-2 text-2xl" />
            <input type="text" value={name} onChange={handleNameChange} className="text-lg outline-none" placeholder="Add name" />
          </div>

          {/* Add location */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <TiLocation className="mr-2 text-2xl" />
            <input type="text" value={location} onChange={handleLocationChange} className="text-lg outline-none" placeholder="Add location" />
          </div>

          {/* Profile last updated */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <FaCalendarAlt className="mr-2 text-2xl" />
            <span className="text-lg">Profile last updated - Today</span>
          </div>

          {/* Add availability to join */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <FaCalendarAlt className="mr-2 text-2xl" />
            <input type="text" className="text-lg outline-none" placeholder="Add availability to join" />
          </div>

          {/* Add mobile number */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <FaPhoneAlt className="mr-2 text-2xl" />
            <input type="text" className="text-lg outline-none" placeholder="Add mobile number" />
          </div>

          {/* Mail */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <FaEnvelope className="mr-2 text-2xl" />
            <input type="text" className="text-lg outline-none" placeholder="727821tucs039@skct.edu.in" />
          </div>

          {/* Verified */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <AiOutlinePercentage className="mr-2 text-2xl" />
            <span className="text-lg">VerifiedOneTheme</span>
          </div>

          {/* Add resume */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <AiOutlineFileAdd className="mr-2 text-2xl" />
            <span className="text-lg">Add 10%</span>
          </div>

          {/* Career profile */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <RiProfileLine className="mr-2 text-2xl" />
            <span className="text-lg">Career profileEditOneTheme</span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Dashboard;
