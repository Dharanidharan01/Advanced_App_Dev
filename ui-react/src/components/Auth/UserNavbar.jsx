import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
    // State to track whether the cards should be displayed or not
    const [showJobs, setShowJobs] = useState(false);
    const [showCompanies, setShowCompanies] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showEmployee, setShowEmployee] = useState(false);
    
    // State for profile picture
    const [profilePic, setProfilePic] = useState(null);
  
    // Function to toggle the state of each card
    const toggleJobs = () => {
      setShowJobs(!showJobs);
      setShowCompanies(false);
      setShowServices(false);
      setShowEmployee(false);
    };
  
    const toggleCompanies = () => {
      setShowCompanies(!showCompanies);
      setShowJobs(false);
      setShowServices(false);
      setShowEmployee(false);
    };
  
    const toggleServices = () => {
      setShowServices(!showServices);
      setShowJobs(false);
      setShowCompanies(false);
      setShowEmployee(false);
    };
  
    const toggleEmployee = () => {
      setShowEmployee(!showEmployee);
      setShowJobs(false);
      setShowCompanies(false);
      setShowServices(false);
    };
  
  return (
    <nav className="bg-grey-400 py-2">
      <div className="container mx-auto px-0 flex justify-between items-center mr-0 mt-4 mb-10">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center mr-20 space-x-6">
          {/* Jobs Card */}
          <div className="relative">
            <button onMouseOver={toggleJobs} className="text-white hover:text-[#16dbff] focus:outline-none">
              Jobs
            </button>
            {showJobs && (
              <div className="absolute right-0 mt-2 w-max bg-white rounded-lg shadow-lg max-screen drop-shadow-2xl">
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <h2 className="text-lg font-semibold mb-3">Popular Categories</h2>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">T Jobs</li>
                        <li className="mb-1">Sales Jobs</li>
                        <li className="mb-1">Marketing Jobs</li>
                        <li className="mb-1">Data Science Jobs</li>
                        <li className="mb-1">HR Jobs</li>
                        <li className="mb-1">Engineering Jobs</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-3">Jobs in Demand</h2>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Fresher Jobs</li>
                        <li className="mb-1">MNC Jobs</li>
                        <li className="mb-1">Remote Jobs</li>
                        <li className="mb-1">Work from Home Jobs</li>
                        <li className="mb-1">Walk-in Jobs</li>
                        <li className="mb-1">Part-time Jobs</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-3">Jobs by Location</h2>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Jobs in Delhi</li>
                        <li className="mb-1">Jobs in Mumbai</li>
                        <li className="mb-1">Jobs in Bangalore</li>
                        <li className="mb-1">Jobs in Hyderabad</li>
                        <li className="mb-1">Jobs in Chennai</li>
                        <li className="mb-1">Jobs in Pune</li>
                      </ul>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold mb-3">Jobs by Category</h2>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Jobs by Skill</li>
                        <li className="mb-1">Jobs by Location</li>
                        <li className="mb-1">Jobs by Designation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    {/* <Link to="/job-alert" className="text-blue-500 hover:underline">Create Free Job Alert</Link> */}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Companies Card */}
          <div className="relative">
            <button onMouseOver={toggleCompanies} className="text-white hover:text-[#16dbff] focus:outline-none">
              Companies
            </button>
            {showCompanies && (
              <div className="absolute right-0 mt-2 w-max bg-white rounded-lg shadow-lg">
                <div className="p-6 flex flex-wrap gap-20">
                  <div className="w-30">
                    <div>
                      <h1 className="text-lg font-semibold mb-3 ">Categories</h1>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Unicorn</li>
                        <li className="mb-1">MNC</li>
                        <li className="mb-1">Startup</li>
                        <li className="mb-1">Product based</li>
                        <li className="mb-1">Internet</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-30">
                    <div>
                      <h2 className="text-lg font-semibold mb-3">Explore Collections</h2>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Top companies</li>
                        <li className="mb-1">IT companies</li>
                        <li className="mb-1">Fintech companies</li>
                        <li className="mb-1">Sponsored companies</li>
                        <li className="mb-1">Featured companies</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-30">
                    <div>
                      <h1 className="text-lg font-semibold mb-3">Research</h1>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Interview questions</li>
                        <li className="mb-1">Company salaries</li>
                        <li className="mb-1">Company reviews</li>
                        <li className="mb-1">Salary Calculator</li>
                        <li className="mb-1">Bond Finder</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        
          {/* Services Card */}
          <div className="relative">
            <button onMouseOver={toggleServices} className="text-white hover:text-[#16dbff] focus:outline-none">
              Services
            </button>
            {showServices && (
              <div className="absolute right-0 mt-2 w-max bg-white rounded-lg shadow-lg">
                <div className="p-6 flex flex-wrap gap-20">
                  <div className="w-30">
                    <div>
                      <h1 className="text-lg font-semibold mb-3 ">Resume writing</h1>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Functional resume</li>
                        <li className="mb-1">Targeted Resume</li>
                        <li className="mb-1">Combination Resume</li>
                        <li className="mb-1">Chronological</li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-30">
                    <div>
                      <h2 className="text-lg font-semibold mb-3">Resume resources</h2>
                      <ul className="text-sm space-y-3">
                        <li className="mb-1">Resume maker for freshers</li>
                        <li className="mb-1">Resume quality score</li>
                        <li className="mb-1">Resume samples</li>
                        <li className="mb-1">Job letter samples</li>
                      </ul>
                    </div>
                  </div>
                  
                </div>
              </div>
            )}
          </div>

         {/* Dropdown for Employees */}
         <div className="relative">
            <Link to="/esignup">
              <button onMouseOver={toggleEmployee} className="text-black rounded-full bg-blue-300 px-4 py-2 flex items-center hover:text-orange-900 focus:outline-none">
                For Employees
              </button>
            </Link>
            {showEmployee && (
              <div className="absolute right-0 mt-2 max-w-xl bg-white rounded-lg shadow-lg">
                {/* Add employee-specific content here */}
              </div>
            )}
          </div>

          {/* Profile Picture Icon (Clickable) */}
          <div className="relative">
            <Link to="/dashboard">
            <img src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg" alt="Custom Image" className="w-10  h-10 mr-0  " />
            </Link>
          
      </div>
      </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
