import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import TopNavbar from '../TopNavbar/TopNavbar';
import MaterialTAble from '../MaterialTable/MaterialTAble';

const ProductList = () => {
    return (
        <div class="hold-transition sidebar-mini">
          <div class="wrapper">
            <Sidenav></Sidenav>
            <TopNavbar></TopNavbar>
            <div class="content-wrapper py-3">
              <MaterialTAble></MaterialTAble>
            </div>
          </div>
        </div>
    );
};

export default ProductList;