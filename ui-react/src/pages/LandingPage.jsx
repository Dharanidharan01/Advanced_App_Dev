import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';
import Footer from '../components/Public/Footer';
import Loading from '../Loading';
const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header/>
      <Navbar/>
      <header className="bg-white py-4">
        <div className="container mx-auto flex flex-col justify-center items-center">
          {/* Logo */}
          <Link to="/" className="text-black font-bold text-xl mb-4 text-4xl">Find your dream job now</Link>
<p>5 lakh+ jobs for you to explore</p>
          {/* Search Bar */}
          <br></br>
          <br></br>
          <div className="w-full max-w-3xl bg-gray-200 rounded-full px-4 py-2 flex items-center justify-between">
            <input
              type="text"
              placeholder="Enter skills / designations / companies"
              className="w-full bg-transparent outline-none"
            />
            <div className="flex space-x-4">
              {/* Experience Selection */}
              <select className="bg-transparent text-gray-600">
                <option value="">Select Experience</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
                {/* Add more options as needed */}
              </select>

              {/* Location Selection */}
              <select className="bg-transparent text-gray-600">
                <option value="">Select Location</option>
                <option value="New York">Coimbatore</option>
                <option value="Los Angeles">Banglore</option>
                <option value="Chicago">Chennai</option>
                <option value="New York">Pune</option>
                <option value="Los Angeles">Mumbai</option>
                <option value="Chicago">Delhi</option>
                {/* Add more options as needed */}
              </select>

              {/* Search Button */}
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Search</button>
            </div>
          </div>
        </div>
      </header>

      {/* Featured companies actively hiring */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Companies Actively Hiring</h2>
          <div className="flex justify-center space-x-4">
            {/* Featured company boxes */}
            <div className="bg-white rounded-full px-4 py-2 text-sm">All</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm">IT Services</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm">BFS</div>
          </div>
        </div>
      </section>

      {/* Actively Hiring Companies Cards */}
      <section className="py-8 overflow-hidden">
  <div className="container ml-20 flex overflow-x-auto space-x-4">
          {/* Company card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4 text-sm w-64">
            {/* Company image */}
            <img src="https://indiancompanies.in/wp-content/uploads/2020/05/TCS-Logo-Tata-consultancy-service.png" alt="Company Logo" className="w-full h-30 object-cover mb-2" />
            {/* Company name */}
            <h3 className="text-lg font-semibold mb-1">Company Name</h3>
            {/* Ratings */}
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.5</p>
            </div>
            {/* Reviews */}
            <p className="text-gray-600 mb-2">235 Reviews</p>
            {/* Description */}
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit metus vel justo cursus, ac gravida ex sodales.</p>
          </div>
          {/* Company card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4 text-sm w-64">
            {/* Company image */}
            <img src="https://logowik.com/content/uploads/images/zoho-new9282.logowik.com.webp" alt="Company Logo" className="w-full h-32 object-cover mb-2" />
            {/* Company name */}
            <h3 className="text-lg font-semibold mb-1">Company Name</h3>
            {/* Ratings */}
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            {/* Reviews */}
            <p className="text-gray-600 mb-2">180 Reviews</p>
            {/* Description */}
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit metus vel justo cursus, ac gravida ex sodales.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-sm w-64">
            {/* Company image */}
            <img src="https://vectorseek.com/wp-content/uploads/2021/01/Aditya-Birla-Group-Logo-Vector-scaled.jpg" alt="Company Logo" className="w-full h-32 object-cover mb-2" />
            {/* Company name */}
            <h3 className="text-lg font-semibold mb-1">Company Name</h3>
            {/* Ratings */}
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            {/* Reviews */}
            <p className="text-gray-600 mb-2">180 Reviews</p>
            {/* Description */}
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit metus vel justo cursus, ac gravida ex sodales.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-sm w-64">
            {/* Company image */}
            <img src="https://store.monarchergo.com/wp-content/uploads/2022/12/INFOSYS.jpg" alt="Company Logo" className="w-full h-32 object-cover mb-2" />
            {/* Company name */}
            <h3 className="text-lg font-semibold mb-1">Company Name</h3>
            {/* Ratings */}
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            {/* Reviews */}
            <p className="text-gray-600 mb-2">180 Reviews</p>
            {/* Description */}
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit metus vel justo cursus, ac gravida ex sodales.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-sm w-64">
            {/* Company image */}
            <img src="https://www.opentext.com/assets/images/partners/cognizant-logo-416x274.png" alt="Company Logo" className="w-full h-32 object-cover mb-2" />
            {/* Company name */}
            <h3 className="text-lg font-semibold mb-1">Company Name</h3>
            {/* Ratings */}
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            {/* Reviews */}
            <p className="text-gray-600 mb-2">180 Reviews</p>
            {/* Description */}
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit metus vel justo cursus, ac gravida ex sodales.</p>
          </div>
          {/* Add more company cards as needed */}
        </div>
      </section>
      <div className="container mx-auto text-center">
        <button className="bg-blue-600 text-white px-6 py-3 mb-10 rounded-full font-semibold hover:bg-blue-700">View all companies</button>
 {/* Additional Card */}
 <section className="py-8 overflow-hidden">
        <div className="mx-auto px-10 ml-10 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-4 text-sm w-screen">
            {/* Image */}
            <img src="https://media.istockphoto.com/id/171450348/photo/young-male-student-using-cell-phone-isolated.jpg?b=1&s=612x612&w=0&k=20&c=YEHbXKhhuZuTW5-lHv5_kf3J7o9csNSmI5BjEnrRqHw=" alt="Image" className="w-90 h-90 float-left mr-4" />
            {/* Content */}
            <div className="text-center">
              <h1 className="text-2xl font-bold mt-20">Introducing a career platform for college students & fresh grads</h1>
              <p className="text-gray-600 mb-4">Explore contests, webinars, take aptitude test, prepare for your dream career & find jobs & internships</p>
              {/* Buttons */}
              <div className="flex justify-center mt-10 items-center space-x-4">
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Expert speak</button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Contests</button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">NCAT</button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Pathfinder</button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Jobs & Internships</button>
              </div>
              {/* Image with custom size */}
              <div className="mt-10">
                <img src="https://image.shutterstock.com/image-photo/image-260nw-2293917457.jpg" alt="Custom Image" className="w-85 h-20 mx-auto mt-10" />
              </div>
              {/* Refer a Friend */}
              <div className="mt-6">
                <p className="text-gray-600 mb-2">Refer a Friend and Get ₹100</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 mt-6" onClick={togglePopup}>
                  Refer a Friend
                </button>
              </div>

              <h1 className="text-2xl font-bold mt-20">Make your dream career a reality</h1>
              <p className="text-gray-600 mb-4">Explore contests, webinars, take aptitude test, prepare for your dream career & find jobs & internships</p>
            </div>
          </div>
        </div>
      </section>







      </div>
      
          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 mr-20 ml-20">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
              <h2 className="text-xl font-semibold mb-10">Basic Plan</h2>
              <p>Price: $29/month</p>
              <p>Features:</p>
              <ul className="list-disc pl-6">
                <li>Rapid Prototyping Tools</li>
                <li>Code Generation</li>
                <li>Basic Integration Support</li>
                <li>Standard Testing Framework</li>
                <li>Limited Collaboration Features</li>
                <li>Email Support</li>
              </ul>
              <br></br>
              <p className='text-yellow-600'>Ideal For: Solo Developers, Small Teams, and Hobbyists</p>
              <Link to="/basic-plan" className="block mt-10 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
              <h2 className="text-xl font-semibold mb-10">Pro Plan</h2>
              <p>Price: $59/month</p>
              <p>Features:</p>
              <ul className="list-disc pl-6">
                <li>Enhanced Prototyping Options</li>
                <li>Advanced Code Generation</li>
                <li>Full Integration Support</li>
                <li>Enhanced Testing Suite</li>
                <li>Premium Collaboration Tools</li>
                <li>Priority Email Support</li>
              </ul>
              <br></br>
              
              <p className='text-yellow-600'>Ideal For: Growing Startups and Medium-sized Businesses</p>
              <br></br>
              <Link to="/pro-plan" className="block mt-4 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
            </div>

            {/* Enterprise Plan */}
            <div className=" bg-white rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
              <h2 className="text-xl font-semibold mb-10">Enterprise Plan</h2>
              <p>Price: Custom Pricing</p>
              <p>Features:</p>
              <ul className="list-disc pl-6">
                <li>All Pro Plan Features</li>
                <li>Dedicated Account Manager</li>
                <li>Customizable Solutions</li>
                <li>White-labeling Options</li>
                <li>Advanced Analytics and Reporting</li>
                <li>On-site Training and Support</li>
              </ul>
              <br></br>
              <p className='text-yellow-600'>Ideal For: Large Enterprises and Organizations with Complex Requirements</p>
              <Link to="/enterprise-plan" className="block mt-10 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>


          {/* Additional Horizontal Card */}
<section className="py-8 overflow-hidden">
  <div className="flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-md p-6 text-sm w-full max-w-screen-xl flex justify-center">
      {/* Item 1 */}
      <div className="flex flex-col items-center pr-20">
        <h2 className="text-4xl font-bold mb-2 text-blue-600">300K+</h2>
        <p className="text-lg">Companies Hiring</p>
      </div>
      <div className="border-l border-gray-300 h-16"></div>
      {/* Item 2 */}
      <div className="flex flex-col items-center px-20">
        <h2 className="text-4xl font-bold mb-2 text-blue-600">10K+</h2>
        <p className="text-lg">New Openings Everyday</p>
      </div>
      <div className="border-l border-gray-300 h-16"></div>
      {/* Item 3 */}
      <div className="flex flex-col items-center px-20">
        <h2 className="text-4xl font-bold mb-2 text-blue-600">21Mn+</h2>
        <p className="text-lg">Active Students</p>
      </div>
      <div className="border-l border-gray-300 h-20"></div>
      {/* Item 4 */}
      <div className="flex flex-col items-center pl-8">
        <h2 className="text-4xl font-bold mb-2 text-blue-600">600K+</h2>
        <p className="text-lg">Learners</p>
      </div>
    </div>
  </div>
</section>


<Footer />
    </div>
  );
};


export default LandingPage;
