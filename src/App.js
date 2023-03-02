import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Business from "./components/Business/Business";
import Category from "./components/Category/Category";
import Brand from "./components/Brand/Brand";
import NewProduct from "./components/Product/NewProduct";
import ProductList from "./components/Product/ProductList";
import NewSupplier from "./components/Supplier/NewSupplier";
import SupplierList from "./components/Supplier/SupplierList";
import ChangePassword from "./components/ChangePassword/ChangePassword";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/SignIn" element={<><SignIn /></>} />
          <Route path="/SignUp" element={<><SignUp /></>} />
          <Route path="/changePassword" element={<><ChangePassword /></>} />
          <Route path="/business" element={<><Business /></>} />
          <Route path="/category" element={<><Category /></>} />
          <Route path="/brand" element={<><Brand /></>} />
          <Route path="/product/newProduct" element={<><NewProduct /></>} />
          <Route path="/product/productList" element={<><ProductList /></>} />
          <Route path="/supplier/newSupplier" element={<><NewSupplier /></>} />
          <Route path="/supplier/supplierList" element={<><SupplierList /></>} />
          <Route exact path="/" element={<><Business /></>} />
        </Routes>
    </Router>
  );
}

export default App;
