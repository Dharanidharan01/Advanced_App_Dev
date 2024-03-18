// AdminDashboard.jsx
import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSideBar';
import DetailDashboard from '../../components/Admin/DetailDashboard';
import JobPosting from '../../components/Admin/Dashboard/JobPosting';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard bg-gradient-to-r from-[#000428] to-[#004e92] ">
    
      <div className="flex">
        <AdminSidebar/>
             {/* <JobPosting/> */}
         <DetailDashboard/>
        
      </div>
    </div>
  );
};

export default AdminDashboard;
