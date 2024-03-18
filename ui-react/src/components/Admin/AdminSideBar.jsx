import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/poppins';

const AdminSidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg text-black flex flex-col h-full w-64 mb-0 mt-5 ml-5">
    <a href="/" className="ml-5 mt-5">
      <img src="https://cdn.dribbble.com/userupload/13643661/file/original-22f3ce44893307f8bca022a995269d30.png?resize=1563x362" alt="Career Profile Icon" className="h-10 w-50 ml-3 mt-0" />
    </a>
      <ul className="flex-1 ml-5 mt-5">
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/459911/dashboard.svg" alt="Dashboard Icon" className="w-6 h-6 mr-2" /><Link to="/dashboard" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Dashboard</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/374703/job-profile.svg" alt="Jobs Icon" className="w-6 h-6 mr-2" /><Link to="/jobs" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Jobs</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/507260/dashboard.svg" alt="Candidates Icon" className="w-6 h-6 mr-2" /><Link to="/candidates" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Candidates</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/503592/support.svg" alt="Support Icon" className="w-6 h-6 mr-2" /><Link to="/support" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Support</Link></li>
        <h2 className="text-xl font-bold mb-4 mt-10 text-black font-poppins">Career profile</h2>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/503122/write.svg" alt="Features Icon" className="w-6 h-6 mr-2" /><Link to="/features" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Features</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/528124/chart-2.svg" alt="Forms & Charts Icon" className="w-6 h-6 mr-2" /><Link to="/forms-charts" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Forms & Charts</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/507410/rows.svg" alt="Tables Icon" className="w-6 h-6 mr-2" /><Link to="/tables" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Tables</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/372092/storage-badged.svg" alt="Apps & Widgets Icon" className="w-6 h-6 mr-2" /><Link to="/apps-widgets" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Apps & Widgets</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/507354/lock.svg" alt="Authentication Icon" className="w-6 h-6 mr-2" /><Link to="/authentication" className="block py-2 px-6 hover:bg-white hover:bg-opacity-20 rounded">Authentication</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/486436/maintenance-warning-filled.svg" alt="Miscellaneous Icon" className="w-6 h-6 mr-2" /><Link to="/miscellaneous" className="block py-2 px-6 hover:bg-gray-200 rounded">Maintenance</Link></li>
      </ul>
      <div className="py-4 px-6 mt-5">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 w-full">Exit</button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded w-full">Logout</button>
      </div>
    </div>
  );
};

export default AdminSidebar;
