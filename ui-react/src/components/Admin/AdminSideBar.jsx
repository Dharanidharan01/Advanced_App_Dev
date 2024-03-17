import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 flex flex-col h-full w-64">
      <div className="py-4 px-6 text-lg font-semibold">Admin Panel</div>
      <ul className="flex-1 ml-5">
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/507260/dashboard.svg" alt="Dashboard Icon" className="w-6 h-6 mr-2" /><Link to="/dashboard" className="block py-2 px-6 hover:bg-gray-200 rounded">Dashboard</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/374703/job-profile.svg" alt="Jobs Icon" className="w-6 h-6 mr-2" /><Link to="/jobs" className="block py-2 px-6 hover:bg-gray-200 rounded">Jobs</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/507260/dashboard.svg" alt="Candidates Icon" className="w-6 h-6 mr-2" /><Link to="/candidates" className="block py-2 px-6 hover:bg-gray-200 rounded">Candidates</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/503592/support.svg" alt="Support Icon" className="w-6 h-6 mr-2" /><Link to="/support" className="block py-2 px-6 hover:bg-gray-200 rounded">Support</Link></li>
        <li className="flex items-center"><Link to="/components" className="block py-2 mt-5 hover:bg-gray-200 ml-0 px-6 rounded">Components</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/503122/write.svg" alt="Features Icon" className="w-6 h-6 mr-2" /><Link to="/features" className="block py-2 px-6 hover:bg-gray-200 rounded">Features</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/528124/chart-2.svg" alt="Forms & Charts Icon" className="w-6 h-6 mr-2" /><Link to="/forms-charts" className="block py-2 px-6 hover:bg-gray-200 rounded">Forms & Charts</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/507410/rows.svg" alt="Tables Icon" className="w-6 h-6 mr-2" /><Link to="/tables" className="block py-2 px-6 hover:bg-gray-200 rounded">Tables</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/372092/storage-badged.svg" alt="Apps & Widgets Icon" className="w-6 h-6 mr-2" /><Link to="/apps-widgets" className="block py-2 px-6 hover:bg-gray-200 rounded">Apps & Widgets</Link></li>
        <li className="flex items-center"><img src="https://www.svgrepo.com/show/507354/lock.svg" alt="Authentication Icon" className="w-6 h-6 mr-2" /><Link to="/authentication" className="block py-2 px-6 hover:bg-gray-200 rounded">Authentication</Link></li>
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
