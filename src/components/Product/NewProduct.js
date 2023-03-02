import React from 'react';
import Sidenav from '../Sidenav/Sidenav';
import TopNavbar from '../TopNavbar/TopNavbar';
import Form from '../Form/Form';

const NewProduct = () => {
    const formName = 'Product';
    return (
        <div class="hold-transition sidebar-mini">
          <div class="wrapper">
            <Sidenav></Sidenav>
            <TopNavbar></TopNavbar>
            <div class="content-wrapper py-3">
              <Form formName={formName}></Form> 
            </div>
          </div>
        </div>
    );
};

export default NewProduct;