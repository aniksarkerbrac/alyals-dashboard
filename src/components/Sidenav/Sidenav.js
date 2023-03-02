import React from 'react';
import './Sidenav.css';
const Sidenav = () => {
    return (
        // <div class="hold-transition sidebar-mini">
        
        //   <div class="wrapper">
          <aside class="main-sidebar sidebar-dark-primary elevation-4">

            <a href="" class="brand-link">
              <span class="brand-text d-flex justify-content-center font-weight-light">Alyals Logo</span>
            </a>

            <div class="sidebar">

              <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                  
                </div>
                <div class="info">
                  <a href="#" class="d-block">Alexander Pierce</a>
                </div>
              </div>

              
              {/* <div class="form-inline">
                <div class="input-group" data-widget="sidebar-search">
                  <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
                  <div class="input-group-append">
                    <button class="btn btn-sidebar">
                      <i class="fas fa-search fa-fw"></i>
                    </button>
                  </div>
                </div>
              </div> */}

              
              <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                  <li class="nav-item">
                    <a href="/business" class="nav-link">
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Business
                      </p>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="/category" class="nav-link">
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Category
                      </p>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="/brand" class="nav-link">
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Brand
                      </p>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Product
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="/product/newProduct" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>New Product</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="/product/productList" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Product List</p>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      <i class="nav-icon fas fa-th"></i>
                      <p>
                        Supplier
                        <i class="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul class="nav nav-treeview">
                      <li class="nav-item">
                        <a href="/supplier/newSupplier" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>New Supplier</p>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="/supplier/supplierList" class="nav-link">
                          <i class="far fa-circle nav-icon"></i>
                          <p>Supplier List</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  
                </ul>
              </nav>
              
            </div>

            </aside>
        //   </div>
            
        // </div>
    );
};

export default Sidenav;