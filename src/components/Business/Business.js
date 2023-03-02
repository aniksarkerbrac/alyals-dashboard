import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import TopNavbar from '../TopNavbar/TopNavbar';
import BusinessForm from '../Form/BusinessForm';
import MaterialTAble from '../MaterialTable/MaterialTAble';

const Business = () => {
    return (
        <div class="hold-transition sidebar-mini">
          <div class="wrapper">
            <Sidenav></Sidenav>
            <TopNavbar></TopNavbar>
            <div class="content-wrapper py-3">
              <BusinessForm></BusinessForm>
              <MaterialTAble></MaterialTAble>
            </div>
          </div>
        </div>
    );
};

export default Business;