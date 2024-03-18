import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Public/Header';
import Navbar from '../components/Public/Navbar';
import UserNavbar from '../components/Auth/UserNavbar';
import Footer from '../components/Public/Footer';
import Loading from '../Loading';
import '@fontsource/poppins'; 

const LandingPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Define isLoggedIn state

  useEffect(() => {
    // Check if the user is logged in based on email stored in localStorage
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

   return (
    <div className="bg-gradient-to-r from-[#000428] to-[#004e92] min-h-screen font-poppins">
      <Header />
      <div>
      {isLoggedIn ? <UserNavbar /> : <Navbar />}
      {/* Rest of your landing page content */}
    </div>
      <header className="py-4">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <Link to="/" className="text-[#3cadc1] font-bold text-4xl mt-10">Find your dream job now</Link>
          <p className='mt-5 text-white'>5 lakh+ jobs for you to explore</p>
          <br />
          <br />
          <div className="w-full max-w-3xl bg-gray-200 rounded-full px-4 py-2 flex items-center justify-between">
            <input
              type="text"
              placeholder="Enter skills / designations / companies"
              className="w-full bg-transparent outline-none"
            />
            <div className="flex space-x-4">
              <select className="bg-transparent text-gray-600">
                <option value="">Select Experience</option>
                <option value="1">1 Year</option>
                <option value="2">2 Years</option>
                <option value="3">3 Years</option>
              </select>
              <select className="bg-transparent text-gray-600">
                <option value="">Select Location</option>
                <option value="New York">Coimbatore</option>
                <option value="Los Angeles">Bengaluru</option>
                <option value="Chicago">Chennai</option>
                <option value="New York">Pune</option>
                <option value="Los Angeles">Mumbai</option>
                <option value="Chicago">Delhi</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">Search</button>
            </div>
          </div>
        </div>
      </header>
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl text-[#06d9ff] font-bold mb-4">Featured Companies Actively Hiring</h2>
          <div className="flex justify-center space-x-4">
            <div className="bg-white rounded-full px-4 py-2 text-sm">All</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm">IT Services</div>
            <div className="bg-white rounded-full px-4 py-2 text-sm">BFS</div>
          </div>
        </div>


      
      </section>
      <section className="py-8 overflow-hidden">
        <div className="container ml-20 flex overflow-x-auto space-x-4">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 text-sm w-64 box-shadow: 0px 0px 55px 46px #63b3ed shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/TCS_NewLogo_Final_RGB.png/1200px-TCS_NewLogo_Final_RGB.png" alt="Company Logo" className="w-30 h-30 object-cover mb-2 mt-5" />
            <h3 className="text-lg font-semibold mb-1 mt-10">Tata Consultancy Services</h3>
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.5</p>
            </div>
            <p className="text-[#0cbfe9] mb-2">235 Reviews</p>
            <p className="text-gray-400">TCS, a global leader in IT services, consulting, and business solutions, leverages technology for business transformation and helps catalyze change.</p>
          </div>
      
          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 text-sm w-64">
            <img src="https://www.zohowebstatic.com/sites/zweb/images/commonroot/zoho-logo-web.svg" alt="Company Logo" className="w-30 h-30 object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1 mt-10">Zoho Corporation</h3>
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            <p className="text-[#0cbfe9] mb-2">180 Reviews</p>
            <p className="text-gray-400">Zoho Corporation is an Indian multinational technology company that makes computer software and web-based business tools. It is best known for the online office suite offering Zoho Office Suite.</p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 text-sm w-64">
            <img src="https://www.opentext.com/assets/images/partners/cognizant-logo-416x274.png" alt="Company Logo" className="w-full h-32 object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">Cognizant</h3>
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            <p className="text-[#0cbfe9] mb-2">180 Reviews</p>
            <p className="text-gray-400">Cognizant is an  information technology services and consulting company. It is headquartered in Teaneck, New Jersey, U.S. Cognizant is part of the NASDAQ-100 and trades under CTSH.</p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 text-sm w-64">
            <img src="https://www.adityabirla.com/Assets/images/our-download-logo.png" alt="Company Logo" className="w-full h-32 object-cover mb-2" />
            <h3 className="text-lg font-semibold mb-1">Aditya Birla Group</h3>
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            <p className="text-[#0cbfe9] mb-2">180 Reviews</p>
            <p className="text-gray-400">The Aditya Birla Group is an Indian multinational conglomerate, headquartered in Mumbai. The group has a presence in 36 nations and a combined annual revenue of $65 billion</p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-md p-4 text-sm w-64">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png" alt="Company Logo" className="w-30 h-20 object-cover mb-2 mt-5" />
            <h3 className="text-lg font-semibold mb-1 mt-10">Infosys</h3>
            <div className="flex items-center mb-1">
              <img src="https://freesvg.org/img/1289679474.png" alt="Star" className="w-4 h-4 mr-1" />
              <p>4.2</p>
            </div>
            <p className="text-[#0cbfe9] mb-2">180 Reviews</p>
            <p className="text-gray-400">Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services.  </p>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto text-center ">
        <button className="bg-blue-600 text-white px-6 py-3 mb-10 rounded-full font-semibold hover:bg-blue-700">View all companies</button>

        <section className="py-8 overflow-hidden">
          <div className="mx-auto px-10 ml-0 flex justify-center items-center mb-10">
            <div className="bg-white bg-opacity-15 rounded-lg  p-4 text-sm w-screen shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
              {/* <img src="https://cdn.dribbble.com/userupload/13629248/file/original-89eca8f37697efa295955ac0f4482cd1.png?resize=1024x1205" alt="Image" className="w-10 h-10 float-left mr-4" /> */}
              <div className="text-center">
                <h1 className="text-2xl font-bold mt-20">Introducing a career platform for college students & fresh grads</h1>
                <p className="text-white mb-4">Explore contests, webinars, take aptitude test, prepare for your dream career & find jobs & internships</p>
                <div className="flex justify-center mt-10 items-center space-x-4">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Expert speak</button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Contests</button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">NCAT</button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Pathfinder</button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold hover:bg-blue-700">Jobs & Internships</button>
                </div>
                <div className="mt-10">
                  <img src="https://cdn.dribbble.com/userupload/13629316/file/original-07d5608012c03c9128d86427254aaacf.png?resize=1366x400" alt="Custom Image" className="w-90  h-20 mx-auto mt-10" />
                </div>
                <div className="mt-2">
                </div>
                <h1 className="text-2xl font-bold mt-5">Unlock Exclusive Benefits: Download Our App Today!</h1>
                <p className="text-white mb-4">Discover convenience at your fingertips – download our app from the Play Store today! Gain instant access to 
                thousands of job listings, career resources, and exclusive course discounts. Plus, share the app with 
                friends to both enjoy a generous 10% discount on our premium courses. Don't wait – enhance your c
                areer journey and save big with our app now!</p>
              </div>
              <p className="text-black mb-2 text-lg">Refer a Friend and Get ₹100</p>

                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 mt-6 " onClick={togglePopup}>Refer a Friend</button>
            </div>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 mr-20 ml-20">
  <div className="bg-[#0cbfe9] bg-opacity-10 rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
    <h2 className="text-xl text-[#0cbfe9] font-semibold mb-10">Basic Plan</h2>
    <p className='text-[#3cadc1]'>Price: Free</p>
    <p className='text-[#43e3ff] mt-5'>Features:</p>
    <ul className="list-disc text-white pl-6">
      <li>Access to Basic Job Listings</li>
      <li>Limited Course Access</li>
      <li>Standard Customer Support</li>
      <li>No Premium Features</li>
    </ul>
    <br />
    <br></br>
    <p className='text-yellow-600 mt-10'>Ideal For: Beginners and Job Seekers Exploring Options</p>
    <Link to="/basic-plan" className="block mt-10 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
  </div>
  <div className="bg-[#0cbfe9] bg-opacity-10 rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
    <h2 className="text-xl text-[#0cbfe9] font-semibold mb-10">Premium Plan</h2>
    <p className='text-[#3cadc1]'>Price: $49/month</p>
    <p className='text-[#43e3ff] mt-5'>Features:</p>
    <ul className="list-disc text-white pl-6">
      <li>Access to Premium Job Listings</li>
      <li>Full Course Access</li>
      <li>Premium Customer Support</li>
      <li>Exclusive Webinars and Workshops</li>
      <li>Resume Review and Optimization</li>
    </ul>
    <br />

    <p className='text-yellow-600 mt-10'>Ideal For: Career Advancers and Serious Learners</p>
    <Link to="/pro-plan" className="block mt-10 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upgrade</Link>
  </div>
  <div className="bg-[#0cbfe9] bg-opacity-10 rounded-lg shadow-lg p-6 h-full ring-2 ring-blue-500 ring-opacity-50">
    <h2 className="text-xl text-[#0cbfe9] font-semibold mb-10">Enterprise Plan</h2>
    <p className='text-[#3cadc1]'>Price: Custom Pricing</p>
    <p className='text-[#43e3ff] mt-5'>Features:</p>
    <ul className="list-disc text-white pl-6">
      <li>Custom Solutions for Businesses</li>
      <li>Unlimited Access to Job Listings & Courses</li>
      <li>Advanced Analytics and Reporting</li>
      <li>White-labeling Options</li>
      <li>On-site Training and Support</li>
    </ul>
    <br>
    </br>
    <br></br>
    <p className='text-yellow-600 mt-5'>Ideal For: Large Enterprises and Organizations with Specific Needs</p>
    <Link to="/enterprise-plan" className="block mt-10 text-center bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Contact Us</Link>
  </div>
</div>

      
      <section className="py-8 overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-md p-6 text-sm w-full max-w-screen-xl flex justify-center">
            <div className="flex flex-col items-center pr-20">
              <h2 className="text-4xl font-bold mb-2 text-blue-600">300K+</h2>
              <p className="text-lg">Companies Hiring</p>
            </div>
            <div className="border-l border-gray-300 h-16"></div>
            <div className="flex flex-col items-center px-20">
              <h2 className="text-4xl font-bold mb-2 text-blue-600">10K+</h2>
              <p className="text-lg">New Openings Everyday</p>
            </div>
            <div className="border-l border-gray-300 h-16"></div>
            <div className="flex flex-col items-center px-20">
              <h2 className="text-4xl font-bold mb-2 text-blue-600">21Mn+</h2>
              <p className="text-lg">Active Students</p>
            </div>
            <div className="border-l border-gray-300 h-20"></div>
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
