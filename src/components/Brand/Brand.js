import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import TopNavbar from '../TopNavbar/TopNavbar';
import Form from '../Form/Form';
import MaterialTAble from '../MaterialTable/MaterialTAble';

const Brand = () => {
    const formName = 'Brand';
    return (
        <div class="hold-transition sidebar-mini">
          <div class="wrapper">
            <Sidenav></Sidenav>
            <TopNavbar></TopNavbar>
            <div class="content-wrapper py-3">
              <Form formName={formName}></Form>
              <MaterialTAble></MaterialTAble>
            </div>
          </div>
        </div>
    );
};

export default Brand;