// AdminDashboard.jsx
import React from 'react';
import TopBar from '../../components/Admin/TopBar';
import AdminSidebar from '../../components/Admin/AdminSideBar';
import DetailDashboard from '../../components/Admin/DetailDashboard';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
     <TopBar/>
      <div className="flex">
       
        <AdminSidebar/>
        <DetailDashboard/>
        
      </div>
    </div>
  );
};

export default AdminDashboard;
