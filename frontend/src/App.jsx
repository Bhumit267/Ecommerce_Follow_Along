import './App.css';
//eslint-disable-next-line
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDetails, SignupPage, CreateAddress } from './Routes/routes.js';
import { Home, LoginPage } from "./Routes/routes.js";
import { CreateProduct, MyProducts, Cart, Profile } from "./Routes/routes.js"; // Removed duplicate CreateAddress import

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/product' element={<CreateProduct />} />
        <Route path='/product/:id' element={<CreateProduct />} />
        <Route path='/myproducts' element={<MyProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/productdetails/:id' element={<ProductDetails />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/create-address" element={<CreateAddress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
