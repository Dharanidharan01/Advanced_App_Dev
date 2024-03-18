// JobPosting.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const JobPosting = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    requirements: '',
    companyDetails: '',
    hrDetails: '',
    requiredSkills: '',
    roles: '',
    responsibilities: '',
    timePeriod: '',
    salary: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Job Details:", jobDetails);
    
    // Store job details in local storage
    localStorage.setItem('jobDetails', JSON.stringify(jobDetails));
    
    // Reset the form fields
    setJobDetails({
      title: '',
      description: '',
      requirements: '',
      companyDetails: '',
      hrDetails: '',
      requiredSkills: '',
      roles: '',
      responsibilities: '',
      timePeriod: '',
      salary: '',
      location: ''
    });
    
    // Optionally, you can navigate to another page here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      
      <div className="flex flex-wrap justify-center mt-5">
        <div className="rounded-lg shadow-lg bg-white p-20 m-5 max-w-screen-2xl ">
          <h1 className="text-3xl font-bold mb-10 text-indigo-400 font-poppins">Post a Job Vacancy</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={jobDetails.title}
                onChange={handleChange}
                className="block w px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={jobDetails.description}
                onChange={handleChange}
                className="block w-64 px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="requirements" className="block text-gray-700 font-semibold mb-2">Requirements</label>
              <textarea
                id="requirements"
                name="requirements"
                value={jobDetails.requirements}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="companyDetails" className="block text-gray-700 font-semibold mb-2">Company Details</label>
              <textarea
                id="companyDetails"
                name="companyDetails"
                value={jobDetails.companyDetails}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="hrDetails" className="block text-gray-700 font-semibold mb-2">HR Details</label>
              <textarea
                id="hrDetails"
                name="hrDetails"
                value={jobDetails.hrDetails}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="requiredSkills" className="block text-gray-700 font-semibold mb-2">Required Skills</label>
              <textarea
                id="requiredSkills"
                name="requiredSkills"
                value={jobDetails.requiredSkills}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="roles" className="block text-gray-700 font-semibold mb-2">Roles</label>
              <textarea
                id="roles"
                name="roles"
                value={jobDetails.roles}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="responsibilities" className="block text-gray-700 font-semibold mb-2">Responsibilities</label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                value={jobDetails.responsibilities}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="timePeriod" className="block text-gray-700 font-semibold mb-2">Time Period</label>
              <textarea
                id="timePeriod"
                name="timePeriod"
                value={jobDetails.timePeriod}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className="block text-gray-700 font-semibold mb-2">Salary</label>
              <textarea
                id="salary"
                name="salary"
                value={jobDetails.salary}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">Location</label>
              <textarea
                id="location"
                name="location"
                value={jobDetails.location}
                onChange={handleChange}
                className="block w-full px-4 py-2 rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 shadow-md"
                required
              />
            </div>
            <button type="submit" className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 col-span-2">Post Job</button>
          </form>
        </div>
        </div>
      
    </motion.div>
  );
};

export default JobPosting;
