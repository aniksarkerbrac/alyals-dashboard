import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import TopNavbar from '../TopNavbar/TopNavbar';
import CategoryForm from '../CategoryForm/CategoryForm';
import DataTable from '../DataTable/DataTable';

const Dashboard = () => {
    return (
        <div class="hold-transition sidebar-mini">
          <div class="wrapper">
            <Sidenav></Sidenav>
            <TopNavbar></TopNavbar>
            <CategoryForm></CategoryForm>
            {/* <DataTable></DataTable> */}
          </div>
            
            
        </div>
    );
};

export default Dashboard;