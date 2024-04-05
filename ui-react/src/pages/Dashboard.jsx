import React, { useState, useEffect } from 'react';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaCamera, FaFileUpload} from 'react-icons/fa';
import { TiLocation } from 'react-icons/ti';
import { RiProfileLine, RiPencilLine } from 'react-icons/ri';
import { AiOutlineFileAdd, AiOutlinePercentage } from 'react-icons/ai';
import Footer from '../components/Public/Footer';
import UserNavbar from '../components/Auth/UserNavbar';
import '@fontsource/poppins';
function Dashboard() {
  const [location, setLocation] = useState("");
  const [name, setName] = useState(""); // Use state for user's name
  const [designation, setDesignation] = useState("Software Engineer");
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [resume, setResume] = useState(null);
  const [resumeName, setResumeName] = useState(null);

  useEffect(() => {
    
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.fullName) {
      setName(userData.fullName);
    }
  }, []);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
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

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    setResumeName(file.name); // Set the name of the uploaded resume as preview
  };

  return (
    <div className=' bg-gradient-to-r from-[#000428] to-[#004e92] mb-10">
    <UserNavbar/>'>
    <div className="container mx-auto px-10 mt-0  bg-gradient-to-r from-[#000428] to-[#004e92] mb-10">
      <UserNavbar/>
      <div className="rounded-xl mt-0 p-8 shadow-lg  bg-white">
        <h1 className="text-3xl font-bold mb-4 text-indigo-400 font-poppins">Dashboard</h1>
        
        {/* Add profile photo */}
        <div className="flex items-center mt-10 mb-4">
          <label htmlFor="profile-photo" className="cursor-pointer flex items-center">
            {imagePreview ? (
              <img src={imagePreview} alt="Profile" className="size-32 rounded-full object-cover shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" />
            ) : (
              <>
                <FaCamera className="ml-2 text-xl" />
                <span className="text-lg ml-2">Add Profile Photo</span>
              </>
            )}
            <input type="file" id="profile-photo" className="hidden" onChange={handleProfileImageChange} />
          </label>
          {/* Name, Designation, and Location */}
          <div className="ml-10">
            <h1 className="text-3xl font-bold font-poppins">{name}</h1>
            <p className="text-lg">{designation}</p> {/* Display designation */}
            <p className="text-lg">{location}</p>
          </div>
        </div>


        <div className="grid grid-cols-1 gap-4">
          {/* Add name */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <FaUser className="mr-2 text-2xl" />
            <input type="text" value={name} onChange={handleNameChange} className="text-lg outline-none" placeholder="Change name" />
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
            <input type="text" className="text-lg outline-none" placeholder="example.@gmail.com" />
          </div>

        

          {/* Add resume */}
          <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            <FaFileUpload className="mr-2 text-2xl" />
            <label htmlFor="resume" className="cursor-pointer">
              <span className="text-lg">{resumeName || "Upload Resume"}</span>
              <input type="file" id="resume" className="hidden" onChange={handleResumeChange} />
            </label>
          </div>


        
      <div className="rounded-xl p-8 w-90 shadow-lg mb-0 bg-white">
        <h1 className="text-3xl font-bold mb-4 text-black font-poppins">Career profile</h1>
        
        {/* Existing details */}
        <div className="grid grid-cols-2 gap-4 ml-0">
          {/* Existing details */}
        </div>
        
        <div className="dummy">
          {/* Additional sections */}
          <div className="grid grid-cols-2 gap-8 mt-8 w-fit">
            {/* Section 1: IT skills */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
           
              <span className="text-lg">IT Skills</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add IT skills" />
            </div>

            {/* Section 2: Projects */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
              
              <span className="text-lg">Projects</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add projects" />
            </div>

          

            {/* Section 4: Accomplishments */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Accomplishments</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add accomplishments" />
            </div>

            {/* Section 5: Online Profile */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
           
              <span className="text-lg">Online Profile</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add online profile link" />
            </div>

            {/* Section 6: Work Sample */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Work Sample</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add work sample link" />
            </div>

            {/* Section 7: White paper / Research publication / Journal entry */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
            
              <span className="text-lg">White paper / Research publication</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add publication link" />
            </div>

            {/* Section 8: Presentation */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Presentation</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add presentation link" />
            </div>

            {/* Section 9: Certification */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
              
              <span className="text-lg">Certification</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add certification details" />
            </div>

            {/* Section 11: Current industry */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Current industry</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none" placeholder="Add current industry" />
            </div>

           

            {/* Section 15: Preferred shift */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Preferred shift</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add preferred shift" />
            </div>

            {/* Section 16: Expected salary */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Expected salary</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add expected salary" />
            </div>

            {/* Section 19: Differently abled */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Differently abled</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add differently abled details" />
            </div>

            {/* Section 20: Career break */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Career break</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add career break details" />
            </div>

            {/* Section 21: Work permit */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Work permit</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add work permit details" />
            </div>

            {/* Section 22: Address */}
            <div className="flex items-center bg-white p-4 rounded-md shadow-lg">
             
              <span className="text-lg">Address</span>
              {/* Add your form inputs here */}
              <input type="text" className="text-lg outline-none ml-10" placeholder="Add address" />
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          <Footer/>
    </div>
  );
}

export default Dashboard;