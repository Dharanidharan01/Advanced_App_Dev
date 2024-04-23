import React, { useState } from 'react';
import Navbar from '../components/Public/Navbar';

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null, // You can handle file upload for resume
    education: '',
    experience: '',
    skills: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data to your backend or perform any other action
    console.log(formData);
    // After submitting, you can perform any action you need
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
        <Navbar/>-
      <h1 className="text-3xl font-bold mb-6">Job Application Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-semibold">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-indigo-500" />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-indigo-500" />
        </div>
        <div>
          <label htmlFor="phone" className="block font-semibold">Phone:</label>
          <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-indigo-500" />
        </div>
        <div>
          <label htmlFor="resume" className="block font-semibold">Resume:</label>
          <input type="file" id="resume" name="resume" onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:ring-indigo-500" />
        </div>
        <div>
          <label htmlFor="education" className="block font-semibold">Education:</label>
          <textarea id="education" name="education" value={formData.education} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full h-24 focus:outline-none focus:ring focus:ring-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="experience" className="block font-semibold">Experience:</label>
          <textarea id="experience" name="experience" value={formData.experience} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full h-24 focus:outline-none focus:ring focus:ring-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="skills" className="block font-semibold">Skills:</label>
          <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full h-24 focus:outline-none focus:ring focus:ring-indigo-500"></textarea>
        </div>
        <div>
          <label htmlFor="additionalInfo" className="block font-semibold">Additional Information:</label>
          <textarea id="additionalInfo" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 w-full h-24 focus:outline-none focus:ring focus:ring-indigo-500"></textarea>
        </div>
        <button type="submit" className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50">Submit</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
