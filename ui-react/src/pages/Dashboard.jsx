import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Public/Footer';
import Sidebar from '../components/Auth/Sidebar';

function Dashboard() {
  const [profileImage, setProfileImage] = useState(null);
  const [isProfileChanged, setIsProfileChanged] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const [name, setName] = useState("Dharanidharan S");
  const [dob, setDob] = useState("01/12/2003");
  const [location, setLocation] = useState("Coimbatore");
  const [degree, setDegree] = useState("Bachelor's of Engineering");
  const [college, setCollege] = useState("Sri Krishna College of Technology");
  const [email, setEmail] = useState("dharanidharans175@gmail.com");
  const [contact, setContact] = useState("9842373765");

  // Function to handle profile image upload
  const handleProfileImageUpload = (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
      setIsProfileChanged(true);
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    }
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between p-6 bg-white border-b shadow">
          <h2 className="text-2xl font-semibold text-gray-800">User Dashboard</h2>
          {/* Add any additional header components here */}
        </div>
        <div className="p-6">
          {/* Main content of the dashboard */}
          <h3 className="text-lg font-semibold text-gray-700">Welcome, User!</h3>

          {/* User profile section */}
          <div className="flex items-center mt-8">
            <div className="flex items-center">
              <div className="w-48 h-48 relative border-2 border-gray-200 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={profileImage || 'default-profile-image.png'}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col">
                {isEditMode ? (
                  <>
                    <div className="flex mb-4">
                      <label htmlFor="name">Name:</label>
                      <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="ml-2 mr-2" />
                      <label htmlFor="dob" className='ml-10'>Date of Birth:</label>
                      <input id="dob" type="text" value={dob} onChange={(e) => setDob(e.target.value)} className="ml-2 mr-2" />
                    </div>
                    <div className="flex mb-4">
                      <label htmlFor="location">Location:</label>
                      <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="ml-10 mr-2" />
                      <label htmlFor="degree">&nbspDegree:</label>
                      <input id="degree" type="text" value={degree} onChange={(e) => setDegree(e.target.value)} className="ml-2 mr-2" />
                    </div>
                    <div className="flex">
                      <label htmlFor="college">College:</label>
                      <input id="college" type="text" value={college} onChange={(e) => setCollege(e.target.value)} className="ml-2 mr-2" />
                      <label htmlFor="email">Email:</label>
                      <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="ml-2 mr-2" />
                      <label htmlFor="contact">Contact:</label>
                      <input id="contact" type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="ml-2 mr-2" />
                    </div>
                    <button onClick={toggleEditMode} className="mt-4">Save</button>
                  </>
                ) : (
                  <>
                    <div className="flex flex-nowrap mb-4">
                      <div><strong>Name:</strong> {name}</div>
                      <div className="ml-20"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Date of Birth:</strong> {dob}</div>
                    </div>
                    <div className="flex flex-nowrap mb-4">
                      <div><strong>Location:</strong> {location}</div>
                      <div className="ml-20"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Degree:</strong> {degree}</div>
                    </div>
                    <div className="flex flex-nowrap">
                      <div><strong>College:</strong> {college}</div>
                      <div className="ml-10"><strong>&nbsp;&nbsp; Email:</strong> {email}</div>
                      <div className="ml-4"><strong>Contact:</strong> {contact}</div>
                    </div>
                  </>
                )}
                <img src="https://www.svgrepo.com/show/522527/edit-3.svg" alt="Edit Icon" className="w-5 h-5 cursor-pointer ml-0 mt-5" onClick={toggleEditMode} />
              </div>
            </div>
          </div>

          {/* Profile change and add buttons */}
          <div className="mt-4  ml-30flex justify-center">
            <label
              htmlFor="profile-image-upload"
              className="bg-blue-500 ml-5 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer text-center"
            >
              {profileImage ? "Change Profile" : "Add Profile photo"}
            </label>
            <input
              id="profile-image-upload"
              type="file"
              className="hidden"
              onChange={handleProfileImageUpload}
            />
          </div>

          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
