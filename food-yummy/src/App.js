import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import ProductList from "./pages/ProductList";
import SingleProduct from "./pages/SingleProduct";
import Success from "./pages/Success";

import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.customer.currentCustomer);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate replace to="/" /> : <Login />}
        />
        <Route exact path="/" element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route
          path="register"
          element={user ? <Navigate replace to="/login" /> : <Register />}
        />
        <Route path="productList" element={<ProductList />} />
        <Route path="payment" element={user ? <Payment /> : <Login />} />
        <Route path="success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
