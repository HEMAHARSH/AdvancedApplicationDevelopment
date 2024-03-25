import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginFinal from './pages/auth/login';
import Home from './pages/user/home';
import Register from './pages/auth/register';
import Dashboard from './pages/admin/dashboard';
import Hampers from './pages/user/hamper';
import CartPage from './pages/user/cart';
import ProductDetails from './pages/user/productview';
import Billing from './pages/user/billing';
import UserInformation from './pages/admin/userInfo';
import Keychain from './pages/user/keychain';
import AddCategory from './pages/admin/addCategory';
import AddProduct from './pages/admin/addProduct';

function App() {
  // Sample categories array
  const categories = ['Category 1', 'Category 2', 'Category 3'];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginFinal />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/userinfor" element={<UserInformation />} />
        <Route path="/hamper" element={<Hampers />} />
        <Route path="/keychains" element={<Keychain />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/admin/addCategory" element={<AddCategory />} />
        {/* Pass the categories prop to AddProduct */}
        <Route path="/admin/addProduct" element={<AddProduct categories={categories} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
