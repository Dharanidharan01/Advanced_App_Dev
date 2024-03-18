import React, { useEffect, useState } from 'react';

import UserNavbar from '../components/Auth/UserNavbar';
import Footer from '../components/Public/Footer';
import '@fontsource/poppins'; 

const JobDetailsPage = () => {
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Retrieve job details from local storage
    const storedJobDetails = JSON.parse(localStorage.getItem('jobDetails'));
    setJobDetails(storedJobDetails);
  }, []);

  return (
    
       <div className='bg-gradient-to-r from-[#000428] to-[#004e92]'>
        <UserNavbar />
        <div className="bg-gradient-to-r from-[#000428] to-[#004e92] container mx-auto px-4 mt-0 h-screen flex grid-rows-subgrid justify-center">




          <div className="bg-white rounded-lg shadow-lg h-max p-6 w-96 mt-0 mr-4">
            <h1 className="text-2xl font-bold mb-4 text-indigo-600 font-poppins">Job Details</h1>
            {jobDetails ? (
              <div>
                {/* Job Information */}
                <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
                  <h2 className="text-lg font-semibold mb-1">Job Information</h2>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Title: {jobDetails.title}</p>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Description: {jobDetails.description}</p>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Requirements: {jobDetails.requirements}</p>
                </div>
                {/* Job Requirements */}
                <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
                  <h2 className="text-lg font-semibold mb-1">Job Requirements</h2>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Required Skills: {jobDetails.requiredSkills}</p>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Roles: {jobDetails.roles}</p>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Responsibilities: {jobDetails.responsibilities}</p>
                </div>
                {/* Additional Job Information */}
                <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
                  <h2 className="text-lg font-semibold mb-1">Additional Information</h2>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Time Period: {jobDetails.timePeriod}</p>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Salary: {jobDetails.salary}</p>
                  <p className="text-sm text-gray-700 font-poppins mb-1">Location: {jobDetails.location}</p>
                </div>
                {/* Apply Button */}
                <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
                  Apply
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-700 font-poppins">No job details available.</p>
            )}
          </div>

          {/* Repeat this block for each additional card */}
          <div className="bg-white rounded-lg shadow-lg h-max p-6 w-96 mt-0 mr-4">
            <h1 className="text-2xl font-bold mb-4 text-indigo-600 font-poppins">Dummy Job Details</h1>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Job Information</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Title: Dummy Title</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Description: Dummy Description</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Requirements: Dummy Requirements</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Job Requirements</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Required Skills: Dummy Skills</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Roles: Dummy Roles</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Responsibilities: Dummy Responsibilities</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Additional Information</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Time Period: Dummy Period</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Salary: Dummy Salary</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Location: Dummy Location</p>
            </div>
            <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
              Apply
            </button>
          </div>
          {/* Repeat this block for each additional card */}
          <div className="bg-white rounded-lg shadow-lg h-max p-6 w-96 mt-0 mr-4">
            <h1 className="text-2xl font-bold mb-4 text-indigo-600 font-poppins">Dummy Job Details</h1>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Job Information</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Title: Dummy Title</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Description: Dummy Description</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Requirements: Dummy Requirements</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Job Requirements</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Required Skills: Dummy Skills</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Roles: Dummy Roles</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Responsibilities: Dummy Responsibilities</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Additional Information</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Time Period: Dummy Period</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Salary: Dummy Salary</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Location: Dummy Location</p>
            </div>
            <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
              Apply
            </button>
          </div>
          {/* Repeat this block for each additional card */}
          <div className="bg-white rounded-lg shadow-lg h-max p-6 w-96 mt-0 mr-4">
            <h1 className="text-2xl font-bold mb-4 text-indigo-600 font-poppins">Dummy Job Details</h1>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Job Information</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Title: Dummy Title</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Description: Dummy Description</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Requirements: Dummy Requirements</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Job Requirements</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Required Skills: Dummy Skills</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Roles: Dummy Roles</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Responsibilities: Dummy Responsibilities</p>
            </div>
            <div className="bg-gray-100 rounded-lg shadow-md p-3 mb-3">
              <h2 className="text-lg font-semibold mb-1">Additional Information</h2>
              <p className="text-sm text-gray-700 font-poppins mb-1">Time Period: Dummy Period</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Salary: Dummy Salary</p>
              <p className="text-sm text-gray-700 font-poppins mb-1">Location: Dummy Location</p>
            </div>
            <button className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50">
              Apply
            </button>
          </div>
          </div>
           {/* Big Empty Card */}
<div className="bg-white rounded-lg  mt-64 shadow- mr-10 ml-10 mb-20 h-fill mt-0 shadow-[10px_10px_0px_0px_rgba(109,40,217)]">
  {/* You can add any content you want here */}
  <br></br>
  <h1 className="text-2xl font-bold mb-4 text-indigo-600 font-poppins text-center">Your Next Career Awaits!</h1>
  <p className="text-lg text-gray-700 font-poppins text-center mb-6">Explore thousands of job opportunities and take the next step in your career journey.</p>
  <div className="flex justify-center">
    <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Job Search 1" className="w-48 h-48 object-cover rounded-md shadow-md mr-2" />
    <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Job Search 2" className="w-48 h-48 object-cover rounded-md shadow-md mr-2" />
    <img src="https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Job Search 3" className="w-48 h-48 object-cover rounded-md shadow-md" />
  </div>
  <p className="text-md text-gray-700 font-poppins text-center mt-4">Discover job openings from top companies across various industries.</p>
  <div className="flex justify-center mt-4">
    <p className="text-md text-gray-700 font-poppins text-center mb-10">With our easy-to-use platform, finding your dream job is just a few clicks away. Explore now!</p>
    <br></br>
  </div>
  <div>
  </div>
</div>


<div className=' rounded-lg shadow- mr-10 ml-10 h-fit align-items mb-10'>
<h1 className="text-2xl font-bold mb-10 text-white font-poppins text-center" >Top MNC Companies use JOBPILOT to hire freshers!</h1>
  <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6 mx-auto">
    <img src="https://cdn.dribbble.com/userupload/13649289/file/original-60cb1f4276a32f939dfad34cb132865e.png?resize=1506x886" alt="Card Image 1" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649371/file/original-595d6ace593087d01659e3537e024c6d.png?resize=1004x591" alt="Card Image 2" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649293/file/original-1d5782fc1db0808f729882c935b41704.png?resize=1506x886" alt="Card Image 3" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649292/file/original-1771762d69f8b99a9442e80fb9822848.png?resize=1506x886" alt="Card Image 4" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649290/file/original-f60b93f340e0c66517614ceaaf950144.png?resize=1506x886" alt="Card Image 5" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649295/file/original-6654f91fdad68aaca192eed4cffe0131.png?resize=1506x886" alt="Card Image 6" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649376/file/original-05c225dd5f8bf68ab88e96c6ebe9ccb1.png?resize=1380x812" alt="Card Image 7" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649291/file/original-4f6e747bdd72da14571645a7dc5f5d72.png?resize=1506x886" alt="Card Image 8" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649294/file/original-5e22d0cab465636bd862eb40566c5299.png?resize=1506x886" alt="Card Image 9" className=" w-full h-auto" />
    <img src="https://cdn.dribbble.com/userupload/13649297/file/original-94f76d29274b8c7786813131612c20a9.png?resize=1506x886" alt="Card Image 10" className="w-full h-auto" />
  </div>
</div>

<h1 className="text-2xl font-bold mt-36 mb-20 text-white font-poppins text-center ">Unlock Your Potential with Our Transformative Courses!</h1>
<div className='bg-white bg-opacity-80 rounded-lg shadow- mr-10 ml-10 mb-10 mt-0 align-items'>
      <br />
      <h1 className="text-2xl font-bold mb-4 text-indigo-600 font-poppins text-center">Explore Online Courses</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 mx-auto ml-10 mr-10">
        <div className="course-card bg-white bg-opacity-60 rounded-lg">
          <img src="https://img.freepik.com/free-photo/man-using-tablet-work-connect-with-others_23-2149369110.jpg?t=st=1710785391~exp=1710788991~hmac=0ba733124c96ff211aaace48766528e44e761db19af31b94ae23e29a10fe91d8&w=996" alt="Course Image 1" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          <div className="p-4 ">
            <h2 className="text-lg font-semibold text-gray-800">Introduction to Data Science</h2>
            <p className="text-sm text-gray-600 mt-2">Learn the basics of data science and start your journey towards becoming a data analyst.</p>
          </div>
        </div>
        <div className="course-card bg-white bg-opacity-60 rounded-lg">
          <img src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?t=st=1710785432~exp=1710789032~hmac=6908b06c3cfa2dd48de8204675939fd671bbc06992efeb24d0313a765864e3f3&w=996" alt="Course Image 2" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Web Development Bootcamp</h2>
            <p className="text-sm text-gray-600 mt-2">Master the fundamentals of web development and build interactive websites from scratch.</p>
          </div>
        </div>
        <div className="course-card bg-white bg-opacity-60 rounded-lg">
          <img src="https://img.freepik.com/free-photo/woman-with-editor-occupation-wearing-headphones_482257-10564.jpg?w=996&t=st=1710785503~exp=1710786103~hmac=7458fd36e2af6a7f2d413b36f535e1a9d7e986058b64e642cdb99683ed82f430" alt="Course Image 3" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Graphic Design Essentials</h2>
            <p className="text-sm text-gray-600 mt-2">Discover the principles of graphic design and create stunning visual content for print and digital media.</p>
          </div>
        </div>
        <div className="course-card bg-white bg-opacity-60 rounded-lg mb-10">
          <img src="https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?w=996&t=st=1710785562~exp=1710786162~hmac=dfa29be80f8cc26236702b42b61280dc0a6039e825202d2bb0694d4fd17b871e" alt="Course Image 4" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Mobile App Development</h2>
            <p className="text-sm text-gray-600 mt-2">Build your own mobile apps for iOS and Android platforms using popular frameworks and tools.</p>
          </div>
        </div>
        <div className="course-card bg-white bg-opacity-60 rounded-lg mb-10">
          <img src="https://img.freepik.com/free-photo/search-engine-marketing-composition-design_23-2150923510.jpg?t=st=1710785598~exp=1710789198~hmac=da28b3ba62147b144873424c3f8bf2cca8b384f4ceee15f6ddb9b388db7d9435&w=996" alt="Course Image 5" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Digital Marketing Fundamentals</h2>
            <p className="text-sm text-gray-600 mt-2">Learn the basics of digital marketing and grow your online presence with effective strategies.</p>
          </div>
        </div>
        <div className="course-card bg-white bg-opacity-60 rounded-lg mb-10">
          <img src="https://img.freepik.com/free-photo/person-using-ai-tool-job_23-2150711490.jpg?t=st=1710785642~exp=1710789242~hmac=4ee71cb43bdf64185d68b51b55a22c97f6ddf36ae746b36368a3f02255368cb3&w=996" alt="Course Image 6" className="w-full h-48 object-cover transition-transform transform hover:scale-105" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Machine Learning for Beginners</h2>
            <p className="text-sm text-gray-600 mt-2">Explore the concepts of machine learning and apply them to real-world problems with Python.</p>
         
          </div>
        </div>
      </div>
    </div>




          <Footer/>
    </div>
  
  );
};  

export default JobDetailsPage;
